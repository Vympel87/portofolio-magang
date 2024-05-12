"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About", 0.75)
  
  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello there! i'm Rafa, a{" "}
        <span className="font-medium">college student of software engineering technology</span>, in University of Gadjah Madha.{" "}
        Actually my role in a project with my team from colleague is{" "}
        <span className="font-medium">backend</span>.{" "} but sometimes if I take on my own project I become a{" "}
        <span className="font-medium">fullstack developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        developing aspect. I <span className="underline">love</span> the
        feeling of enjoy developing applications that will later be useful to others. My core stack
        is beetwen{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreeSQL / MongoDB{" "}
        </span>
        or{" "}
        <span className="font-medium">
          Laravel and MySQL
        </span>
        . I am also familiar with TypeScript, Bun, and Prisma. I am always looking to
        learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">internship position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">I wake up in the morning</span>, pray and prepare for a class. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and military strategems</span>. I'm also
        developing a 2D pixel game for Komatik League.
      </p>
    </motion.section>
  )
}
