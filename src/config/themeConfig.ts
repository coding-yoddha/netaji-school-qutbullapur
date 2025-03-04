// config/colors.ts

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  cardBackground: string;
  highlight: string;
  border: string;
  shadow: string;
  text: {
    main: string;
    secondary: string;
    white: string;
  };
}

export const themeConfig: Record<string, ThemeColors> = {
  premiumBlueGold: {
    primary: "#0047AB", // Rich Royal Blue
    secondary: "#FFD700", // Gold
    accent: "#FF6F00", // Warm Orange for highlights
    background: "#F9FAFB", // Soft White for a clean look
    cardBackground: "#FFFFFF", // Pure white for modern card design
    highlight: "#FACC15", // Golden yellow for emphasis
    border: "#FFD700", // Gold for elegant highlights
    shadow: "rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    text: {
      main: "#1E293B", // Dark navy for readability
      secondary: "#475569", // Softer gray-blue
      white: "#FFFFFF", // Pure white
    },
  },
  premiumBlueGold1: {
    primary: "#002147", // Deep Royal Blue
    secondary: "#FFD700", // Elegant Gold
    accent: "#1E90FF", // Soft Neon Blue for highlights
    background: "#F8FAFC", // Light Gray-White for premium look
    cardBackground: "#FFFFFF", // Clean white for content areas
    highlight: "#FACC15", // Golden yellow for emphasis
    border: "#E5E7EB", // Soft gray for subtle dividers
    shadow: "rgba(0, 0, 0, 0.1)", // Light depth effect
    text: {
      main: "#1E293B", // Dark navy for readability
      secondary: "#475569", // Softer gray-blue
      white: "#FFFFFF",
    },
  },
};
