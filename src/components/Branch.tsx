import { useRef, useEffect } from "react";

const brands = [
  {
    name: "Clorox",
    logo: "public/clorox.png",
  },
  {
    name: "easy-off",
    logo: "public/easy-off.png",
  },
  {
    name: "Sprayway",
    logo: "public/Sprayway.png",
  },
  {
    name: "Mrs. Meyer's Clean Day",
    logo: "public/mrs-meyers.png",
  },
  {
    name: "Ecover",
    logo: "public/ecover.png",
  },
  {
    name: "Simple Green",
    logo: "public/simple-green.png",
  },
  {
    name: "Fabuloso",
    logo: "public/fabuloso.png",
  },
];

export default function Branch() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationFrame: number;
    let start: number | null = null;
    let x = 0;
    const speed = 0.5; // quanto maior, mais rápido
    const totalWidth = track.scrollWidth / 2;

    function animateScroll(timestamp: number) {
      if (!track) return;
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      x = (elapsed * speed) / 10;
      if (x >= totalWidth) {
        start = timestamp;
        x = 0;
      }
      track.style.transform = `translateX(-${x}px)`;
      animationFrame = requestAnimationFrame(animateScroll);
    }
    animationFrame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-primary text-center mb-12">
          Trusted Brands
        </h2>
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex gap-8"
            style={{ width: "max-content" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className=" rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 min-w-[180px]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
