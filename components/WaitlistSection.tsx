"use client";

import { useState } from "react";
import { ArrowRight, Loader } from "lucide-react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"creator" | "producer" | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!email || !role) return;
    setStatus("loading");
    // Simulate API call — wire up to your backend / Mailchimp / Supabase later
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section
      id="waitlist"
      style={{
        padding: "120px 48px",
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(232,184,75,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span style={{ display: "block", width: 24, height: 1, background: "var(--gold)" }} />
          Early Access
          <span style={{ display: "block", width: 24, height: 1, background: "var(--gold)" }} />
        </div>

        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(52px, 8vw, 108px)",
            letterSpacing: 2,
            lineHeight: 0.9,
            marginBottom: 24,
          }}
        >
          YOUR BEATS.<br />
          <span style={{ color: "var(--gold)" }}>YOUR RULES.</span>
        </h2>

        <p
          style={{
            fontSize: 17,
            color: "rgba(245,240,232,0.5)",
            maxWidth: 480,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          Join the waitlist. Early producers get{" "}
          <span style={{ color: "var(--gold)" }}>zero commission</span> for 6 months.
          Creators get first access to the catalog.
        </p>

        {status === "success" ? (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(46,194,126,0.1)",
              border: "1px solid rgba(46,194,126,0.3)",
              color: "var(--green, #2ec27e)",
              padding: "16px 32px",
              borderRadius: 4,
              fontFamily: "'DM Mono', monospace",
              fontSize: 14,
              letterSpacing: 1,
              animation: "fadeUp 0.4s ease both",
            }}
          >
            ✓ You're on the list. We'll be in touch.
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            {/* Role toggle */}
            <div style={{ display: "flex", gap: 10, width: "100%" }}>
              {(["creator", "producer"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  style={{
                    flex: 1,
                    padding: "12px 0",
                    border: `1px solid ${role === r ? "var(--gold)" : "var(--border)"}`,
                    background: role === r ? "rgba(232,184,75,0.1)" : "transparent",
                    color: role === r ? "var(--gold)" : "rgba(245,240,232,0.4)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: 3,
                    transition: "all 0.2s",
                  }}
                >
                  I'm a {r === "creator" ? "🎬 Creator" : "🎤 Producer"}
                </button>
              ))}
            </div>

            {/* Email input */}
            <div style={{ display: "flex", width: "100%", gap: 0 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                style={{
                  flex: 1,
                  background: "var(--mid)",
                  border: "1px solid var(--border)",
                  borderRight: "none",
                  borderRadius: "3px 0 0 3px",
                  padding: "14px 18px",
                  color: "var(--white)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={!email || !role || status === "loading"}
                style={{
                  background:
                    !email || !role
                      ? "rgba(232,184,75,0.4)"
                      : "var(--gold)",
                  border: "none",
                  color: "var(--black)",
                  padding: "14px 22px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  cursor: !email || !role ? "not-allowed" : "pointer",
                  borderRadius: "0 3px 3px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "background 0.2s",
                  fontWeight: 500,
                }}
              >
                {status === "loading" ? (
                  <Loader size={14} style={{ animation: "spin 1s linear infinite" }} />
                ) : (
                  <>Join <ArrowRight size={14} /></>
                )}
              </button>
            </div>

            {status === "error" && (
              <p style={{ color: "var(--red)", fontFamily: "'DM Mono', monospace", fontSize: 12 }}>
                Something went wrong. Try again.
              </p>
            )}

            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "rgba(245,240,232,0.2)",
                letterSpacing: 0.5,
              }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
