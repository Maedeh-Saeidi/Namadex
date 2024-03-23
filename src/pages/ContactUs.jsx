import { useEffect, useState } from "react";
import EmailP from "../images/EmailP.png";
import { motion } from "framer-motion";
import axios from "axios";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(email, message);

  const handelSubmit = (e) => {
    e.preventDefault();
    const sendData = async () => {
      try {
        const configuration = {
          method: "post",
          url: "https://api.namadex.ir/api/v1/contact",
          data: {
            email,
            message,
          },
        };
        const result = await axios(configuration);
        setFeedback("پیام با موفقیت ارسال شد");
        setIsLoading(true);
        console.log(result);
      } catch (error) {
        setFeedback("لطفا دوباره تلاش کنید");
        console.error(error);
      }
    };
    sendData();
  };
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);
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
          <h1 className="text-[30px] text-[#FFFFFF] pr-[2rem] sm:pr-[5rem] sm:text-[40px]">
            با ما در ارتباط باشید
          </h1>
          <form
            action=""
            className="flex flex-col gap-4 pl-[2.8rem] sm:items-center sm:pl-[5rem]"
          >
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[18rem] rounded py-2 px-5 text-right sm:w-[25rem] focus:outline-none"
              placeholder="ایمیل خود را وارد کنید"
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" w-[18rem] rounded py-2 px-5 text-right sm:w-[25rem] focus:outline-none"
              placeholder="متن پیام خود را بنویسید"
            />
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="w-[18rem] bg-[#FFFFFF] text-[#3EA98D]] py-2 px-5 rounded text-[#3EA98D] sm:w-[25rem] text-center"
              onClick={(e) => handelSubmit(e)}
            >
              ارسال
            </motion.button>
          </form>
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
