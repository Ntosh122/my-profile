"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import bookImg from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import JavaIcon from "@/assets/icons/java.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import PythonIcon from "@/assets/icons/python.svg";
import CSharpIcon from "@/assets/icons/csharp.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import MongoDbIcon from "@/assets/icons/mysql.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import VisualIcon from "@/assets/icons/visual-studio.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import memoji from "@/assets/images/me.png";
import React, { useRef } from "react";
import Image from "next/image";
import CardHeader from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "Visual Studio",
    iconType: VisualIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "C-sharp",
    iconType: CSharpIcon,
  },
  {
    title: "MySql",
    iconType: MongoDbIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Fitness",
    emoji: "🤸🏽‍♂️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Graphics",
    emoji: "🎨",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🪘",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🥙",
    left: "35%",
    top: "40%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Gaming",
    emoji: "🕹️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];
const About = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 ">
      <div className="container">
        <SectionHeader
          eyebrow="A glimpse into my world"
          title="About Me"
          description="Learn more about what I can do and who I am"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader title="Reads" description="Explore the book" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImg} alt="/" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I 
          use to design."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName=" animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName=" animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px]  p-0 flex flex-col col-span-3">
              <CardHeader
                title="Beyond code"
                description="Explore my interests and hobbies"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2">
              <Image
                src={mapImage}
                alt="/"
                className="h-full w-full object-cover object-left-top lg:hidden"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full after:content-[' '] after:absolute after:inset-0 after:outline after:outline-2    after:-outline-offset-2 after:rounded-full  after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:.9s]"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={memoji} alt="/" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
