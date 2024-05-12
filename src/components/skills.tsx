"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { delay, motion } from "framer-motion";
import Image from 'next/image'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ( {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75)

  return (
      <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
          <SectionHeading>My Skills</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
               {
                  skillsData.map((skill, index) => (
                    <motion.li
                          key={index}
                          variants={fadeInAnimationVariants}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ 
                            once: true
                          }}
                          custom={index}
                          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/40 dark:text-white/80 flex items-center justify-center">
                          <Image src={skill.imageUrl} alt="" width={40} height={40} />
                    </motion.li>  
                  ))
              }
          </ul>
    </section>
  )
}
