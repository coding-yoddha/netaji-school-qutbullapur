"use client";

import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import galleryImg1 from "../../../public/gallery1.png";
import galleryImg2 from "../../../public/gallery2.png";
import galleryImg3 from "../../../public/gallery3.png";
import galleryImg4 from "../../../public/gallery4.png";
import galleryImg5 from "../../../public/gallery5.png";

const images = [
  { src: galleryImg1 },
  { src: galleryImg2 },
  { src: galleryImg3 },
  { src: galleryImg4 },
  { src: galleryImg5 },
];

export const Carousel = () => {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Update dots when selected slide changes
  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  // Set up event listeners when embla is ready
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={img.src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-2 mb-2 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-blue-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
