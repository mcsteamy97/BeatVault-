"use client";

interface WaveformProps {
  heights: number[];
  playedFraction?: number; // 0-1
  color?: string;
  playedColor?: string;
}

export default function Waveform({
  heights,
  playedFraction = 0,
  color = "rgba(232,184,75,0.22)",
  playedColor = "var(--gold)",
}: WaveformProps) {
  const playedCount = Math.floor(heights.length * playedFraction);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        height: 36,
        width: "100%",
      }}
    >
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h}%`,
            background: i < playedCount ? playedColor : color,
            borderRadius: 1,
            animation: `wave ${1.2 + (i % 5) * 0.15}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.05}s`,
            transition: "background 0.3s",
          }}
        />
      ))}
    </div>
  );
}
