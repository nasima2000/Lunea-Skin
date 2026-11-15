
import { useEffect, useState } from "react";

const images = [
  "/Images/SliderNavbar1.png",
  "/Images/SliderNavbar2.png",
  "/Images/SliderNavbar3.png",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
<section className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[480px] xl:h-[650px] overflow-hidden  object-cover">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full"
          >
            <img
              src={image}
              alt={`Lunéa Skin slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
