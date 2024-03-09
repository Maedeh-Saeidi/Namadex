import EmailP from "../images/EmailP.png";
import { motion } from "framer-motion";
export default function ContactUs() {
  return (
    <div
      id="ContactUs"
      className="h-screen bg-no-repeat bg-cover sm:flex flex-col justify-center xl:h-[30rem]"
    >
      <div className="flex flex-col sm:flex-row h-screen sm:h-[30rem] bg-[url(../src/images/GreenBg.jpg)] ">
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <img
            src={EmailP}
            alt="Email"
            width={500}
            className="absolute sm:bottom-[8rem]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center sm:pb-[5rem] gap-[2.5rem] text-right">
          <h1 className="text-[30px] text-[#FFFFFF] pr-[2rem] sm:pr-[5rem] sm:text-[40px]">
            با ما در ارتباط باشید
          </h1>
          <form
            action=""
            className="flex flex-col gap-4 pl-[2.8rem] sm:items-center sm:pl-[5rem]"
          >
            <input
              type="text"
              className="w-[18rem] rounded py-2 px-5 text-right sm:w-[25rem]"
              placeholder="ایمیل خود را وارد کنید"
            />
            <input
              type="text"
              className=" w-[18rem] rounded py-2 px-5 text-right sm:w-[25rem]"
              placeholder="متن پیام خود را بنویسید"
            />
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="w-[18rem] bg-[#FFFFFF] text-[#3EA98D]] py-2 px-5 rounded text-[#3EA98D] sm:w-[25rem] text-center"
            >
              ارسال
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
