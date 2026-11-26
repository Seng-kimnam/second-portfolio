"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "About" },
    { href: "/profile", label: "Profile" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/portfolio", label: "Portfolio" },

    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
          >
            Seng Kimnam
          </Link>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative ${
                      isActive(link.href)
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        layoutId="underline"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer text-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
