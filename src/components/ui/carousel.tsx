import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: Image[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayRef.current]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
