import "server-only";
import type { Product } from "./types";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const publicToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const apiVersion = "2024-10";

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": publicToken!,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join(", "));
  }

  return json.data as T;
}

const PRODUCT_QUERY = `
  query FirstProduct {
    products(first: 1) {
      edges {
        node {
          id
          title
          handle
          descriptionHtml
          images(first: 10) {
            edges {
              node { url altText width height }
            }
          }
          variants(first: 20) {
            edges {
              node {
                id
                title
                availableForSale
                price { amount currencyCode }
                compareAtPrice { amount currencyCode }
              }
            }
          }
        }
      }
    }
  }
`;

type ProductQueryResult = {
  products: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        handle: string;
        descriptionHtml: string;
        images: { edges: Array<{ node: { url: string; altText: string | null; width: number; height: number } }> };
        variants: {
          edges: Array<{
            node: {
              id: string;
              title: string;
              availableForSale: boolean;
              price: { amount: string; currencyCode: string };
              compareAtPrice: { amount: string; currencyCode: string } | null;
            };
          }>;
        };
      };
    }>;
  };
};

export async function getFeaturedProduct(): Promise<Product | null> {
  const data = await shopifyFetch<ProductQueryResult>(PRODUCT_QUERY);
  const node = data.products.edges[0]?.node;
  if (!node) return null;

  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    descriptionHtml: node.descriptionHtml,
    images: node.images.edges.map((e) => e.node),
    variants: node.variants.edges.map((e) => e.node),
  };
}
