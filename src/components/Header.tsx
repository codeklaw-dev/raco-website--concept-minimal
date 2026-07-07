"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/** Map of pathname → page key used for the active-link state. */
const ACTIVE: Record<string, string> = {
  "/": "home",
  "/products": "products",
  "/research": "research",
  "/services": "services",
  "/about": "about",
  "/careers": "careers",
};

const NAV_ITEMS: { href: string; page: string; label: string }[] = [
  { href: "/", page: "home", label: "Home" },
  { href: "/products", page: "products", label: "Lab & Products" },
  { href: "/research", page: "research", label: "Research" },
  { href: "/services", page: "services", label: "Services" },
  { href: "/about", page: "about", label: "About" },
  { href: "/careers", page: "careers", label: "Careers" },
];

export default function Header() {
  const pathname = usePathname();
  const active = ACTIVE[pathname ?? "/"] ?? "home";
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="dot"></span>
          RACO&nbsp;AI <sup>TECHNOLOGIES</sup>
        </Link>
        <nav
          className={`nav-links${open ? " open" : ""}`}
          id="navLinks"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={active === item.page ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link className="nav-cta" href="/#contact">
            Talk to RACO
          </Link>
          <button
            className="burger"
            id="burger"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
