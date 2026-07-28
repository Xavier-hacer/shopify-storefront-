import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = { title: "Shipping Policy | Velunna" };

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout title="Shipping Policy">
      <p>At Velunna, we offer free shipping on all orders.</p>

      <h2>Processing Time</h2>
      <p>Orders are processed within 1&ndash;3 business days after purchase.</p>

      <h2>Shipping Time</h2>
      <p>
        Once shipped, orders typically arrive within 7&ndash;15 business
        days, depending on your location.
      </p>

      <h2>Order Tracking</h2>
      <p>
        You will receive a tracking number via email once your order has
        shipped.
      </p>

      <h2>Delays</h2>
      <p>
        Occasionally, shipping delays may occur due to high demand,
        holidays, or carrier issues. If your order is taking longer than
        expected, please contact us and we&apos;ll be happy to help.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about your order, please contact us at{" "}
        <a href="mailto:jack.loop@icloud.com">jack.loop@icloud.com</a>.
      </p>
    </PolicyLayout>
  );
}
