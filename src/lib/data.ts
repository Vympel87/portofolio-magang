import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";

import bpjkImg from "../../public/Bpjk.png"
import athamabelkahasolusiImg from "../../public/athamabelkahasolusi.jpg";
import fooseImg from "../../public/FOOSE.png";

import htmlImg from "../../public/language/HTML.png";
import cssImg from "../../public/language/CSS.png";
import javascriptImg from "../../public/language/JavaScript.png";
import typescriptImg from "../../public/language/Typescript.png";
import phpImg from "../../public/language/PHP.png";
import pythonImg from "../../public/language/Python.png";
import javaImg from "../../public/language/Java.png";
import kotlinImg from "../../public/language/Kotlin.png";
import c_sharpImg from "../../public/language/C-Sharp.png";
import golangImg from "../../public/language/Golang.png";

import bootstrapImg from "../../public/framework/Bootstrap.png"
import expressImg from "../../public/framework/Express.png"
import fastapiImg from "../../public/framework/Fastapi.png"
import flaskImg from "../../public/framework/flask.png"
import laravelImg from "../../public/framework/laravel.png"
import nextjsImg from "../../public/framework/Next-Js.png"
import svelteImg from "../../public/framework/Svelte.png"
import tailwindImg from "../../public/framework/Tailwind.png"
import tensorflowImg from "../../public/framework/Tensorflow.png"

import matplotlibImg from "../../public/library/Matplotlib.png"
import numpyImg from "../../public/library/numpy.png"
import openCVImg from "../../public/library/OpenCV.png"
import pandasImg from "../../public/library/Pandas.png"
import reactImg from "../../public/library/React.png"
import reduxImg from "../../public/library/Redux.png"
import zodImg from "../../public/library/Zod.png"

import firebaseImg from "../../public/database/firebase.png"
import mysqlImg from "../../public/database/mysql.png"
import postgreesqlImg from "../../public/database/postgresql.png"
import mongodbImg from "../../public/database/mongodb.png"
import awsS3Img from "../../public/database/awsS3.png"
import redisImg from "../../public/database/redis.png"
import timescaleDBImg from "../../public/database/TimeScaleDB.png"

import prismaImg from "../../public/ORM/prisma.png"

import nodeJsImg from "../../public/runtime/Node-Js.png"

import gitImg from "../../public/tools/Git.png"
import postmanImg from "../../public/tools/Postman.png"

import unityImg from "../../public/gameEngine/Unity.png"
import unrealImg from "../../public/gameEngine/Unreal.png"

import graphQLImg from "../../public/api/GraphQL.png"
import websocketImg from "../../public/api/websocket.png"

import figmaImg from "../../public/design/Figma.png"
import blenderImg from "../../public/design/Blender.png"

import dockerImg from "../../public/devops/Docker.png"
import gcpImg from "../../public/devops/GCP.png"
import linuxImg from "../../public/devops/linux.png"

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
    title: "Literasi Digital ADITIF",
    role: "Backend Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "February 2025 - June 2025",
  },
  {
    title: "Widya Matador",
    role: "Backend Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "September 2024 - December 2024",
  },
  {
    title: "Komatik UGM",
    role: "3D Modeller",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - December 2024",
  },
  {
    title: "Google Solution Challange",
    role: "Backend Engineer",
    icon: React.createElement(FaGoogle),
    date: "October 2023 - May 2024",
  },
  {
    title: "Kahasolusi",
    role: "Backend Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023 - June 2024",
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
    title: "GraphQL",
    imageUrl: graphQLImg
  },
  {
    title: "Websocket",
    imageUrl: websocketImg
  },
  {
    title: "Node.js",
    imageUrl: nodeJsImg
  },
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
    title: "Golang",
    imageUrl: golangImg
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
    title: "Svelte.js",
    imageUrl: svelteImg
  },
  {
    title: "Express",
    imageUrl: expressImg
  },
  {
    title: "Tensorflow",
    imageUrl: tensorflowImg
  },
  {
    title: "React",
    imageUrl: reactImg
  },
  {
    title: "OpenCV",
    imageUrl: openCVImg
  },
  {
    title: "Zod",
    imageUrl: zodImg
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
    title: "Redux",
    imageUrl: reduxImg
  },
  {
    title: "Firebase",
    imageUrl: firebaseImg
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
    title: "AWSS3",
    imageUrl: awsS3Img
  },
  {
    title: "Redis",
    imageUrl: redisImg
  },
  {
    title: "TimescalDB",
    imageUrl: timescaleDBImg
  },
  {
    title: "Prisma",
    imageUrl: prismaImg
  },
  {
    title: "Unity",
    imageUrl: unityImg
  },
  {
    title: "Unreal",
    imageUrl: unrealImg
  },
  {
    title: "Git",
    imageUrl: gitImg
  },
  {
    title: "Postman",
    imageUrl: postmanImg
  },
  {
    title: "Docker",
    imageUrl: dockerImg
  },
  {
    title: "GCP",
    imageUrl: gcpImg
  },
  {
    title: "Linux",
    imageUrl: linuxImg
  },
  {
    title: "Figma",
    imageUrl: figmaImg
  },
  {
    title: "Blender",
    imageUrl: blenderImg
  },
] as const;