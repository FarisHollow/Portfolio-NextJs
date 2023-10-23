import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const webProjects = [
  {
    name: "Doctor's Portal",
    description:
      "Doctor's Portal is a web-based digital platform designed to streamline medical practice management. Based on NestJs, NextJs & PostgreSQL.",
    image: "/main-dp.jpg",
    github: "https://github.com/FarisHollow/Doctor-s-Portal.git",
    link: '0',
  },
  {
    name: "Apple Store",
    description:
      "Apple Store is a full stack project based on NestJs, NextJs & PostgreSQL. It has only Admin panel integration",
    image: "/apple.png",
    github: "https://github.com/FarisHollow/Apple-Store.git",
    link: '0',
  },

  {
    name: "Customer Relationship Management (CRM)",
    description:
      "Laravel & Mysql Project based on a major part of CRM software where employee manage leads and admin view and manage progress including roles and permission",
    image: "/crm.png",
    github: "https://github.com/FarisHollow/CRM.git",
    link: '0',
  },

  {
    name: "Ancient Egypt",
    description:
      "Ancient Egypt is vanilla PHP & Mysql project that has user authentication and manage articles based on Pharaohs details",
    image: "/egypt.png",
    github: "https://github.com/FarisHollow/Ancient-Egypt",
    link: '0',
  },
  // Add more web projects here
];

const appProjects = [
  {
    name: "Task Manager",
    description: "A task manager mobile app project based on Rest API and Flutter.",
    image: "/task1.jpg",
    github: "https://github.com/FarisHollow/Task-Manager-App",
    link: "0",
  },

  {
    name: "Weather App",
    description: "Weather forcasting application using Rest API",
    image: "/weather.png",
    github: "https://github.com/FarisHollow/Weather-App.git",
    link: "0",
  },

  {
    name: "Location Tracker",
    description:
      "A real life location tracker with google maps integration.",
    image: "/location.png",
    github: "https://github.com/FarisHollow/Location-Tracker-Google_Maps.git",
    link: '0',
  },

  {
    name: "Todo List",
    description:
      "A todo app project based of stateful widgets in flutter ",
    image: "/todo.png",
    github: "https://github.com/FarisHollow/To-Do-List-App.git",
    link: '0',
  },


  {
    name: "Football Live score",
    description:
      "Firebase manual nosql football live score project.",
    image: "/live.png",
    github: "https://github.com/FarisHollow/Football-Live-Score.git",
    link: '0',
  },
  // Add more app projects here
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-row space-x-24 ml-11">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Web Applications</h2>
          {webProjects.map((project, idx) => (
            <div key={idx} className="mb-12">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 space-y-4">
                  {project.link !== '0' ? (
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={200} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.image}
                      alt=""
                      width={200} // Adjust the width as needed
                      height={300} // Adjust the height as needed
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
                    {project.link !== '0' ? (
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
                            backgroundColor: '#f7f7f7',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '5px 10px',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                              marginRight: '5px',
                              color: 'black',
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

        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Mobile Applications</h2>
          {appProjects.map((project, idx) => (
            <div key={idx} className="mb-12">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 space-y-4">
                  {project.link !== '0' ? (
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={70} // Adjust the width as needed
                        height={170} // Adjust the height as needed
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.image}
                      alt=""
                      width={200} // Adjust the width as needed
                      height={300} // Adjust the height as needed
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
                    {project.link !== '0' ? (
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
                            backgroundColor: '#f7f7f7',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '5px 10px',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                              marginRight: '5px',
                              color: 'black',
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
