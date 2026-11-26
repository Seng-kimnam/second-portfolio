import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { SiteShell } from "@/components/ui/site-shell";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "How Seng Kimnam's portfolio website handles personal information.",
);

const updatedOn = "November 26, 2026";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        title="Privacy Policy"
        description={`Last updated: ${updatedOn}`}
      />

      <article className="page-container page-section max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <p>
            This policy explains how Seng Kimnam (“I,” “me,” or “my”) handles
            information when you visit this portfolio website or contact me
            through it. This website is a personal portfolio and is operated
            from Phnom Penh, Cambodia.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              Information you provide
            </h2>
            <p>
              If you use the contact form, you provide your name, email address,
              subject, and message. If you contact me by email or another
              contact method, I receive the information you choose to include.
              Please do not send sensitive personal information unless it is
              necessary for your inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              Information collected through the website
            </h2>
            <p>
              In production, this website uses Vercel Analytics to understand
              general website usage and performance, such as page visits and
              performance measurements. Vercel may process technical
              information, such as browser or device details, to provide this
              service. Vercel also provides the website hosting and may process
              technical request data as part of delivering and securing the
              website. Please refer to{" "}
              <a
                className="text-accent underline underline-offset-4"
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel&apos;s Privacy Policy
              </a>{" "}
              for its practices.
            </p>
            <p>
              The website&apos;s theme preference may be saved in your
              browser&apos;s local storage so the site can remember your
              light/dark display setting. This preference stays in your browser
              and is not submitted through the contact form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              How information is used and shared
            </h2>
            <p>
              I use contact details and messages to respond to you, discuss
              potential work, and manage related correspondence. Contact form
              submissions are sent to FormSubmit, which processes them so they
              can be delivered to my email. See{" "}
              <a
                className="text-accent underline underline-offset-4"
                href="https://formsubmit.co/privacy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                FormSubmit&apos;s privacy information
              </a>{" "}
              for details about its handling of submissions.
            </p>
            <p>
              I do not sell your personal information. Information may be
              handled by service providers that support contact delivery,
              website hosting, analytics, or security, and may be disclosed if
              required by law or reasonably necessary to protect the website,
              its users, or my rights. These providers may process information
              in countries other than your own.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              Retention and your choices
            </h2>
            <p>
              I keep correspondence only for as long as it is reasonably needed
              to respond, maintain relevant business records, or resolve
              disputes. Service providers may retain information under their
              own policies. You can ask me to access, correct, or delete
              information you sent by emailing{" "}
              <a
                className="text-accent underline underline-offset-4"
                href="mailto:sengkimnam97@gmail.com"
              >
                sengkimnam97@gmail.com
              </a>
              . I will respond to requests as required by applicable law;
              certain records may need to be retained for legitimate purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              Security, links, and changes
            </h2>
            <p>
              I take reasonable steps to protect information, but no online
              transmission or storage method can be guaranteed completely
              secure. This site may link to third-party websites; their privacy
              practices are governed by their own policies. I may update this
              policy from time to time and will post the revised version here
              with a new update date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Contact</h2>
            <p>
              For privacy questions or requests, contact Seng Kimnam at{" "}
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
