"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";
import Waveform from "@/components/Waveform";
import { BEATS } from "@/data/beats";

export default function Hero() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const featured = BEATS.filter((b) => b.featured).slice(0, 3);

  return (
    <section
      style={{
        minHeight: "88vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "80px 48px",
        gap: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(232,184,75,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Left: Copy */}
      <div style={{ animation: "fadeUp 0.8s ease 0.1s both" }}>
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
            gap: 10,
          }}
        >
          <span
            style={{
              display: "block",
              width: 32,
              height: 1,
              background: "var(--gold)",
            }}
          />
          Beat Licensing Marketplace
        </div>

        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(64px, 8vw, 110px)",
            lineHeight: 0.9,
            letterSpacing: 2,
            marginBottom: 28,
          }}
        >
          LICENSE{" "}
          <span style={{ color: "var(--gold)" }}>MUSIC.</span>
          <br />
          CREATE
          <br />
          FREELY.
        </h1>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "rgba(245,240,232,0.55)",
            maxWidth: 440,
            marginBottom: 40,
          }}
        >
          The marketplace connecting content creators with independent producers.
          Stream-safe beats, instant licensing,{" "}
          <span style={{ color: "var(--white)" }}>zero DMCA takedowns.</span>
        </p>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <a
            href="#browse"
            style={{
              background: "var(--gold)",
              color: "var(--black)",
              padding: "14px 32px",
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 2,
              fontWeight: 500,
              transition: "transform 0.15s, background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.background = "#c49a2a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
            }}
          >
            Browse Beats
          </a>
          <a
            href="#waitlist"
            style={{
              color: "rgba(245,240,232,0.7)",
              background: "transparent",
              border: "1px solid var(--border)",
              padding: "14px 32px",
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 2,
              transition: "border-color 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,240,232,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.7)";
            }}
          >
            Sell Your Beats →
          </a>
        </div>
      </div>

      {/* Right: Beat preview cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
        }}
      >
        {featured.map((beat, i) => (
          <div
            key={beat.id}
            style={{
              background: "#141414",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "18px 22px",
              marginLeft: i * 18,
              transition: "border-color 0.25s, transform 0.2s",
              animation: `slideIn 0.6s ease ${0.3 + i * 0.12}s both`,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,75,0.3)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 19, letterSpacing: 1 }}>
                  {beat.title}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(245,240,232,0.35)", letterSpacing: 0.5 }}>
                  {beat.bpm} BPM · {beat.genre} · {beat.producerHandle}
                </div>
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: "var(--gold)" }}>
                ${beat.price}
              </div>
            </div>
            <Waveform
              heights={beat.waveHeights}
              playedFraction={playingId === beat.id ? 0.38 : 0}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
              <button
                onClick={() => setPlayingId(playingId === beat.id ? null : beat.id)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: playingId === beat.id ? "var(--white)" : "var(--gold)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--black)",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
              >
                {playingId === beat.id ? (
                  <Pause size={11} fill="currentColor" />
                ) : (
                  <Play size={11} fill="currentColor" />
                )}
              </button>
              {beat.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    padding: "2px 7px",
                    borderRadius: 2,
                    background:
                      t === "free"
                        ? "rgba(46,194,126,0.12)"
                        : t === "creator"
                        ? "rgba(232,184,75,0.1)"
                        : "rgba(217,79,58,0.1)",
                    color:
                      t === "free"
                        ? "#2ec27e"
                        : t === "creator"
                        ? "var(--gold)"
                        : "#d94f3a",
                    border: `1px solid ${
                      t === "free"
                        ? "rgba(46,194,126,0.25)"
                        : t === "creator"
                        ? "rgba(232,184,75,0.25)"
                        : "rgba(217,79,58,0.25)"
                    }`,
                  }}
                >
                  {t === "free" ? "Free Use" : t === "creator" ? "Creator" : "Commercial"}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:last-child { display: none; }
          section { grid-template-columns: 1fr !important; padding: 48px 24px !important; }
        }
      `}</style>
    </section>
  );
}
