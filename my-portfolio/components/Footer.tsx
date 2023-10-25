import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Mir Faris<a href="/" className="hover:underline"></a>
        </div>
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
    </footer>
  )
}

export default Footer
