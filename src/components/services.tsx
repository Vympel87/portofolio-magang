"use client";

import { FaCode, FaLaptopCode, FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import SectionHeading from "./section-heading";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Software Engineer",
    description:
      "Designs and builds efficient, scalable software systems. Skilled in problem-solving, data structures, and system architecture for reliable application development.",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Web Developer",
    description:
      "Develops responsive and dynamic websites using modern frameworks. Focused on clean UI, UX principles, and seamless backend integration.",
  },
  {
    icon: <FaTasks size={28} />,
    title: "Project Management",
    description:
      "Coordinates teams and resources to deliver projects on time. Experienced in Agile methodologies, planning, and risk mitigation.",
  },
];

export default function Services() {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className="scroll-mt-28 mb-28 sm:mb-30 w-full max-w-5xl px-4 mx-auto"
    >
      <SectionHeading>Services That I Can Offer</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`
              rounded-2xl p-6 shadow-md border transition-transform hover:scale-[1.02]
              ${theme === "light" ? "bg-gray-100 border-gray-200" : "bg-white/5 border-white/10"}
            `}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-white mb-4
                ${theme === "light" ? "bg-white text-black" : "bg-[#333] text-white"}
              `}
            >
              {service.icon}
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
