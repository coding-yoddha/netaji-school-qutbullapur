"use client";

import { MainPageDetails } from "@/containers/MainPageDetails";
import { useEffect, useState } from "react";
import { fetchMainPageData } from "./utils/apiHelpers";
import LoadingScreen from "@/components/ui/loader";

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
  const [mainPageData, setMainPageData] = useState<any>(null);
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMainPageData().then((res) => {
      const data = res?.response;
      setIsLoading(false);
      //console.log("data", data);
      setMainPageData(data);
    });
  }, []);
  console.log("mainPageData", mainPageData);
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <MainPageDetails
          images={mainPageData?.eventImages}
          schoolName={mainPageData?.about?.name}
          welcomeMessage={mainPageData?.description}
          achievements={mainPageData?.achievement}
          features={features}
        />
      )}
    </>
  );
}
