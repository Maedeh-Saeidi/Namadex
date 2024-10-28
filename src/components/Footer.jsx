import SocialMedia from "./SocialMedia";
import namadSvg from "../images/MaskLogo.svg";
import { motion } from "framer-motion";
import FooterElements from "./FooterElements";

export default function Footer() {
  return (
    <div className="gap-0 h-[18rem] sm:h-[35rem] bg-[#20292d] sm:bg-[url(../src/images/FooterBI.jpg)] bg-cover bg-no-repeat flex flex-col sm:flex-row text-[#FFFFFF] xl:h-[35rem] sm:gap-0">
      <div className="hidden sm:flex-1 sm:flex justify-center items-center sm:mt-[10rem]">
        <div className="flex flex-col gap-1 mt-[10rem] text-[20px]">
          <motion.a
            className="cursor:pointer"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            target="_blank"
            href="https://trustseal.enamad.ir/?id=540054&Code=EBJhrfp7yX3VdCeRjqrHV01q1CifgF4i"
          >
            <img
              src="https://trustseal.enamad.ir/logo.aspx?id=540054&Code=EBJhrfp7yX3VdCeRjqrHV01q1CifgF4i"
              alt="Enamad"
              referrerpolicy="origin"
              code="EBJhrfp7yX3VdCeRjqrHV01q1CifgF4i"
            />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="tel:02188424516"
          >
            02188424516
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="mailto:info@namadex.ir"
          >
            info@namadex.ir
          </motion.a>
        </div>
      </div>
      <div className="mt-5 flex-1 flex flex-col gap-1 items-center justify-center sm:mt-[10rem]">
        <a
          href=""
          className="hidden sm:flex flex-col items-center gap-2 2xl:pt-10 2xl:gap-0"
        >
          <motion.img
            whileHover={{
              scale: 1.1,
            }}
            className=""
            width={150}
            src={namadSvg}
            alt="Namadex"
          />
        </a>
        <div>
          <SocialMedia color={"#FFFFFF"}></SocialMedia>
        </div>
      </div>
      <div className="flex-1 sm:mt-[11rem] 2xl:mt-[12.5rem] text-[14px] sm:text-[20px] mt-5">
        <ul className="flex flex-row gap-5 sm:flex-col items-center text-[12.5px] sm:text-[15px] justify-center sm:mt-[7.5rem] sm:gap-5">
          <FooterElements />
        </ul>
      </div>
      <div className="sm:hidden flex-1 flex justify-center items-center mb-5 ml-5">
        <div dir="rtl" className="flex flex-col gap-1 mb-[1rem] text-[15px]">
          <div className="flex flex-row items-baseline">
            <a
              href="https://namadex.ir/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={namadSvg} alt="Namadex" width={120} className="pt-1" />
            </a>
            <a
              className="cursor-pointer"
              referrerpolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=505639&Code=szzIQkre9wvQVg03GbpZe4o3hXIzV7Fs"
            >
              <img
                width={80}
                referrerpolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=505639&Code=szzIQkre9wvQVg03GbpZe4o3hXIzV7Fs"
                alt="Enamad"
                code="szzIQkre9wvQVg03GbpZe4o3hXIzV7Fs"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <a href="tel:02188424516" className="text-center mt-2">
              02188424516
            </a>
            <a href="mailto:info@namadex.ir">info@namadex.ir</a>
          </div>
        </div>
      </div>
    </div>
  );
}
