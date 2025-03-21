"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
import { IoCall, IoMail, IoSend } from "react-icons/io5";
import { GiStarMedal } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { SiGoogledocs } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="lg:px-20 px-8 py-10">
      <div className="">
      
        <div className="">
          <div className="py-5 flex justify-center">
            <Link
              href="https://drive.google.com/file/d/17QSdynWeayN2RoCTUDemDma7qSqbzMkT/view?usp=drivesdk "
              className="flex gap-3 items-center hover:bg-orange-100 duration-200 p-1 border-2  rounded-3xl"
            >
              <div className="bg-orange-200 text-orange-600 p-2 rounded-full">
                <SiGoogledocs />
              </div>
              <h1 className="pr-5 font-semibold text-sm">Resume</h1>
            </Link>
          </div>
          <div className=" flex justify-center">
            <div className="md:min-w-[450px] min-w-full  ">
              <div className="flex p-2 items-center border rounded-full justify-between">
                <div className="flex gap-3 items-center">
                  <IoMail className="text-orange-400 p-2 text-4xl bg-orange-200 rounded-full" />
                  <h1 className="font-semibold lg:text-md text-sm">
                    mkrishnakr62@gmail.com
                  </h1>
                </div>

                <Link href="mailto:mkrishnakr62@gmail.com">
                  <div className="">
                    <IoSend className="text-orange-400 p-2 text-4xl bg-orange-200 rounded-full" />
                  </div>
                </Link>
              </div>
              <div className="flex justify-between px-5 pt-1 text-[10px] lg:text-[12px] font-semibold">
                <div className="flex gap-1">
                  <FaStar className="m-auto" />
                  <p>Average Ratings</p>
                </div>
                <div className="flex gap-1">
                  <GiStarMedal className="m-auto" />
                  <p>Awards</p>
                </div>
                <div className="flex gap-1">
                  <AiFillSafetyCertificate className="m-auto" />
                  <p>Certified Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Link
              className="flex gap-2 items-center hover:text-white/70 duration-200 bg-orange-400 py-1 px-3 text-white border-2 border-white shadow-md shadow-orange-400 rounded-2xl"
              href={"tel:+916209085450"}
            >
              <IoCall />
              <h1> +91 6209085450</h1>{" "}
            </Link>
          </div>
          <div className="flex justify-center gap-8 pt-5 text-2xl">
            <Link
              target="_blank"
              className="hover:text-orange-400 duration-200"
              href={"mailto:mkrishnakr62@gmail.com"}
            >
              <SiGmail />
            </Link>
            <Link
              target="_blank"
              className="hover:text-orange-400 duration-200"
              href={"https://github.com/mkrishnakr62"}
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              className="hover:text-orange-400 duration-200"
              href={"https://www.linkedin.com/in/mkrishnakr/"}
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
