import Teehoo from "../images/Teehoo.jpg";
import TeehooSvg from "../images/Teehoo.svg";
import Jalizan from "../images/Jalizan.jpg";
import JalizanSvg from "../images/Jalizan.svg";
import ecosam from "../images/ecosam.jpg";
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
        className="h-max-screen bg-[url(../src/images/ProjectsBI.jpg)] bg-right bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10 sm:h-screen xl:h-[60rem]"
      >
        <h1 className="flex font-bold text-[25px] mt-5 text-[#4D4D4D] sm:text-[50px] sm:mt-0">
          {sections[2].title}
        </h1>
        <div className=" mb-10 flex text-[#4D4D4D] text-[15px] sm:text-[20px] w-[80%] rounded-xl">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={window.innerWidth < 640 ? 1 : 3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {sections[2].posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white 2xl:w-[30rem] 2xl:h-[31rem] w-[18rem] h-[24rem] sm:h-[25rem] sm:w-[22rem] rounded-2xl ${
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
                    <div className="flex flex-col gap-8 items-center justify-center rounded-xl">
                      <img
                        src={`https://api.namadex.ir/api/v1/section/post/${post.id}/image`}
                        width={250}
                        alt={post.title}
                        className="w-[22rem] items-center rounded-2xl 2xl:w-[30rem]"
                      />
                      <img
                        width={100}
                        src={`https://api.namadex.ir/api/v1/section/post/${post.id}/icon`}
                        alt={post.id}
                      />
                      <p className="w-[80%] text-[20px] 2xl:text-[25px] font-bold text-[#4D4D4D] text-center">
                        {post.title}
                      </p>
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
