"use client";

export default function HowSection() {
  const steps = [
    {
      num: "01",
      icon: "🎬",
      title: "You Need Music",
      body: "You're a creator — YouTube, Twitch, TikTok. You pick a song and get DMCA'd. Boring royalty-free tracks are your only option. Until now.",
    },
    {
      num: "02",
      icon: "🔍",
      title: "Browse & License",
      body: "Search by mood, BPM, genre, or use case. Preview full tracks. Pick a license that fits your channel and budget. Pay once, use forever.",
    },
    {
      num: "03",
      icon: "✅",
      title: "Create Without Fear",
      body: "Instant license certificate. YouTube and Twitch recognize it. No strikes, no takedowns. Your content stays monetized.",
    },
  ];

  const phases = [
    {
      num: "01",
      title: "Foundation",
      status: "Start Here",
      statusColor: "#2ec27e",
      items: ["Landing page live", "Email waitlist", "Upload your beats", "Basic storefront", "Stripe payments"],
    },
    {
      num: "02",
      title: "Marketplace",
      status: "Month 2–3",
      statusColor: "#e8b84b",
      items: ["Producer profiles", "Search & filters", "Preview player", "License certificates", "Creator accounts"],
    },
    {
      num: "03",
      title: "Scale",
      status: "Month 4–6",
      statusColor: "rgba(245,240,232,0.25)",
      items: ["YouTube API whitelist", "Affiliate program", "Subscription tiers", "Mobile app", "Producer payouts"],
    },
    {
      num: "04",
      title: "Moat",
      status: "Month 7+",
      statusColor: "rgba(245,240,232,0.25)",
      items: ["AI beat matching", "Exclusive catalog deals", "Sync licensing agency", "Enterprise packages", "Label partnerships"],
    },
  ];

  return (
    <>
      {/* HOW IT WORKS */}
      <section
        id="how"
        style={{
          padding: "100px 48px",
          background: "var(--black)",
          borderTop: "1px solid var(--border)",
        }}
      >
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
          The Process
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 5vw, 68px)",
            letterSpacing: 1,
            lineHeight: 1,
            marginBottom: 56,
          }}
        >
          HOW IT<br />
          <span style={{ color: "var(--gold)" }}>WORKS</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "var(--black)",
                padding: "48px 40px",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "var(--mid)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "var(--black)")
              }
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 80,
                  color: "rgba(232,184,75,0.07)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 26,
                  letterSpacing: 1,
                  marginBottom: 12,
                  color: "var(--white)",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.48)",
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section
        id="roadmap"
        style={{
          padding: "100px 48px",
          background: "var(--mid)",
          borderTop: "1px solid var(--border)",
        }}
      >
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
          Build in Public
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 5vw, 68px)",
            letterSpacing: 1,
            lineHeight: 1,
            marginBottom: 48,
          }}
        >
          THE<br />
          <span style={{ color: "var(--gold)" }}>ROADMAP</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          {phases.map((p) => (
            <div
              key={p.num}
              style={{
                background: "var(--mid)",
                padding: "36px 28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: 2,
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Phase {p.num}
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 26,
                  letterSpacing: 1,
                  marginBottom: 20,
                  color: "var(--white)",
                }}
              >
                {p.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
                {p.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: "rgba(245,240,232,0.45)",
                      padding: "7px 0",
                      borderBottom: "1px solid rgba(245,240,232,0.04)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 2,
                  background: `${p.statusColor}18`,
                  color: p.statusColor,
                  border: `1px solid ${p.statusColor}40`,
                }}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
