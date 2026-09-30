export const easings = {
  // Smooth, high-end editorial cubic-bezier curves
  editorial: [0.16, 1, 0.3, 1] as const,
  smooth: [0.22, 1, 0.36, 1] as const,
  gentle: [0.25, 1, 0.5, 1] as const,
  snappy: [0.33, 1, 0.68, 1] as const,
  spring: { type: "spring", stiffness: 420, damping: 32 } as const,
  springGentle: { type: "spring", stiffness: 280, damping: 26 } as const,
};

export const durations = {
  fast: 0.25,
  normal: 0.55,
  medium: 0.75,
  slow: 0.95,
  hero: 1.1,
};

export const staggerDelays = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
};
