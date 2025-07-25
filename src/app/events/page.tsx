"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EventDetails from "@/containers/EventDetails";
import LoadingScreen from "@/components/ui/loader";

const EventsPage = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  const [eventItems, setEventItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!eventId) return;
    async function fetchEventItems() {
      const res = await fetch(`/api/getEventItems?eventId=${eventId}`);
      const json = await res.json();
      if (json.success) setEventItems(json.data);
      setLoading(false);
    }
    fetchEventItems();
  }, [eventId]);

  if (loading) return <LoadingScreen />;

  return <EventDetails eventData={eventItems} />;
};

export default EventsPage;
