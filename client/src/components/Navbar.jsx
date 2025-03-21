"use client";
import { Drawer } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const routes = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Services",
      path: "/#services",
    },
    {
      label: "Skills",
      path: "/#skills",
    },
    {
      label: "Education",
      path: "/#education"
    }
  ];
  const [open, setOpen] = useState(false);

  const toggleDrawer = (fn) => {
    setOpen(fn);
  };
  return (
    <div className="">
      <div className="fixed lg:p-5 w-full lg:px-20 p-3 z-[100] ">
        <main className="p-5 border flex justify-between items-center rounded-2xl backdrop-blur-xl ">
          <section className="lg:pl-5">
            <div className="flex items-center relative border">
              <h1 className="text-4xl hello absolute top-[-15px]">Krishna</h1>
            </div>
          </section>
          <section className="lg:flex hidden gap-8 font-semibold  rounded-2xl">
            {routes.map((route, index) => (
              <Link key={index} className="hover:opacity-75 hover:tracking-wide duration-200" href={route.path}>
                {route.label}
              </Link>
            ))}
          </section>
          <section className="lg:block hidden">
            <Link
              href={"/#contact"}
              className="px-5 py-2 rounded-xl text-white bg-black font-semibold"
            >
              Hire Me
            </Link>
          </section>
          <section className="text-2xl lg:hidden">
            <HiOutlineMenuAlt4 onClick={() => toggleDrawer(true)} />
          </section>
        </main>
      </div>
      <div className="pt-[120px]"></div>
      <div className="bg-white">
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
          <section className="flex flex-col justify-between w-full min-w-[250px] max-h-[100vh] px-10">
            <div className="">
              <div className="flex justify-end pt-10">
                <IoMdClose
                  className="text-4xl"
                  onClick={() => toggleDrawer(false)}
                />
              </div>
              <div className="flex justify-center pt-10 font-bold text-2xl ec tracking-[5px]">
                <h1>Menu</h1>
              </div>
              {/* <section className="flex items-center pt-10">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="What are you looking for?"
                  className="bg-zinc-100/30 border-2 px-1 py-2 rounded-xl min-w-[250px] head pr-[50px] pl-5 focus:outline-none"
                />
                <IoSearch className="text-3xl text-zinc-400 ml-[-40px] border-l pl-2 bg-zinc-100/30" />
              </section> */}
              <div className="grid pt-10 gap-5 text-center">
                {routes.map((route, index) => {
                  return (
                    <div key={index} onClick={()=>toggleDrawer(false)} className="">
                      <Link
                        
                        href={route.path}
                        className={""}
                      >
                        <h1 className="">{route.label}</h1>
                      </Link>
                    </div>
                  );
                })}
                <div onClick={()=>toggleDrawer(false)} className="pt-5">
                <Link
                  href={"/#contact"}
                  className="px-5 py-2 rounded-xl text-white bg-black font-semibold"
                >
                  Hire Me
                </Link>
                </div>
              </div>
            </div>
            <div className="bottom flex align-bottom text-black pb-10 justify-center  pt-10">
              <div className="">
                <div className="flex items-center gap-5">
                  <h1 className="text-2xl hello text-center">Krishna</h1>
                </div>
              </div>
            </div>
          </section>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
