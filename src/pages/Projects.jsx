// import { motion } from "framer-motion";
import { useContext } from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionsContext } from "../components/SectionsContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const { sections, isLoading } = useContext(SectionsContext);

  if (isLoading) {
    return (
      <div
        id="Projects"
        className="h-['auto'] bg-[url(../src/images/ProjectsBI.jpg)] bg-right bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10 sm:h-screen xl:h-[60rem]"
      >
        <h1 className="font-bold text-[25px] mt-5 text-[#4D4D4D] sm:text-[40px] sm:mt-0">
          {sections[2].title}
        </h1>
        <div className="w-[77%] px-7 sm:px-0">
          <Swiper
            modules={[Pagination, A11y]}
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
            spaceBetween={30}
          >
            {sections[2].posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white rounded-2xl shadow-xl ${
                    post.id % 2 === 1 ? "border-2 border-[#3DA88C] mt-10" : ""
                  }`}
                >
                  <a
                    target="_blank"
                    href={post.link}
                    className="hover:cursor-pointer block"
                  >
                    <div className="flex flex-col items-center gap-6 max-h-[40rem]">
                      <img
                        src={`https://api.namadex.ir/api/v1/section/post/${post.id}/image`}
                        alt={post.title}
                        className="w-[100%] max-h-[16rem] rounded-2xl"
                      />
                      <img
                        width={90}
                        src={`https://api.namadex.ir/api/v1/section/post/${post.id}/icon`}
                        alt={post.id}
                        className="w-24"
                      />
                      <p
                        className="font-bold text-[19px] 2xl:text-[25px] text-[#4D4D4D] text-center pb-8"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      ></p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }

  return null;
}
