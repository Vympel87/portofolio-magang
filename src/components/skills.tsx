"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  return (
    <section
      ref={ref}
      id="skills"
      className="relative mb-28 scroll-mt-28 sm:mb-20 text-center w-full max-w-7xl px-4 mx-auto"
    >
      {/* Marquee container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 0.7 }}
        className="relative h-[100px] mt-10 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        }}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {[...skillsData, ...skillsData].map((skill, index) => (
            <div
              key={index}
              className="w-[70px] h-[100px] flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={skill.imageUrl}
                alt={`skill-${index}`}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
