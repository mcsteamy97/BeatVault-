export type LicenseTier = "free" | "creator" | "commercial"

export interface Beat {
  id: string
  title: string
  bpm: number
  genre: string
  mood: string
  producerHandle: string
  price: number
  plays: number
  featured: boolean
  tags: LicenseTier[]
  waveHeights: number[]
}

export const TIER_LABELS: Record<LicenseTier, string> = {
  free: "Free Use",
  creator: "Creator",
  commercial: "Commercial",
}

export const TIER_COLORS: Record<LicenseTier, string> = {
  free: "#2ec27e",
  creator: "#e8b84b",
  commercial: "#d94f3a",
}

export const GENRES = ["All", "Lo-Fi", "Trap", "R&B", "Drill", "Afrobeats", "Boom Bap", "House"]
export const MOODS = ["All", "Chill", "Hype", "Dark", "Melodic", "Uplifting", "Aggressive"]
export const TIERS: LicenseTier[] = ["free", "creator", "commercial"]

function generateWaveHeights(): number[] {
  return Array.from({ length: 48 }, () => Math.floor(Math.random() * 70) + 30)
}

export const BEATS: Beat[] = [
  {
    id: "1",
    title: "MIDNIGHT DRIVE",
    bpm: 85,
    genre: "Lo-Fi",
    mood: "Chill",
    producerHandle: "@lofiking",
    price: 0,
    plays: 24500,
    featured: true,
    tags: ["free"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "2",
    title: "NEON STREETS",
    bpm: 140,
    genre: "Trap",
    mood: "Hype",
    producerHandle: "@808maestro",
    price: 29,
    plays: 18200,
    featured: true,
    tags: ["creator"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "3",
    title: "VELVET SOUL",
    bpm: 92,
    genre: "R&B",
    mood: "Melodic",
    producerHandle: "@smoothgroove",
    price: 99,
    plays: 12800,
    featured: true,
    tags: ["commercial"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "4",
    title: "BROOKLYN GRIT",
    bpm: 145,
    genre: "Drill",
    mood: "Dark",
    producerHandle: "@drillmaster",
    price: 29,
    plays: 31400,
    featured: false,
    tags: ["creator", "commercial"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "5",
    title: "GOLDEN HOUR",
    bpm: 110,
    genre: "Afrobeats",
    mood: "Uplifting",
    producerHandle: "@afrovibes",
    price: 0,
    plays: 9500,
    featured: false,
    tags: ["free"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "6",
    title: "OLD SCHOOL FLOW",
    bpm: 95,
    genre: "Boom Bap",
    mood: "Chill",
    producerHandle: "@hiphophead",
    price: 29,
    plays: 15600,
    featured: false,
    tags: ["creator"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "7",
    title: "CLUB ANTHEM",
    bpm: 128,
    genre: "House",
    mood: "Hype",
    producerHandle: "@housebeats",
    price: 99,
    plays: 28900,
    featured: false,
    tags: ["commercial"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "8",
    title: "RAINY NIGHTS",
    bpm: 78,
    genre: "Lo-Fi",
    mood: "Melodic",
    producerHandle: "@lofiking",
    price: 0,
    plays: 41200,
    featured: false,
    tags: ["free", "creator"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "9",
    title: "SAVAGE MODE",
    bpm: 152,
    genre: "Trap",
    mood: "Aggressive",
    producerHandle: "@808maestro",
    price: 29,
    plays: 22300,
    featured: false,
    tags: ["creator"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "10",
    title: "SUMMER NIGHTS",
    bpm: 105,
    genre: "R&B",
    mood: "Uplifting",
    producerHandle: "@smoothgroove",
    price: 29,
    plays: 8700,
    featured: false,
    tags: ["creator", "commercial"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "11",
    title: "SHADOW REALM",
    bpm: 138,
    genre: "Drill",
    mood: "Dark",
    producerHandle: "@drillmaster",
    price: 99,
    plays: 19800,
    featured: false,
    tags: ["commercial"],
    waveHeights: generateWaveHeights(),
  },
  {
    id: "12",
    title: "LAGOS VIBES",
    bpm: 115,
    genre: "Afrobeats",
    mood: "Hype",
    producerHandle: "@afrovibes",
    price: 29,
    plays: 14200,
    featured: false,
    tags: ["creator"],
    waveHeights: generateWaveHeights(),
  },
]
