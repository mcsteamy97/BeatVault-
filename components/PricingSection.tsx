"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const PLANS = [
  {
    tier: "Free Use",
    tagline: "Try before you buy",
    price: 0,
    note: "No card needed",
    color: "#2ec27e",
    features: [
      "Non-monetized content only",
      "Attribution required",
      "YouTube & TikTok safe",
      "Personal projects",
      "Up to 10K views",
    ],
    cta: "Get Free Beats",
    featured: false,
  },
  {
    tier: "Creator",
    tagline: "For monetized channels",
    price: 29,
    note: "Per beat · one-time",
    color: "#e8b84b",
    features: [
      "Monetized YouTube & Twitch",
      "No attribution required",
      "Unlimited streams & views",
      "Podcast & social media",
      "DMCA whitelist included",
    ],
    cta: "License a Beat",
    featured: true,
  },
  {
    tier: "Commercial",
    tagline: "For professional use",
    price: 99,
    note: "Per beat · one-time",
    color: "#d94f3a",
    features: [
      "TV, film & advertising",
      "Indie game soundtracks",
      "Physical product sync",
      "Unlimited commercial use",
      "License certificate + contract",
    ],
    cta: "Go Commercial",
    featured: false,
  },
];

export default function PricingSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      style={{
        padding: "100px 48px",
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ display: "block", width: 24, height: 1, background: "var(--gold)" }} />
          License Tiers
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 5vw, 68px)",
            letterSpacing: 1,
            lineHeight: 1,
          }}
        >
          SIMPLE<br />
          <span style={{ color: "var(--gold)" }}>PRICING</span>
        </h2>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          maxWidth: 960,
        }}
      >
        {PLANS.map((plan, i) => (
          <div
            key={plan.tier}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: `1px solid ${plan.featured ? plan.color : hovered === i ? "rgba(232,184,75,0.2)" : "var(--border)"}`,
              borderRadius: 6,
              padding: "40px 36px",
              position: "relative",
              background: plan.featured
                ? `linear-gradient(160deg, ${plan.color}08, transparent)`
                : "var(--mid)",
              transition: "all 0.25s ease",
              transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
              animation: `fadeUp 0.6s ease ${i * 0.12}s both`,
            }}
          >
            {plan.featured && (
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  background: plan.color,
                  color: "var(--black)",
                  padding: "4px 10px",
                  borderRadius: 2,
                  fontWeight: 500,
                }}
              >
                Most Popular
              </div>
            )}

            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: plan.color,
                marginBottom: 8,
              }}
            >
              {plan.tagline}
            </div>

            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 32,
                letterSpacing: 1,
                marginBottom: 4,
                color: "var(--white)",
              }}
            >
              {plan.tier}
            </div>

            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 60,
                color: plan.color,
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {plan.price === 0 ? (
                "FREE"
              ) : (
                <>
                  <sup style={{ fontSize: 24, verticalAlign: "super" }}>$</sup>
                  {plan.price}
                </>
              )}
            </div>

            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "rgba(245,240,232,0.3)",
                marginBottom: 32,
              }}
            >
              {plan.note}
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
              {plan.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: "rgba(245,240,232,0.6)",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <Check size={13} color={plan.color} style={{ flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>

            <button
              style={{
                width: "100%",
                background: plan.featured ? plan.color : "transparent",
                border: `1px solid ${plan.featured ? plan.color : "rgba(245,240,232,0.2)"}`,
                color: plan.featured ? "var(--black)" : "var(--white)",
                padding: "12px 0",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 2,
                fontWeight: plan.featured ? 500 : 400,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!plan.featured) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = plan.color;
                  (e.currentTarget as HTMLButtonElement).style.color = plan.color;
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.featured) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,240,232,0.2)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--white)";
                }
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
