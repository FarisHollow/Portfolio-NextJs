"use client" // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { FiDownload, FiMail } from "react-icons/fi";
import "./style.css";

const HeroSection = () => {
  const contactMeLink = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGlnjKnglglBsmpVZPvFKhnMKCJthpxctPHlfggSMqhDXPhTwmmvmkflVSnFDXVmGfGhg";

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-slideUpCubiBezier animation-delay-2 my-0 py-0 sm:py-0 md:py-40 md:flex-row md:space-x-24 md:text-left">
        <div className="md:mt-2 md:w-1/2 rounded-amber-border animate-slideUpEaseInOut">
          <Image
            src="/faris.jpg"
            alt=""
            width={1025}
            height={1025}
            className="rounded-full shadow-2xl border-4 border-blue-500"
          />
        </div>

        <div className="md:mt-2 md:w-3/5">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&apos;m Faris!</h1>
<p className="text-lg mt-4 mb-6 md:text-2xl">
  A passionate <span className="font-semibold text-teal-600">Software Engineer</span> hailing from Dhaka, Bangladesh. My journey is driven by the relentless pursuit of growth and excellence within the realm of technology.
</p>

          <div className="flex items-center">
            <a
              href={contactMeLink}
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 neon-border"
              target="_blank"
              rel="noreferrer"
              style={{ cursor: 'pointer' }}
            >
              <div className="flex items-center">
                Contact Me <FiMail size={20} className="ml-2" />
              </div>
            </a>
            <a
              href="/Mir Faris.pdf"
              download="Mir Faris.pdf"
              className="text-teal-600 font-semibold px-6 py-3 border border-amber-500 rounded shadow hover-bg-teal-700 ml-3 flex items-center neon-border"
            >
              <FiDownload size={20} className="mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
