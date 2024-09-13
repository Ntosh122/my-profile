import NotionImg from "@/assets/images/notion.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import applePage from "@/assets/images/mac.png";
import pixPage from "@/assets/images/pix.png";
import typePage from "@/assets/images/typesavvy.png";
import grilliPage from "@/assets/images/grilli.png";
import uLearnPage from "@/assets/images/udemy.png";
import gitSeekImg from "@/assets/images/github_img.png";
import tvImg from "@/assets/images/tvFlix.png";
import linkedinImg from "@/assets/images/linkedin.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Github",
    year: "2023",
    title: "GitSeekr.",
    results: [
      { title: "Github API for user information" },
      { title: "Profile user search enabled" },
      { title: "Toggles between dark & light mode theme" },
    ],
    link: "https://gitseekr-ntandos-projects-7a07e398.vercel.app/",
    image: gitSeekImg,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "TvFlix Movie",
    results: [
      { title: "SEO Optimization" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://flixitv.netlify.app/",
    image: tvImg,
  },
  {
    company: "Grilli",
    year: "2022",
    title: "Grilli Resturant",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://grili-resturant.vercel.app/",
    image: grilliPage,
  },
  {
    company: "TypeSavvy",
    year: "2023",
    title: "TypeSavvy Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://typesavy.vercel.app/",
    image: typePage,
  },
  {
    company: "uLearn",
    year: "2022",
    title: "uLearn Online Course",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://udemy-alike-clone.netlify.app/",
    image: uLearnPage,
  },
  {
    company: "Pexels",
    year: "2023",
    title: "Pixstocks - Photo Stock Library",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://pixstocks.netlify.app/",
    image: pixPage,
  },
  {
    company: "Notion",
    year: "2024",
    title: "Notion Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://notion-clone-website.vercel.app/",
    image: NotionImg,
  },
  {
    company: "Apple",
    year: "2024",
    title: "iPhone 15 Titanium Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Premium animation and custom styling" },
    ],
    link: "https://apple-website-chi-six.vercel.app/",
    image: applePage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Parallax scrolling feature" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://light-saas-landing-page-rho.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "LinkedIn",
    year: "2022",
    title: "LinkedIn Clone landing Page",
    results: [
      { title: "Parallax scrolling feature" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://linked-in-clone-page.vercel.app/",
    image: linkedinImg,
  },
];

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real world projects"
          title="Featured Projects"
          description="A glimpse of I transform concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectindex) => (
            <Card
              key={project.title}
              className="px-8 pt-8  pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px +${projectindex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="pb-16">
                  <div className="bg-gradient-to-r from bg-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      // eslint-disable-next-line react/jsx-key
                      <li className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckIcon className="size-5 md:size-6 text-green-500" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-black w-full h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>View Live Site</span>
                      <ArrowUp className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
