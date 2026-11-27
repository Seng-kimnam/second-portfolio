"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "About" },
  { href: "/profile", label: "Profile" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const isActive = (href: string) => pathname === href;

  // for smooth animation when drop down from hamburger menu
  const panelVariants: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { type: "spring", stiffness: 500, damping: 40, mass: 0.8 },
        opacity: { duration: 0.12, ease: "easeIn" },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { type: "spring", stiffness: 380, damping: 34, mass: 0.8 },
        opacity: { duration: 0.18, ease: "easeOut" },
        when: "beforeChildren",
        staggerChildren: 0.035,
        delayChildren: 0.04,
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: -6 },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 420, damping: 30 },
    },
  };
  return (
    <nav aria-label="Primary navigation" className="sticky top-0 z-50 py-2">
      <GlassCard variant="strong" className="page-container glass-nav ">
        <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-6">
          <Link
            href="/"
            className="inline-block rounded-lg text-2xl font-bold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            Seng Kimnam
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-md text-sm font-medium transition-all duration-200 hover:-translate-y-0.5",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-2 h-0.5 bg-accent"
                  />
                ) : null}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <div className="nav-menu-toggle">
              <GlassButton
                variant="secondary"
                size="icon"
                onClick={() => setIsOpen((open) => !open)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    className="inline-flex"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.16,
                      ease: "easeOut",
                    }}
                  >
                    {isOpen ? (
                      <X aria-hidden="true" className="h-5 w-5" />
                    ) : (
                      <Menu aria-hidden="true" className="h-5 w-5" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </GlassButton>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id="mobile-navigation"
              key="mobile-navigation"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={shouldReduceMotion ? { duration: 0 } : undefined}
              style={{ willChange: "height, opacity" }}
              className="glass-divider-top glass-nav-panel overflow-hidden md:hidden"
            >
              <div className="space-y-1 pb-3 pt-4">
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={shouldReduceMotion ? undefined : linkVariants}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-xl px-3 py-2 text-sm font-medium transition-[background-color,color,transform] duration-200 hover:translate-x-1",
                        isActive(link.href)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-(--glass-bg-hover) hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </GlassCard>
    </nav>
  );
}
