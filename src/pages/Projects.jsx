import { motion } from "framer-motion";
import { SectionsContext } from "../components/SectionsContext";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const { sections, isLoading } = useContext(SectionsContext);
  return (
    isLoading && (
      <div
        id="Projects"
        className="h-[40rem] bg-[url(../src/images/ProjectsBI.jpg)] bg-right bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10 sm:h-screen xl:h-[60rem]"
      >
        <h1 className="flex font-bold text-[25px] mt-5 text-[#4D4D4D] sm:text-[50px] sm:mt-0">
          {sections[2].title}
        </h1>
        <div className="flex items-center mb-10 text-[#4D4D4D] text-[15px] sm:text-[20px] w-[90%] rounded-xl pl-7 sm:pl-0">
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
            {sections[2].posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white 2xl:w-[30rem] 2xl:h-[32rem] w-[18rem] h-[24rem] xl:h-[27rem] xl:w-[24rem] lg:h-[24rem] lg:w-[19rem]  rounded-2xl shadow-xl ${
                    post.id % 2 === 1 ? "border-2 border-[#3DA88C] mt-10" : ""
                  }`}
                >
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                    target="_blank"
                    href={post.link}
                    className="hover:cursor-pointer "
                  >
                    <div className="flex flex-col gap-6 items-center justify-center rounded-xl">
                      <img
                        src={`https://api.namadex.ir/api/v1/section/post/${post.id}/image`}
                        alt={post.title}
                        className="w-[24rem] items-center rounded-2xl 2xl:w-[30rem]"
                      />
                      <img
                        width={90}
                        src={`https://api.namadex.ir/api/v1/section/post/${post.id}/icon`}
                        alt={post.id}
                        className="w-[6rem]"
                      />
                      <p
                        className="font-bold w-[80%] text-[20px] 2xl:text-[25px] text-[#4D4D4D] text-center"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      ></p>
                    </div>
                  </motion.a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  );
}
