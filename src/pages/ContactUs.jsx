import { useState } from "react";
import EmailP from "../images/EmailP.png";
import { motion } from "framer-motion";

import ContactUsForm from "../components/ContactUsForm";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div
      id="ContactUs"
      className="h-screen bg-no-repeat bg-cover sm:flex flex-col justify-center xl:h-[30rem] relative"
    >
      <div className=" flex flex-col sm:flex-row h-screen sm:h-[30rem] bg-[url(../src/images/GreenBg.jpg)] ">
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <img
            src={EmailP}
            alt="Email"
            width={500}
            className="absolute sm:bottom-[8rem]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center sm:pb-[5rem] gap-[2.5rem] text-right">
          <h1 className="text-[30px] text-[#FFFFFF] pr-[2rem] sm:pr-[5rem] sm:text-[35px]">
            با ما در ارتباط باشید
          </h1>
          <ContactUsForm isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      </div>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoading ? 1 : 0, y: isLoading ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[5rem] left-[45%] bg-lightblue pt-3 pb-3 pr-10 pl-10 text-center bg-gray-100 rounded text-[13px]"
        >
          {feedback}
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}
