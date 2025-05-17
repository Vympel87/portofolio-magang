"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experiences() {
  const { theme } = useTheme();

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const pairs = chunkArray([...experiencesData], 2);

  return (
    <section
      id="experiences"
      className="scroll-mt-28 mb-28 sm:mb-3 w-full max-w-7xl px-4 mx-auto"
    >
      <SectionHeading>Experience</SectionHeading>

      <div className="space-y-6 mt-10">
        {pairs.map((pair, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {pair.map((item, i) => {
              const span = pair.length === 1
                ? 12
                : rowIndex % 2 === 0
                ? i === 0 ? 7 : 5
                : i === 0 ? 5 : 7;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className={`
                    rounded-2xl p-6 shadow-md border transition-transform hover:scale-[1.02]
                    ${theme === "light" ? "bg-gray-100 border-gray-200" : "bg-white/5 border-white/10"}
                    ${span === 12 ? "md:col-span-12" : span === 7 ? "md:col-span-7" : "md:col-span-5"}
                  `}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-xl
                        ${theme === "light" ? "bg-white" : "bg-white/15"}
                      `}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-white/75 font-medium">{item.role}</p>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
