export type Money = {
  amount: string;
  currencyCode: string;
};

export type ProductImage = {
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
  compareAtPrice: Money | null;
};

export type Product = {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  images: ProductImage[];
  variants: ProductVariant[];
};

export type Cart = {
  id: string;
  checkoutUrl: string;
};
