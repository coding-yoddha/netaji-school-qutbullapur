"use client";

import { MainPageDetails } from "@/containers/MainPageDetails";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "@/components/ui/loader";
import { fetchMainPageDetails } from "@/store/slices/dataSlice";
import { useAppDispatch } from "@/hooks/dispatch";
import type { RootState } from "@/store/store";

export default function Home() {
  const dispatch = useAppDispatch();

  const { mainPageDetails, loading } = useSelector(
    (state: RootState) => state.schoolDetails
  );

  useEffect(() => {
    if (!mainPageDetails) {
      dispatch(fetchMainPageDetails());
    }
  }, [dispatch, mainPageDetails]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        mainPageDetails && (
          <MainPageDetails
            images={mainPageDetails.response.eventImages}
            schoolName={mainPageDetails.response.schoolData?.name}
            welcomeMessage={mainPageDetails.response.description}
            achievements={mainPageDetails.response.achievement}
            features={mainPageDetails.response.hightlights}
            events={mainPageDetails.response.events}
          />
        )
      )}
    </>
  );
}
