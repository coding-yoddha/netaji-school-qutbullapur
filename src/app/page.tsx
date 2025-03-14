"use client"
import { MainPageDetails } from "@/containers/MainPageDetails";
import { useEffect, useState } from "react";
import { fetchMainPageData } from "./utils/apiHelpers";
import LoadingScreen from "@/components/ui/loader";

interface MainPageDataType {
  eventImages: unknown;
  schoolData: {
    name: string;
  };
  description: string;
  achievement: unknown;
  hightlights: unknown;
}

export default function Home() {
  const [mainPageData, setMainPageData] = useState<MainPageDataType | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMainPageData().then((res) => {
      const data = res?.response;
      setIsLoading(false);
      setMainPageData(data as MainPageDataType); // Type assertion here
    });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        mainPageData && (
          <MainPageDetails
            images={mainPageData.eventImages}
            schoolName={mainPageData.schoolData?.name}
            welcomeMessage={mainPageData.description}
            achievements={mainPageData.achievement}
            features={mainPageData.hightlights}
          />
        )
      )}
    </>
  );
}
