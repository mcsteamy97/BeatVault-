"use client";

import { useState } from "react";
import { Play, Pause, ShoppingCart } from "lucide-react";
import type { Beat } from "@/data/beats";
import { TIER_LABELS, TIER_COLORS } from "@/data/beats";
import Waveform from "@/components/Waveform";

interface BeatCardProps {
  beat: Beat;
  index?: number;
}

export default function BeatCard({ beat, index = 0 }: BeatCardProps) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [licensed, setLicensed] = useState(false);

  const primaryTier = beat.tags[0];
  const price = beat.price === 0 ? "FREE" : `$${beat.price}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1a1a1a" : "var(--mid)",
        border: `1px solid ${hovered ? "rgba(232,184,75,0.25)" : "var(--border)"}`,
        borderRadius: 6,
        padding: "22px 24px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        animation: `fadeUp 0.6s ease ${index * 0.08}s both`,
        cursor: "pointer",
      }}
    >
      {/* Gold left accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: "var(--gold)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s",
          borderRadius: "6px 0 0 6px",
        }}
      />

      {/* Featured badge */}
      {beat.featured && (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontFamily: "'DM Mono', monospace",
            fontSize: 9,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            background: "rgba(232,184,75,0.12)",
            color: "var(--gold)",
            border: "1px solid rgba(232,184,75,0.25)",
            padding: "3px 8px",
            borderRadius: 2,
          }}
        >
          Featured
        </div>
      )}

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 22,
              letterSpacing: 1,
              marginBottom: 4,
              color: "var(--white)",
            }}
          >
            {beat.title}
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "rgba(245,240,232,0.38)",
              letterSpacing: 0.5,
            }}
          >
            {beat.bpm} BPM · {beat.genre} · {beat.producerHandle}
          </div>
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: beat.price === 0 ? 18 : 24,
            color: "var(--gold)",
            flexShrink: 0,
            marginLeft: 12,
            marginTop: beat.featured ? 20 : 0,
          }}
        >
          {price}
        </div>
      </div>

      {/* Waveform */}
      <Waveform
        heights={beat.waveHeights}
        playedFraction={playing ? 0.35 : 0}
      />

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 14,
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Play button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPlaying(!playing);
            }}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: playing ? "var(--white)" : "var(--gold)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "transform 0.15s, background 0.2s",
              color: "var(--black)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")
            }
          >
            {playing ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
          </button>

          {/* License tags */}
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {beat.tags.map((tier) => (
              <span
                key={tier}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 2,
                  border: `1px solid ${TIER_COLORS[tier]}44`,
                  background: `${TIER_COLORS[tier]}12`,
                  color: TIER_COLORS[tier],
                }}
              >
                {TIER_LABELS[tier]}
              </span>
            ))}
          </div>
        </div>

        {/* License button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLicensed(true);
            setTimeout(() => setLicensed(false), 2000);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: licensed ? "var(--green, #2ec27e)" : "transparent",
            border: `1px solid ${licensed ? "var(--green, #2ec27e)" : "rgba(245,240,232,0.15)"}`,
            color: licensed ? "var(--black)" : "rgba(245,240,232,0.6)",
            padding: "6px 14px",
            borderRadius: 2,
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            if (!licensed) {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
            }
          }}
          onMouseLeave={(e) => {
            if (!licensed) {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,240,232,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,240,232,0.6)";
            }
          }}
        >
          <ShoppingCart size={11} />
          {licensed ? "Licensed ✓" : "License"}
        </button>
      </div>

      {/* Plays count */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          color: "rgba(245,240,232,0.2)",
          marginTop: 12,
          letterSpacing: 0.5,
        }}
      >
        {beat.plays.toLocaleString()} plays
      </div>
    </div>
  );
}
