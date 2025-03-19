"use client";
import React from "react";
import { IoReader } from "react-icons/io5";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="lg:px-20 px-8 py-10">
      <motion.h1
        initial={{ opacity: 0, scale: 0.4, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        viewport={{ once: true }}
        className="font-semibold text-3xl"
      >
        My{" "}
        <span className="text-4xl hello font-normal text-orange-400">
          Education
        </span>
      </motion.h1>
      <div className="flex flex-col pt-8 lg:px-10 ">
        <motion.div
            initial={{ opacity: 0, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }} className="">
          <div className="flex gap-3 md:items-center">
            <div className="bg-gradient-to-br h-fit w-fit from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="md:flex justify-between w-full items-center">
              <h1 className="font-semibold text-xl">
                B.Tech - Computer Science and Engineering
              </h1>
              <h1 className="text-gray-400">Nov 2021 - June 2025</h1>
            </div>
          </div>
          <div className="border-l-2 px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <h1>CGPA : 6.2 / 10</h1>
            <h2>Malaviya National Institute of Technology,Jaipur</h2>
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 , delay:0.3 }}
            viewport={{ once: true }} className="">
          <div className="flex gap-3 md:items-center">
            <div className="bg-gradient-to-br h-fit w-fit from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="md:flex justify-between w-full items-center">
              <h1 className="font-semibold text-xl">
                12th - PCM
              </h1>
              <h1 className="text-gray-400">Apr 2019</h1>
            </div>
          </div>
          <div className="border-l-2 px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <h1>Percentage : 81%</h1>
            <h2>G M College ,West Champaran</h2>
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50,delay:0.5 }}
            viewport={{ once: true }} className="">
          <div className="flex gap-3 md:items-center">
            <div className="bg-gradient-to-br h-fit w-fit from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="md:flex justify-between w-full items-center">
              <h1 className="font-semibold text-xl">10th</h1>
              <h1 className="text-gray-400">Apr 2017</h1>
            </div>
          </div>
          <div className=" px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <h1>Percentage : 85%</h1>
            <h2>MAHANT RAMRUP GOSWAMI HS ,West Chamaparan</h2>
          </div>
        </motion.div>

        {/* <div className="">
          <div className="flex gap-3 items-center">
            <div className="bg-gradient-to-br from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="">
                <h1 className="font-semibold text-xl">HSC - Maths & Computer Science</h1>
            </div>
          </div>
          <div className="border-l-2 p-5 ml-[18px]">
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
