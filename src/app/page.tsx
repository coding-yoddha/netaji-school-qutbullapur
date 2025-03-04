"use client";

import { themeConfig } from "@/config/themeConfig";
import { MainPageDetails } from "@/containers/MainPageDetails";
import { useEffect, useState } from "react";

const images = [
  { src: "/school1.png", alt: "Award Ceremony" },
  { src: "/school2.png", alt: "Sports Day" },
  { src: "/school3.png", alt: "Cultural Event" },
];

const enrollmentStats = [
  {
    end: 1500,
    duration: 3000,
    title: "Students Enrolled This Year",
    icon: "📚",
  },
  { end: 5000, duration: 3000, title: "Students Graduated", icon: "🎓" },
  { end: 50, duration: 3000, title: "Awards Won", icon: "🏆" },
];

const achievements = [
  {
    title: "100% Results",
    description: "Consistent academic excellence in board exams.",
  },
  {
    title: "Award-Winning Programs",
    description: "Recognized for innovative teaching methods.",
  },
  {
    title: "Top Sports Team",
    description: "Winners of inter-school championships.",
  },
];

const features = [
  {
    title: "Experienced Teachers",
    description: "Highly qualified staff committed to nurturing students.",
    icon: "🎓",
  },
  {
    title: "Holistic Development",
    description: "Focus on academics, sports, and extracurricular activities.",
    icon: "⚽",
  },
  {
    title: "Modern Facilities",
    description: "Smart classrooms, laboratories, and a library.",
    icon: "🏫",
  },
];

export default function Home() {
  const selectedTheme = themeConfig["premiumBlueGold1"];

  return (
    <>
      <MainPageDetails
        images={images}
        schoolName="Bright Future School"
        welcomeMessage="Nurturing future leaders with quality education and holistic development."
        aboutText="At Bright Future School, we believe in empowering students with a strong academic foundation, life skills, and values that prepare them for a successful future. With a commitment to excellence, we provide a safe and nurturing environment where every student can thrive."
        enrollmentStats={enrollmentStats}
        achievements={achievements}
        features={features}
        theme={selectedTheme}
      />
    </>
  );
}
