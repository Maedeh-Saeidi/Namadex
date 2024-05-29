import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function ContactUsForm({ isLoading, setIsLoading }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
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
      } catch (error) {
        setFeedback("لطفا دوباره تلاش کنید");
        console.error(error);
      }
    };
    sendData();
  };
  useEffect(() => {
    if (isLoading) {
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);
  return (
    <>
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
    </>
  );
}
