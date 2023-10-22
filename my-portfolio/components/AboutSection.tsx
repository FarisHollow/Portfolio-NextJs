import React from "react";
import Image from "next/image";
import "./style.css";
const webDevelopmentSkills = [
  { skill: "Laravel", logo: "Laravel.png" },
  { skill: "Next.js", logo: "nextjs.png" },
  { skill: "Nest.js", logo: "nestjs.png" },
  { skill: "React", logo: "react.png" },
  { skill: "PHP", logo: "php.png" },
  { skill: "JavaScript", logo: "javascript.png" },
  { skill: "Tailwind CSS", logo: "tailwind.png" },
  { skill: "PostgreSQL", logo: "postgresql.png" },
  { skill: "TypeScript", logo: "typescript.png" },
    { skill: "MySQL", logo: "mysql.png" },

  { skill: "Bootstrap", logo: "bootstrap.png" },
];

const appDevelopmentSkills = [
  { skill: "Flutter", logo: "flutter.png" },
  { skill: "Rest API", logo: "rest.png" },
  { skill: "Firebase", logo: "firebase.png" },
  { skill: "Dart", logo: "dart.png" },
];

const commonSkillsData = [
  { skill: "Git", logo: "git.png" },
  { skill: "GitHub", logo: "github.png" },
  { skill: "C#", logo: "cs.png" },
  { skill: "Python", logo: "python.png" },
  { skill: "Java", logo: "java.png" },
  { skill: "C++", logo: "cpp.png" },
];

interface SkillBoxProps {
  skill: string;
  isDarkMode: boolean;
  logo: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skill, isDarkMode, logo }) => (
  <div className={`bg-black p-4 rounded m-2 text-white border-2 border-amber-500 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
    <img src={logo} alt={skill} className="mb-2" style={{ maxWidth: "50px", maxHeight: "50px" }} />
    {skill}
  </div>
);

const AboutSection = () => {
  // Replace this with your actual dark mode detection logic
  const isDarkMode = true;

  return (
    <section id="about">
    
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        {/* "My Stacks" section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold mb-6">My Stacks</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-amber-500 bg-stone-500 p-6 rounded">
              <h2 className="text-2xl font-bold text-center mb-4 bg-amber-500">Web Development</h2>
              <div className="flex flex-wrap">
                {webDevelopmentSkills.map((skill, idx) => (
                  <SkillBox key={idx} skill={skill.skill} logo={skill.logo} isDarkMode={isDarkMode} />
                ))}
              </div>
            </div>
            <div className="border border-amber-500 bg-stone-500 p-6 rounded">
              <h2 className="text-2xl font-bold text-center mb-4 bg-amber-500">App Development</h2>
              <div className="flex flex-wrap">
                {appDevelopmentSkills.map((skill, idx) => (
                  <SkillBox key={idx} skill={skill.skill} logo={skill.logo} isDarkMode={isDarkMode} />
                ))}

                <h4 className="course-heading">Course</h4>
                <a href="https://ostad.app/" target="_blank" rel="noopener noreferrer" className="ostad-link">
                  <div className="ostad-container">
                    <div className="status-point"></div>
                    <img src="ostad.png" alt="Ostad" className="ostad-logo" />
                    <div className="arrow-line">
                      <div className="arrowhead"></div>
                    </div>
                  </div>
                  <p className="ostad-text">My course is on Going</p>
                </a>




                 <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 mt-20" 
            />
            
            
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
              Hi, my name is Mir Faris, and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Dhaka, Bangladesh.
            </p>
            <br />
            <p>
              I am a student of American International University of Bangladesh studying Bsc on Computer Science & Engineering.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">never stop growing</span> and that's what I strive to do. I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Alternative Skills</h1>
            <div className="grid grid-cols-3 gap-4">
        {commonSkillsData.map((skillData, idx) => (
          <SkillBox
            key={idx}
            skill={skillData.skill}
            logo={skillData.logo}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
