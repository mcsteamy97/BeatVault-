"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "20px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${scrolled ? "rgba(245,240,232,0.1)" : "transparent"}`,
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
        animation: "fadeDown 0.5s ease both",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 26,
            letterSpacing: 3,
            color: "var(--gold)",
          }}
        >
          BEAT<span style={{ color: "var(--white)" }}>VAULT</span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: 36,
          margin: 0,
          padding: 0,
        }}
        className="hidden-mobile"
      >
        {[
          ["#how", "How It Works"],
          ["#browse", "Browse Beats"],
          ["#pricing", "Pricing"],
          ["#roadmap", "Roadmap"],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color: "rgba(245,240,232,0.45)",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "var(--white)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "rgba(245,240,232,0.45)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#waitlist"
        style={{
          background: "var(--gold)",
          color: "var(--black)",
          padding: "10px 24px",
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          textDecoration: "none",
          borderRadius: 2,
          fontWeight: 500,
          transition: "background 0.2s, transform 0.15s",
          display: "block",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold-dim, #c49a2a)";
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        }}
      >
        Get Early Access
      </a>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
