import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";

const Footer = () => {
  const address = "Uttara, Dhaka";
  const phone = "+8801330804697";
  const email = "mirfaris79@gmail.com";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="text-center md:text-left mb-6">
          <span className="text-2xl font-semibold">© 2023 Mir Faris</span>
          <a href="/" className="block text-sm text-gray-400 hover:underline">
            Home
          </a>
        </div>

        <div className="text-center md:text-left">
          <div className="mb-4">
            <span className="text-2xl">
              <AiOutlineMail />
            </span>
            <strong className="ml-2">{email}</strong>
          </div>
          <div className="mb-4">
            <span className="text-2xl">
              <AiOutlinePhone />
            </span>
            <strong className="ml-2">{phone}</strong>
          </div>
          <div>
            <span className="text-2xl">
              <AiFillEnvironment />
            </span>
            <strong className="ml-2">{address}</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
