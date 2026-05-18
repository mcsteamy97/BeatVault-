export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        background: "var(--black)",
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 22,
          letterSpacing: 3,
          color: "var(--gold)",
        }}
      >
        BEAT<span style={{ color: "var(--white)" }}>VAULT</span>
      </div>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "rgba(245,240,232,0.22)",
          letterSpacing: 0.5,
        }}
      >
        © 2026 BeatVault — The Beat Licensing Marketplace
      </p>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "rgba(245,240,232,0.12)",
          letterSpacing: 0.5,
        }}
      >
        Built for creators. Powered by producers.
      </p>
    </footer>
  );
}
