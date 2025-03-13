import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

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
  const getUrl = (blob) => {
    return URL.createObjectURL(blob);
  };

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center"
          >
            <Image
              src={`data:${img?.image.contentType};base64,${img.image.data}`}
              alt={img.description}
              priority={true}
              height={100}
              width={100}
              className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
