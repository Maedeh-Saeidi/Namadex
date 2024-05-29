import border from "../images/border.jpg";
import { motion } from "framer-motion";
import { SectionsContext } from "../components/SectionsContext";
import { useContext } from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function NewsPage() {
  const { sections, isLoading } = useContext(SectionsContext);
  return (
    isLoading && (
      <div className="h-max-screen sm:h-screen flex flex-col gap-[2.5rem] sm:gap-[5rem] bg-[#FFFCF8] xl:h-[50rem]">
        <div className=" flex flex-row justify-center items-center sm:h-40 mt-10">
          <div className="flex-1">
            <img src={border} alt="" className="" />
          </div>
          <h1 className="font-bold text-[25px] text-left flex-1 pr-[5rem]  sm:pr-[15rem] sm:text-[50px]">
            {sections[3].title}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center mb-10 text-[#4D4D4D] text-[15px] sm:text-[20px] w-[90%] rounded-xl pl-4 sm:pl-0">
            <Swiper
              modules={[Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
            >
              {sections[3].posts.map((post, index) => (
                <SwiperSlide key={index}>
                  <div
                    dir="rtl"
                    className={`bg-white 2xl:w-[30rem] 2xl:h-[37rem] w-[20rem] h-[32rem] xl:h-[31rem] lg:w-[20rem] xl:w-[24rem] rounded-2xl shadow-xl`}
                  >
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                      target="_blank"
                      href={post.link}
                    >
                      <div className="flex flex-col gap-6 items-center justify-center rounded-2xl">
                        <img
                          src={`https://api.namadex.ir/api/v1/section/post/${post.id}/image`}
                          alt={post.title}
                          className="w-[24rem] items-center rounded-2xl 2xl:w-[30rem]"
                        />
                        <p
                          className="font-bold w-[85%] text-[17px] 2xl:text-[20px] text-[#4D4D4D] pr-4"
                          dangerouslySetInnerHTML={{ __html: post.title }}
                        ></p>
                        <p
                          className="font-bold w-[85%] text-[15px] 2xl:text-[17px] text-[#4D4D4D] pr-4"
                          dangerouslySetInnerHTML={{ __html: post.description }}
                        ></p>
                        <motion.a
                          href={post.link}
                          target="_blank"
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 8px rgb(255,255,255)",
                          }}
                          className="text-[#3FAC8D] text-[15px] pr-[11rem]"
                        >
                          بیشتر بخوانید
                        </motion.a>
                      </div>
                    </motion.a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    )
  );
}
