import TeehooSvg from "../images/Teehoo.svg";
import JalizanSvg from "../images/Jalizan.svg";
import AcometrSvg from "../images/Acometr.svg";
import { motion } from "framer-motion";
import { SectionsContext } from "../components/SectionsContext";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const { sections, isLoading } = useContext(SectionsContext);
  console.log(sections);
  return (
    isLoading && (
      <div
        id="Projects"
        className="h-[40rem] bg-[url(../src/images/ProjectsBI.jpg)] bg-right bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10 sm:h-screen xl:h-[60rem]"
      >
        <h1 className="flex font-bold text-[25px] mt-5 text-[#4D4D4D] sm:text-[50px] sm:mt-0">
          {sections[2].title}
        </h1>
        <div className="flex items-center mb-10 text-[#4D4D4D] text-[15px] sm:text-[20px] w-[80%] rounded-xl ">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 3, // Show 3 slides when screen width is 640px or more
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {sections[2].posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white 2xl:w-[30rem] 2xl:h-[32rem] w-[18rem] h-[24rem] sm:h-[25rem] sm:w-[22rem] rounded-2xl shadow-xl ${
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
                  >
                    <div className="flex flex-col gap-6 items-center justify-center rounded-xl ">
                      <img
                        src={`https://api.namadex.ir/api/v1/section/post/${post.id}/image`}
                        alt={post.title}
                        className="w-[22rem] items-center rounded-2xl 2xl:w-[30rem]"
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
