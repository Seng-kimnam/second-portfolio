import Link from 'next/link'
import { Code2, Mail, Share2 } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-divider-top">
      <div className="page-container py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-2 text-lg font-bold text-foreground">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              just do it and keep doing it.
            </p>
            <p className="text-sm text-muted-foreground">
              Everything is possible. Trust the process and keep moving forward.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'About' },
                { href: '/profile', label: 'Profile' },
                { href: '/skills', label: 'Skills' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Work</h4>
            <ul className="space-y-2">
              {[
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/experience', label: 'Experience' },
                {
                  href: '/university-institutions',
                  label: 'University and Institutions',
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="mailto:sengkimnam97@gmail.com"
                aria-label="Email"
                className="rounded text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kimnam-seng-31595b2b8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded text-muted-foreground transition-colors hover:text-accent"
              >
                <Share2 aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Seng-kimnam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded text-muted-foreground transition-colors hover:text-accent"
              >
                <Code2 aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="glass-divider-top pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved. {'  '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kimnam-seng-31595b2b8"
                className="rounded transition-colors hover:text-accent"
              >
                Seng Kimnam
              </a>
              .
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="rounded text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="rounded text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
