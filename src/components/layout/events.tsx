"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ACCENT_COLORS = [
  { bar: "#6366f1", text: "#6366f1" },
  { bar: "#ec4899", text: "#ec4899" },
  { bar: "#f59e0b", text: "#d97706" },
  { bar: "#10b981", text: "#059669" },
  { bar: "#3b82f6", text: "#2563eb" },
  { bar: "#14b8a6", text: "#0d9488" },
];

export default function EventsSection({ events }) {
  const router = useRouter();

  useEffect(() => {
    events?.forEach((event) => {
      router.prefetch(`/events?eventId=${encodeURIComponent(event.eventId)}`);
    });
  }, [events, router]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-blue-50">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 relative inline-block">
          Achievements &amp; Milestones
          <span className="block w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
        </h2>
        <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Celebrating moments of excellence, passion, and hard work.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map((event, index) => {
          const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
          const num = String(index + 1).padStart(2, "0");
          const imgSrc = event.image?.data && event.image?.contentType
            ? `data:${event.image.contentType};base64,${event.image.data}`
            : null;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() =>
                router.push(`/events?eventId=${encodeURIComponent(event.eventId)}`)
              }
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg active:scale-[0.98]"
            >
              {/* Top image strip */}
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={event.title}
                  className="w-full h-[160px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="relative w-full h-[160px] flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${accent.bar}, ${accent.bar}aa)` }}
                >
                  <span
                    className="absolute text-[120px] font-black leading-none text-white opacity-20 select-none pointer-events-none"
                  >
                    {event.title?.charAt(0)}
                  </span>
                  <span className="relative z-10 text-white text-base font-bold text-center px-6 drop-shadow-md">
                    {event.title}
                  </span>
                </div>
              )}

              {/* Card body */}
              <div className="relative p-5">
                {/* Accent bar at top of content area */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: accent.bar }}
                />

                {/* Faded number */}
                <span
                  className="absolute bottom-3 right-4 text-6xl font-black leading-none select-none pointer-events-none"
                  style={{ color: accent.bar, opacity: 0.08 }}
                >
                  {num}
                </span>

                {/* Category + date */}
                <div className="flex items-center justify-between gap-2 mb-3 mt-1">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: accent.text }}
                  >
                    Achievement
                  </span>
                  <span className="text-[11px] text-gray-400 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {event.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                <div
                  className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wide"
                  style={{ color: accent.text }}
                >
                  Read more
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
