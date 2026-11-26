import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { SiteShell } from "@/components/ui/site-shell";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata(
  "Terms of Service",
  "Terms for using Seng Kimnam's portfolio website.",
);

const updatedOn = "November 26, 2026";

export default function TermsOfServicePage() {
  return (
    <SiteShell>
      <PageHero
        title="Terms of Service"
        description={`Last updated: ${updatedOn}`}
      />

      <article className="page-container page-section max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
        <p>
          These terms apply to your use of this portfolio website operated by
          Seng Kimnam (“I,” “me,” or “my”). By using the website, you agree to
          these terms. If you do not agree, please do not use the website.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">
            Website content and intellectual property
          </h2>
          <p>
            The website and its content are provided for general information
            about my work, skills, and experience. Unless otherwise stated,
            original text, designs, and materials on this website belong to me
            or are used with permission. Names, logos, project materials, and
            other third-party content belong to their respective owners.
          </p>
          <p>
            You may view and share links to publicly available pages for
            personal, non-commercial purposes. You may not reproduce,
            distribute, modify, or commercially use website content without the
            relevant rights holder&apos;s prior permission, except where
            applicable law allows it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">Acceptable use</h2>
          <p>
            Use the website lawfully and do not attempt to disrupt, damage, or
            gain unauthorized access to the site or its services. When using the
            contact form, provide accurate information and do not send unlawful,
            abusive, or malicious content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">
            No service agreement through this website
          </h2>
          <p>
            Portfolio descriptions and availability information are for general
            reference and may change. Sending an inquiry or receiving a reply
            does not by itself create a client, employment, or other service
            relationship. Any work I agree to undertake will be governed by a
            separate written agreement describing its scope, fees, timing, and
            applicable terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">
            Third-party websites
          </h2>
          <p>
            This website may link to external websites or projects for
            convenience. I do not control or endorse their content,
            availability, or practices and am not responsible for them. Your use
            of those sites is subject to their own terms and policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">
            Disclaimer and liability
          </h2>
          <p>
            The website is provided on an “as is” and “as available” basis. To
            the extent permitted by applicable law, I make no warranties that it
            will be uninterrupted, error-free, or suitable for a particular
            purpose. Nothing in these terms excludes liability that cannot
            lawfully be excluded.
          </p>
          <p>
            To the extent permitted by applicable law, I will not be liable for
            indirect or consequential loss arising from your use of, or
            inability to use, this website. This does not limit any rights or
            remedies that cannot legally be limited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">
            Changes and governing law
          </h2>
          <p>
            I may update these terms or change the website from time to time.
            The current version will be posted on this page with its update
            date. These terms are governed by the laws of Cambodia, without
            regard to conflict-of-law rules, subject to any mandatory laws that
            apply to you. Disputes will be handled by the competent courts of
            Cambodia, unless applicable law requires otherwise.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a
              className="text-accent underline underline-offset-4"
              href="mailto:sengkimnam97@gmail.com"
            >
              sengkimnam97@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
