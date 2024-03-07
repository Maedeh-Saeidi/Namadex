import SocialMedia from "./SocialMedia";
import namadSvg from "../images/Namadex.svg";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className=" gap-0 h-[18rem] sm:h-[35rem] bg-[#20292d] sm:bg-[url(../src/images/FooterBI.jpg)] bg-cover bg-no-repeat bg-contain flex flex-col sm:flex-row text-[#FFFFFF] xl:h-[35rem] sm:gap-0">
      <div className="hidden sm:flex-1 sm:flex justify-center items-center sm:mt-[10rem]">
        <div className="flex flex-col gap-1 mt-[5rem] text-[20px]">
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="tel:982188600820+"
          >
            +982188600820
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="mailto:Namadex.ir@gmail.com"
          >
            Namadex.ir@gmail.com
          </motion.a>
        </div>
      </div>
      <div className="mt-5 flex-1 flex flex-col gap-10 items-center justify-center sm:mt-[10rem]">
        <a href="" className="hidden sm:flex flex-col items-center gap-2">
          <motion.img
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            src={namadSvg}
            alt="Namadex"
          />
          <motion.h1
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="font-bold text-[24px]"
          >
            Namadex
          </motion.h1>
        </a>
        <div>
          <SocialMedia color={"#FFFFFF"}></SocialMedia>
        </div>
      </div>
      <div className="flex-1 sm:mt-[10rem] text-[14px] sm:text-[20px] mt-5 sm:mt-0">
        <ul className="flex flex-row gap-5 sm:flex-col items-center justify-center sm:mt-[7.5rem] sm:gap-5">
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className=""
          >
            درباره ی ما
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className=""
          >
            محصولات
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className=""
          >
            سرویس ها
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className=""
          >
            ارتباط با ما
          </motion.a>
        </ul>
      </div>
      <div className="sm:hidden flex-1 flex justify-center items-center mb-5 ml-5">
        <div className="flex flex-col gap-1 mb-[1rem] text-[15px]">
          <a href="https://namadex.ir/" target="_blank" className="pl-[3rem]">
            <img src={namadSvg} alt="" width={50} />
          </a>
          <a href="tel:982188600820+" className="text-center mt-2">
            982188600820+
          </a>
          <a href="mailto:Namadex.ir@gmail.com">Namadex.ir@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
