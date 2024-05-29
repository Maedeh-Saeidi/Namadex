import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import icon from "../images/NamadEx.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(true);
      }
    };
    const handleScroll = () => {
      setNav(true);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      ref={navRef}
      dir="rtl"
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto sm:pr-[14rem] relative"
    >
      {!isMobile && (
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="https://namadex.ir/"
          className="p-4 2xl:w-[15%] xl:w-[20%] xl:pt-4 md:w-[20%] sm:absolute right-[2.5rem] sm:right-[3rem]"
        >
          <img src={icon} alt="Logo" />
        </motion.a>
      )}
      <ul className="hidden md:flex text-[15px]">
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#AboutUs"
          onClick={handleNav}
          className="p-4 "
        >
          درباره ی ما
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          onClick={handleNav}
          href="#Services"
          className="p-4 "
        >
          محصولات
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          onClick={handleNav}
          href="#Projects"
          className="p-4 "
        >
          سرویس ها
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          onClick={handleNav}
          href="#ContactUs"
          className="p-4 "
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
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="https://namadex.ir/"
            className="p-6 pb-5"
          >
            <img src={icon} alt="Logo" width={100} />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="#AboutUs"
            onClick={handleNav}
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            درباره ی ما
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={handleNav}
            href="#Services"
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            محصولات
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={handleNav}
            href="#Projects"
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            سرویس ها
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={handleNav}
            href="#ContactUs"
            className="p-4 border-b-2 border-[#3FAC8D]"
          >
            ارتباط با ما
          </motion.a>
        </ul>
      </div>
    </div>
  );
}
