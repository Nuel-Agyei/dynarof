import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";

const projects = [
  { src: project1, alt: "Residential roofing project — architectural shingle installation" },
  { src: project2, alt: "Commercial TPO membrane roofing project" },
  { src: project3, alt: "Historic church slate roof restoration" },
  { src: project4, alt: "Industrial standing seam metal roof installation" },
];

const ProjectGallery = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + projects.length) % projects.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative">
      <div className="relative aspect-[16/7] md:aspect-[16/6] overflow-hidden bg-navy">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={projects[current].src}
            alt={projects[current].alt}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-gold w-6" : "bg-foreground/20"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
