import { useContext } from "react";
import { motion } from "framer-motion";
import { SectionsContext } from "../components/SectionsContext";

export default function AboutUs() {
  const { sections, isLoading } = useContext(SectionsContext);
  return (
    <div
      id="AboutUs"
      className="bg-[url(../src/images/AboutUsBI.jpg)] bg-cover bg-contain bg-no-repeat flex flex-col-reverse h-screen sm:flex-row bg-left xl:h-[50rem]"
    >
      {isLoading && (
        <div className="flex-1 flex flex-col gap-10 justify-center items-start">
          <div className="flex flex-col gap-10 items-end">
            <h1 className="font-bold text-[27px] text-[#4D4D4D] mr-4  sm:text-[35px]">
              {sections[0].title}
            </h1>
            <p
              dir="rtl"
              className="text-[15px] text-[#4D4D4D] max-w-[90%] text-right mr-4 sm:text-[14px]"
            >
              {sections[0].description}
            </p>
          </div>
          {/* <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="#ReadMore"
            target="_blank"
            className="text-[13px] text-[#3FAC8D] sm:text-[18px] ml-10"
          >
            ادامه ی مطلب
          </motion.a> */}
        </div>
      )}
      <div className="flex-1 relative flex flex-col justify-center">
        <img
          className="absolute mb-[1rem] sm:right-20 mt-0"
          src={`https://api.namadex.ir/api/v1/section/2/image`}
          alt="AboutUs Image"
          width={450}
        />
      </div>
    </div>
  );
}
