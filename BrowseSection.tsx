"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { BEATS, GENRES, MOODS, TIERS, TIER_LABELS, TIER_COLORS } from "../data/beats";
import type { LicenseTier } from "../data/beats";
import BeatCard from "./BeatCard";

export default function BrowseSection() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [mood, setMood] = useState("All");
  const [tierFilter, setTierFilter] = useState<LicenseTier | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = BEATS.filter((b) => {
    const matchQuery =
      query === "" ||
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.genre.toLowerCase().includes(query.toLowerCase()) ||
      b.producerHandle.toLowerCase().includes(query.toLowerCase());
    const matchGenre = genre === "All" || b.genre === genre;
    const matchMood = mood === "All" || b.mood === mood;
    const matchTier = tierFilter === "all" || b.tags.includes(tierFilter);
    return matchQuery && matchGenre && matchMood && matchTier;
  });

  const pillStyle = (active: boolean, activeColor = "var(--gold)") => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: 11,
    letterSpacing: 1,
    textTransform: "uppercase" as const,
    padding: "7px 16px",
    borderRadius: 2,
    border: `1px solid ${active ? activeColor : "var(--border)"}`,
    background: active ? `${activeColor}18` : "transparent",
    color: active ? activeColor : "rgba(245,240,232,0.4)",
    cursor: "pointer",
    transition: "all 0.2s",
    whiteSpace: "nowrap" as const,
  });

  return (
    <section
      id="browse"
      style={{ padding: "80px 48px", background: "var(--mid)" }}
    >
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
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
          The Catalog
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 5vw, 68px)",
            letterSpacing: 1,
            lineHeight: 1,
            marginBottom: 0,
          }}
        >
          BROWSE<br />
          <span style={{ color: "var(--gold)" }}>BEATS</span>
        </h2>
      </div>

      {/* Search + filter toggle */}
      <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1 }}>
          <Search
            size={14}
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgba(245,240,232,0.3)",
            }}
          />
          <input
            type="text"
            placeholder="Search beats, genres, producers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              background: "var(--black)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "12px 14px 12px 40px",
              color: "var(--white)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "rgba(232,184,75,0.4)")
            }
            onBlur={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "var(--border)")
            }
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: showFilters ? "rgba(232,184,75,0.1)" : "transparent",
            border: `1px solid ${showFilters ? "rgba(232,184,75,0.4)" : "var(--border)"}`,
            color: showFilters ? "var(--gold)" : "rgba(245,240,232,0.5)",
            padding: "12px 18px",
            borderRadius: 4,
            cursor: "pointer",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: 1,
            textTransform: "uppercase",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          <SlidersHorizontal size={13} />
          Filters
        </button>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div
          style={{
            background: "var(--black)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: 24,
            marginBottom: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            animation: "fadeUp 0.3s ease both",
          }}
        >
          {/* Genre */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 2, color: "rgba(245,240,232,0.3)", textTransform: "uppercase", marginBottom: 10 }}>
              Genre
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {GENRES.map((g) => (
                <button key={g} onClick={() => setGenre(g)} style={pillStyle(genre === g)}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Mood */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 2, color: "rgba(245,240,232,0.3)", textTransform: "uppercase", marginBottom: 10 }}>
              Mood
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {MOODS.map((m) => (
                <button key={m} onClick={() => setMood(m)} style={pillStyle(mood === m)}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* License Tier */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 2, color: "rgba(245,240,232,0.3)", textTransform: "uppercase", marginBottom: 10 }}>
              License Tier
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <button onClick={() => setTierFilter("all")} style={pillStyle(tierFilter === "all")}>All</button>
              {TIERS.map((t) => (
                <button key={t} onClick={() => setTierFilter(t)} style={pillStyle(tierFilter === t, TIER_COLORS[t])}>
                  {TIER_LABELS[t]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "rgba(245,240,232,0.28)",
          letterSpacing: 1,
          marginBottom: 20,
          textTransform: "uppercase",
        }}
      >
        {filtered.length} beat{filtered.length !== 1 ? "s" : ""} found
      </div>

      {/* Beat grid */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 0",
            color: "rgba(245,240,232,0.3)",
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
          }}
        >
          No beats match your filters.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((beat, i) => (
            <BeatCard key={beat.id} beat={beat} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
