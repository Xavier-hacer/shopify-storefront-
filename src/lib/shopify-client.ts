"use client";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const publicToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const apiVersion = "2024-10";

const CART_CREATE_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { id checkoutUrl }
      userErrors { message }
    }
  }
`;

export async function createCartAndGetCheckoutUrl(variantId: string, quantity = 1): Promise<string> {
  const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": publicToken!,
    },
    body: JSON.stringify({
      query: CART_CREATE_MUTATION,
      variables: { lines: [{ merchandiseId: variantId, quantity }] },
    }),
  });

  const json = await res.json();
  const userErrors = json?.data?.cartCreate?.userErrors;
  if (userErrors?.length) {
    throw new Error(userErrors.map((e: { message: string }) => e.message).join(", "));
  }

  const checkoutUrl = json?.data?.cartCreate?.cart?.checkoutUrl;
  if (!checkoutUrl) {
    throw new Error("Could not create checkout — please try again.");
  }

  return checkoutUrl;
}
