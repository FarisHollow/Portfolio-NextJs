import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const webProjects = [
  {
    name: "Doctor's Portal",
    description:
      "Doctor's Portal is a web-based digital platform designed to streamline medical practice management, allowing healthcare professionals to efficiently manage users' records, appointments, billing, and communication online.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/FarisHollow/Doctor-s-Portal.git",
    link: "https://thankfulthoughts.io/",
  },
  // Add more web projects here
];

const appProjects = [
  {
    name: "PlatoIO",
    description: "PlatoIO is a to-do list app built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
  },
  // Add more app projects here
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-row space-x-10 ml-11">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Web Applications</h2>
          {webProjects.map((project, idx) => (
            <div key={idx} className="mb-16">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 space-y-4">
                  {project.link ? (
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.image}
                      alt=""
                      width={400}
                      height={400}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  )}
                  <h1 className="text-2xl font-bold">{project.name}</h1>
                  <p className="text-lg leading-6 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row space-x-4 mt-2">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={24}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    {project.link ? (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={24}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    ) : (
                      <span>No links available</span>
                    )}
                  </div>
                </div>
              </SlideUp>
            </div>
          ))}
        </div>

        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Mobile Apps</h2>
          {appProjects.map((project, idx) => (
            <div key={idx} className="mb-16">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 space-y-4">
                  {project.link ? (
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.image}
                      alt=""
                      width={400}
                      height={400}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  )}
                  <h1 className="text-2xl font-bold">{project.name}</h1>
                  <p className="text-lg leading-6 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row space-x-4 mt-2">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={24}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    {project.link ? (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={24}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    ) : (
<div style={{ display: 'flex', alignItems: 'center' }}>
  <div
    style={{
      backgroundColor: '#f7f7f7', // Light background color
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '5px 10px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for depth
    }}
  >
    <span
      style={{
        fontSize: '0.8rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginRight: '5px',
        color: 'black', // Text color for dark mode
      }}
    >
      No live demo available
    </span>
  </div>
</div>

                    )}
                  </div>
                </div>
              </SlideUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
