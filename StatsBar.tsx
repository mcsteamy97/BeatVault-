"use client";

const STATS = [
  { num: "12K+", label: "Licensed Beats" },
  { num: "3.4K", label: "Active Producers" },
  { num: "98%", label: "DMCA-Safe Rate" },
  { num: "$0", label: "Signup Cost" },
];

export default function StatsBar() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--mid)",
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={s.label}
          style={{
            padding: "40px 48px",
            borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
            animation: `fadeUp 0.6s ease ${0.5 + i * 0.1}s both`,
          }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 52,
              color: "var(--gold)",
              lineHeight: 1,
              marginBottom: 6,
            }}
          >
            {s.num}
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "rgba(245,240,232,0.35)",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
      <style>{`
        @media (max-width: 640px) {
          div { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
