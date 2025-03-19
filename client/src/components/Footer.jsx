import Link from "next/link";
import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="w-full">
      <div className="bg-black rounded-t-2xl p-10 w-full ">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-20 text-white">
          <div className="lg:col-span-2">
            <h1 className="hello text-3xl">Krishna</h1>
            <h5 className="pt-3 text-sm  text-justify">
              I am Krishna Mohan, a passionate web developer and software engineer with
              a love for turning ideas into interactive and visually appealing
              experiences.Explore my work, and lets connect to discuss how we
              can collaborate and bring your ideas to life.
            </h5>
          </div>
          <div className="">
            <h1 className="font-semibold text-xl">Navigation</h1>
            <div className="grid gap-1 text-sm pt-2">
              <Link className="hover:text-white/70 duration-200" href={"/"}>
                Home
              </Link>
              <Link className="hover:text-white/70 duration-200" href={"/#services"}>
                Services
              </Link>
              <Link className="hover:text-white/70 duration-200" href={"/#skills"}>
                Skills
              </Link>
              <Link className="hover:text-white/70 duration-200" href={"/#education"}>
                Education
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="font-semibold text-xl">Contact</h1>
            <div className="grid gap-2 text-sm pt-2">
              <Link
              target="_blank"
                className="flex gap-2 items-center hover:text-white/70 duration-200"
                href={"mailto:mkrishnakr62@gmail.com"}
              >
                <SiGmail />
                <h1> mkrishnakr62@gmail.com</h1>{" "}
              </Link>
              <Link
              target="_blank"
                className="flex gap-2 items-center hover:text-white/70 duration-200"
                href={"https://github.com/mkrishnakr62"}
              >
                <FaGithub />
               
                <h1> github/mkrishnakr62</h1>{" "}
              </Link>
              <Link
              target="_blank"
                className="flex gap-2 items-center hover:text-white/70 duration-200"
                href={"https://www.linkedin.com/in/mkrishnakr/"}
              >
                <FaLinkedin />
                <h1> linkedin/mkrishnakr</h1>{" "}
              </Link>
              <Link
              target="_blank"
                className="flex gap-2 items-center hover:text-white/70 duration-200"
                href={"tel:+916209085450"}
              >
                <IoCall />
                <h1> +91 6209085450</h1>{" "}
              </Link>
            </div>
          </div>
        </div>
        <p className="pt-10 text-white text-sm text-center">Copyright &copy;{date} Krishna Mohan , All Rights Reserved</p>
      </div>
      
    </div>
  );
};

export default Footer;
