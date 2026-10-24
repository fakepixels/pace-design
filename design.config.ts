import type { DesignConfig } from "auto-design";

/**
 * The source of truth for this design system. Change a value here, run
 * `npx auto-design build`, and every token, component and agent file updates.
 * Every field is checked: values outside the system's options fail the build.
 */
export default {
  name: "pace",
  displayName: "Pace",
  description: "Pace Capital Design System",
  personality: {
    energy: 0.6799999999999999,
    warmth: 0.98,
    novelty: 1
  },
  texture: "technical",
  color: {
    brand: "oklch(0.778 0.069 205.0)",
    neutral: "cool",
    modes: "both",
    defaultMode: "dark"
  },
  type: {
    sans: {
      family: "Figtree Variable",
      fallback: [
        "Figtree",
        "ui-sans-serif",
        "system-ui",
        "sans-serif"
      ],
      weights: [
        400,
        500,
        600
      ],
      package: "@fontsource-variable/figtree",
      license: "OFL-1.1"
    },
    mono: {
      family: "Geist Mono Variable",
      fallback: [
        "Geist Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "monospace"
      ],
      weights: [
        400,
        500
      ],
      package: "@fontsource-variable/geist-mono",
      license: "OFL-1.1"
    },
    baseSize: 14,
    ratio: 1.2
  },
  shape: {
    radius: 16
  },
  density: "comfortable",
  motion: "still",
  surfaces: [
    "web-app",
    "marketing",
    "code",
    "messaging",
    "mcp-apps",
    "chat"
  ],
  voice: {
    uiCase: "sentence",
    emoji: "never",
    tone: "Terse and technical. Name the command, the flag or the error. No filler."
  },
  private: false
} satisfies DesignConfig;
