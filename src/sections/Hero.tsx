'use client';
import React,{useState, useEffect} from "react";
import memojiImage from "@/assets/images/ntosh.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import CircleIcon from "@/assets/icons/circle.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Orbit } from "@/components/Orbit";


const Hero = () => {
 

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);
 

 
 
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-rings"></div>
        <div className="size-[820px] hero-rings"></div>
        <div className="size-[1020px] hero-rings"></div>
        <div className="size-[1220px] hero-rings"></div>
        <Orbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </Orbit>
        <Orbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </Orbit>
        <Orbit size={520} rotation={-41} shouldOrbit orbitDuration="34s"> 
          <CircleIcon className="size-2  fill-emerald-300/20" />
        </Orbit>
        <Orbit size={530} rotation={178} shouldOrbit orbitDuration="36s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </Orbit>
        <Orbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="3s">
          <StarIcon className="size-12 text-emerald-300 " />
        </Orbit>
        <Orbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </Orbit>
        <Orbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
          <CircleIcon className="size-2  fill-emerald-300/20" />
        </Orbit>
        <Orbit size={710} rotation={144} shouldOrbit orbitDuration="44s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </Orbit>
        <Orbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s">
          <CircleIcon className="size-3 rounded-full fill-emerald-300/20" />
        </Orbit>
        <Orbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </Orbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="/" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new work & projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="lg:text-2xl text-center mt-3 md:text-2xl">
          {greeting}!, {`I'm`} Ntokozo Gumede <span>👋</span>
          </h1>
          <h1 className="text-3xl text-center mt-8 tracking-wide font-semibold md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. {`Let's`} discuss your next
            project.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            {/* <Image src={ArrowDown.src} className='size-4' alt='/'/> */}
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span> {`Let's`} connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
