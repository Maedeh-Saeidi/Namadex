import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      dir="rtl"
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto sm:pr-[14rem]"
    >
      <ul className="hidden md:flex text-[15px]">
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#AboutUs"
          className="p-4"
        >
          درباره ی ما
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#Services"
          className="p-4"
        >
          محصولات
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#Projects"
          className="p-4"
        >
          سرویس ها
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#ContactUs"
          className="p-4"
        >
          ارتباط با ما
        </motion.a>
      </ul>
      <div dir="rtl" onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose size={20} className="mr-4 mb-[40px]" />
        ) : (
          <AiOutlineMenu size={20} className="mr-4 mb-[40px]" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed right-0 top-[3rem] w-[50%] h-full border-r-gray-900 bg-[#FFFEFD] z-10 ease-in-out duration-500  text-[13px]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-1 pt-[5rem] flex flex-col gap-2">
          <a
            href="#AboutUs"
            onClick={handleNav}
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            درباره ی ما
          </a>
          <a
            onClick={handleNav}
            href="#Services"
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            محصولات
          </a>
          <a
            onClick={handleNav}
            href="#Projects"
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            سرویس ها
          </a>
          <a
            onClick={handleNav}
            href="#ContactUs"
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            ارتباط با ما
          </a>
        </ul>
      </div>
    </div>
  );
}
