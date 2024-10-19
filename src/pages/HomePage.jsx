import Header from "../components/Header";
import theMan from "../images/Man.png";
import { motion } from "framer-motion";

export default function HomePage() {
  const handleClick = () => {
    window.location.href = "https://app.namadex.ir/";
  };
  return (
    <div className="sm:bg-[url(../src/images/HomePageBI.jpg)] bg-no-repeat bg-cover bg-left h-screen">
      <Header></Header>
      <div className="flex flex-col h-screen sm:pb-[10rem] w-full md:flex-row justify-center items-center bg-[#fffaf4] xl:h-[60rem] sm:bg-transparent">
        <div className="flex-1 sm:hidden">
          <img src={theMan} alt="The Man" />
        </div>
        <div className="pb-10 flex-1 flex flex-col items-end text-right relative sm:flex sm:gap-[2rem] h-[30rem] sm:pb-0">
          <div className="mr-[2.5rem] gap-3 flex flex-col items-end sm:gap-2 sm:m-10 sm:mr-[4rem]">
            <motion.h1
              initial={{ x: "-10vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 120 }}
              className="text-[40px] font-bold text-[#3DA88C] md:text-[55px] "
            >
              نمادِکس
            </motion.h1>
            <h2 className="text-[20px] text-[#4D4D4D] sm:text-[33px]">
              با ما به دنیای جدید کسب و کار بپیوندید
            </h2>
            <h3 className="w-[18rem] text-[18px] text-[#6A7875] sm:text-[20px] sm:w-auto">
              قابلیت عرضه املاک، دارایی های کشاورزی و دیگر دارایی های شما
            </h3>
            <h3 className="text-[18px] text-[#6A7875] sm:text-[20px]">
              در شرکت ما
            </h3>
          </div>
          <motion.button
            onClick={handleClick}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className=" text-[15px] bg-[#3DA88C] text-white py-2.5 px-5 rounded absolute right-10 bottom-[5rem] sm:bottom-[3rem] sm:right-[4rem]"
          >
            !ثبت نام کنید
          </motion.button>
        </div>
      </div>
    </div>
  );
}
