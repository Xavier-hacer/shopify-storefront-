import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = { title: "Legal Notice | Velunna" };

export default function LegalNoticePage() {
  return (
    <PolicyLayout title="Legal Notice">
      <p>
        This Legal Notice applies to this website (the &quot;Site&quot;),
        owned and operated by Velunna (&quot;Velunna,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;). By accessing or using this
        Site, you agree to the terms outlined below.
      </p>

      <h2>1. Business Identification</h2>
      <ul>
        <li>Business/Trade Name: Velunna</li>
        <li>Legal Entity Name: Velunna</li>
        <li>
          Business Address: 3301 Aster CT{" "}
          <mark>[complete with city, state &amp; ZIP]</mark>
        </li>
        <li>
          Contact Email:{" "}
          <a href="mailto:jack.loop@icloud.com">jack.loop@icloud.com</a>
        </li>
        <li>Phone: +1 910-444-9018</li>
      </ul>
      <p>
        Velunna is currently operating as a sole proprietorship. Forming an
        LLC is strongly recommended before scaling revenue &mdash; it
        separates personal assets from business liability, which matters
        more the bigger this gets.
      </p>

      <h2>2. Purpose of This Site</h2>
      <p>
        This Site is operated for the purpose of marketing and selling
        consumer skincare wellness devices, including but not limited to
        LED light therapy face masks, and related accessories.
      </p>

      <h2>3. Product &amp; Health Disclaimer</h2>
      <p>
        The products sold on this Site, including the Velunna light
        therapy mask, are cosmetic wellness devices and are not medical
        devices. They are not intended to diagnose, treat, cure, or
        prevent any disease or medical condition.
      </p>
      <ul>
        <li>
          Results from product use vary by individual and are not
          guaranteed.
        </li>
        <li>
          Consult a licensed physician or dermatologist before use if you
          are pregnant, have a photosensitivity condition, are taking
          photosensitizing medication, have a history of skin cancer or
          eye conditions, or have any other relevant medical concern.
        </li>
        <li>
          Discontinue use immediately if irritation, discomfort, or
          adverse reaction occurs.
        </li>
        <li>
          This product is not intended for use by children without adult
          supervision.
        </li>
        <li>
          Statements on this Site regarding skin appearance, tone, or
          texture reflect general product marketing claims and individual
          customer experiences, and are not clinical guarantees.
        </li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on this Site &mdash; including but not limited to
        text, graphics, logos, product images, videos, and the
        &quot;Velunna&quot; name and branding &mdash; is the property of
        Velunna or its licensors, and is protected by applicable copyright
        and trademark laws. Reproduction, distribution, or use of this
        content without prior written permission is prohibited.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Velunna shall not be
        liable for any indirect, incidental, special, or consequential
        damages arising from:
      </p>
      <ul>
        <li>Use or inability to use the products or Site</li>
        <li>Any reliance on information presented on this Site</li>
        <li>
          Any interruption, error, or delay in the operation of the Site
        </li>
      </ul>
      <p>
        Your use of this Site and any products purchased through it is at
        your own risk. Products are provided &quot;as is&quot; and &quot;as
        available,&quot; without warranties of any kind beyond those
        explicitly stated in our{" "}
        <a href="/refund-policy">Refund Policy</a> or required by
        applicable consumer protection law.
      </p>

      <h2>6. Third-Party Links &amp; Services</h2>
      <p>
        This Site may use third-party services (payment processors,
        analytics, advertising pixels, fulfillment partners). We are not
        responsible for the content, policies, or practices of
        third-party sites or services linked from this Site.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        This Legal Notice and your use of the Site shall be governed by
        the laws of the State of <mark>[state to be confirmed]</mark>,
        United States, without regard to conflict of law principles.
      </p>

      <h2>8. Changes to This Notice</h2>
      <p>
        We reserve the right to update this Legal Notice at any time.
        Continued use of the Site after changes are posted constitutes
        acceptance of the revised notice.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions regarding this Legal Notice, contact us at{" "}
        <a href="mailto:jack.loop@icloud.com">jack.loop@icloud.com</a> or
        call +1 910-444-9018.
      </p>
    </PolicyLayout>
  );
}
