import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGoogle, FaUniversity } from "react-icons/fa";

import bpjkImg from "../../public/Bpjk.png"
import athamabelkahasolusiImg from "../../public/athamabelkahasolusi.jpg";
import fooseImg from "../../public/FOOSE.png";

import htmlImg from "../../public/languageImg/HTML.png";
import cssImg from "../../public/languageImg/CSS.png";
import javascriptImg from "../../public/languageImg/JavaScript.png";
import typescriptImg from "../../public/languageImg/TypeScript.png";
import phpImg from "../../public/languageImg/PHP.png";
import pythonImg from "../../public/languageImg/Python.png";
import javaImg from "../../public/languageImg/Java.png";
import kotlinImg from "../../public/languageImg/Kotlin.png";
import c_sharpImg from "../../public/languageImg/C-Sharp.png";
import rustImg from "../../public/languageImg/Rust.png";

import bootstrapImg from "../../public/framework/Bootstrap.png"
import expressImg from "../../public/framework/Express.png"
import fastapiImg from "../../public/framework/Fastapi.png"
import flaskImg from "../../public/framework/flask.png"
import laravelImg from "../../public/framework/laravel.png"
import nextjsImg from "../../public/framework/Next-Js.png"
import nodejsImg from "../../public/framework/Node-Js.png"
import reactImg from "../../public/framework/React.png"
import tailwindImg from "../../public/framework/Tailwind.png"
import unityImg from "../../public/framework/Unity.png"

import firebaseImg from "../../public/Database/firebase.png"
import prismaImg from "../../public/Database/prisma.png"
import mysqlImg from "../../public/Database/mysql.png"
import postgreesqlImg from "../../public/Database/postgresql.png"
import mongodbImg from "../../public/Database/mongodb.png"

import pandasImg from "../../public/AI/Pandas.png"
import matplotlibImg from "../../public/AI/Matplotlib.png"
import numpyImg from "../../public/AI/numpy.png"
import tensorflowImg from "../../public/AI/Tensorflow.png"

import reduxImg from "../../public/Integration/Redux.png"
import gitImg from "../../public/Integration/Git.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Beginning of College",
    role: "Newbie",
    description:
      "I entered college by choosing a software engineering technology study program, then learn algorithms to data structures and early stage application development.",
    icon: React.createElement(FaUniversity),
    date: "2022",
  },
  {
    title: "SIM-LAB BPJK",
    role: "BackEnd Developer",
    description:
      "My campus formed a team, one of which was me with my four college friends to work on a project given by a campus partner to improve existing features and add new features on the admin side",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Google Solution Challange",
    role: "BackEnd Developer",
    description:
      "I Join Google Development Student Club, then formed a team of 4 people to create problem solving projects based on SDGs",
    icon: React.createElement(FaGoogle),
    date: "2023 - 2024",
  },
  {
    title: "Atha Mable Kahasolusi",
    role: "BackEnd Developer",
    description:
      "My team and I received a new project from a wood furniture shop to create a company profile.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "SIM LAB BPJK",
    description:
      "The website application is developed for the Construction Services Development Agency. It is designed to facilitate the BPJK in receiving construction testing orders.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    imageUrl: bpjkImg,
  },
  {
    title: "atha mabel kahasolusi",
    description:
      "A website project from a wood furniture shop for a company profile. A website to introduce company to a customer.",
    tags: ["Laravel", "MySQL", "Tailwind", "flowbite"],
    imageUrl: athamabelkahasolusiImg,
  },
  {
    title: "FOOSE",
    description:
      "A mobile application for food management and reducing food waste. accompanied by a recipe search feature based on the availability of food ingredients",
    tags: ["Flutter", "Firebase", "Tensorflow", "Fast API"],
    imageUrl: fooseImg,
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    imageUrl: htmlImg
  },
  {
    title: "CSS",
    imageUrl: cssImg
  },
  {
    title: "JavaScript",
    imageUrl: javascriptImg
  },
  {
    title: "TypeScript",
    imageUrl: typescriptImg
  },
  {
    title: "PHP",
    imageUrl: phpImg
  },
  {
    title: "Python",
    imageUrl: pythonImg
  },
  {
    title: "Java",
    imageUrl: javaImg
  },
  {
    title: "Kotlin",
    imageUrl: kotlinImg
  },
  {
    title: "C#",
    imageUrl: c_sharpImg
  },
  {
    title: "Rust",
    imageUrl: rustImg
  },
  {
    title: "Bootstrap",
    imageUrl: bootstrapImg
  },
  {
    title: "Tailwind",
    imageUrl: tailwindImg
  },
  {
    title: "FastAPI",
    imageUrl: fastapiImg
  },
  {
    title: "Flask",
    imageUrl: flaskImg
  },
  {
    title: "Laravel",
    imageUrl: laravelImg
  },
  {
    title: "Next.js",
    imageUrl: nextjsImg
  },
  {
    title: "React",
    imageUrl: reactImg
  },
  {
    title: "Node.js",
    imageUrl: nodejsImg
  },
  {
    title: "Express",
    imageUrl: expressImg
  },
  {
    title: "Unity",
    imageUrl: unityImg
  },
  {
    title: "Firebase",
    imageUrl: firebaseImg
  },
  {
    title: "Prisma",
    imageUrl: prismaImg
  },
  {
    title: "MySQL",
    imageUrl: mysqlImg
  },
  {
    title: "PostgreSQL",
    imageUrl: postgreesqlImg
  },
  {
    title: "MongoDB",
    imageUrl: mongodbImg
  },
  {
    title: "Matplotlib",
    imageUrl: matplotlibImg
  },
  {
    title: "Numpy",
    imageUrl: numpyImg
  },
  {
    title: "Pandas",
    imageUrl: pandasImg
  },
  {
    title: "Tensorflow",
    imageUrl: tensorflowImg
  },
  {
    title: "Redux",
    imageUrl: reduxImg
  },
  {
    title: "Git",
    imageUrl: gitImg
  },
] as const;