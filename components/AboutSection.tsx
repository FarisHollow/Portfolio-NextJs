import React from "react";
import Image from "next/image";
import "./style.css";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
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
  <div className={`jump-on-hover bg-black p-4 rounded m-2 text-white border-2 border-amber-500 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
    <img src={logo} alt={skill} className="mb-2" style={{ maxWidth: "50px", maxHeight: "50px" }} />
    {skill}
  </div>
);


const AboutSection = () => {
  const isDarkMode = true;

  return (
    <section id="about">


    
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
      
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 mb-16 bg-teal-500 border-0 rounded"></hr>
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
            <div className="border border-amber-500 bg-teal-600 p-6 rounded">
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
                  Hey, I'm Mir Faris, a highly motivated Software Engineer from Dhaka, Bangladesh.
                </p>
                <br />
                <p>
                  I'm a Computer Science & Engineering student at American International University of Bangladesh (AIUB).
                </p>
                <br />
                <p>
                  I'm a tech enthusiast, sports lover and travel enthusiast. I thrive on new experiences and endless learning.
                </p>
                <br />
                <p>
                  I'm passionate about tech and I'm always eager to push the boundaries of what's possible. Excited for what the future holds! 😄
                </p>

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-0">Alternative Skills</h1>
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
      <section id="connect">
        <div className="my-0 pb-12 md:pt-0 md:pb-48">
          <h1 className="text-center font-bold text-4xl">Connect with me</h1>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

          <div className="flex flex-row items-center justify-center space-x-4 mb-4">
            <a href="https://github.com/FarisHollow" rel="noreferrer" target="_blank">
              <div className="icon-container">
                <AiOutlineGithub className="icon" />
              </div>
            </a>
            <a href="https://www.facebook.com/mir.faris.35" rel="noreferrer" target="_blank">
              <div className="icon-container">
                <AiOutlineFacebook className="icon" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/mirfaris79/" rel="noreferrer" target="_blank">
              <div className="icon-container">
                <AiOutlineLinkedin className="icon" />
              </div>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGlnjKnglglBsmpVZPvFKhnMKCJthpxctPHlfggSMqhDXPhTwmmvmkflVSnFDXVmGfGhg" rel="noreferrer" target="_blank">
              <div className="icon-container">
                <AiOutlineMail className="icon" />
              </div>
            </a>
            <a href="www.example.com" rel="noreferrer" target="_blank">
              <div className="icon-container">
                <AiOutlineWhatsApp className="icon" />
              </div>
            </a>
          </div>
        </div>
      </section>

    </section>
  );
};

export default AboutSection;
