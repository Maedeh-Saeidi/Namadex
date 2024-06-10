import React, { useContext, useEffect, useState } from "react";
import border from "../images/border.jpg";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import imageOne from "../images/image1.png";
import imageTwo from "../images/image2.png";
import imageThree from "../images/image3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import ProcessModal from "../components/ProcessModal";

export default function Process() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const fetchPost = async (postId) => {
    try {
      const response = await axios.get(
        `https://api.namadex.ir/api/v1/section/post/${postId}`
      );
      setData({
        title: response.data.data.title,
        desc: response.data.data.description,
      });
      console.log("data:", data.title, data.desc);
      setOpenModal(true);
    } catch (error) {
      console.error("Getting post details failed", error);
    }
  };
  return (
    <div className="h-max-screen bg-[url(../src/images/bg-process.jpg)] bg-no-repeat bg-center flex flex-col">
      <div className="h-[6rem]">
        <h1 className="font-bold text-[28px] text-center pt-10 sm:pt-10 sm:text-[45px]">
          فرآیند کاری نمادکس
        </h1>
      </div>
      <div className="h-[20rem] sm:h-[23rem] flex flex-col  sm:pt-10">
        <div className="flex flex-col sm:flex-col gap-10 sm:gap-0">
          <div className="flex flex-row justify-center items-center sm:h-40 mt-10">
            <div className="flex-1">
              <img src={border} />
            </div>
            <h1 className="flex-1 font-bold text-[20px] text-[#3DA88C] text-left pr-[4rem] sm:pr-[15rem] sm:text-[30px] 2xl:text-[45px]">
              فرآیند آماده سازی
            </h1>
          </div>
          <div
            dir="rtl"
            className="flex flex-col items-center gap-3 text-[15px] sm:flex-row sm:justify-center sm:gap-[2rem] 2xl:gap-[10rem] sm:text-[20px] pt-5"
          >
            <div
              onClick={() => {
                fetchPost(252);
              }}
              className="flex flex-row gap-2 cursor-pointer"
            >
              <img className="" src={one} alt="One" width={40} />
              <h1 className="flex-1 pt-3">بررسی و تحلیل اقتصادی دارایی ها</h1>
            </div>
            <div
              onClick={() => {
                fetchPost(253);
              }}
              className="flex flex-row gap-2 pl-2 cursor-pointer"
            >
              <img className="" src={two} alt="Two" width={40} />
              <h1 className="flex-1 pt-3">بررسی و تحلیل حقوقی دارایی ها</h1>
            </div>
            <div
              onClick={() => {
                fetchPost(254);
              }}
              className="flex flex-row gap-2"
            >
              <img className="" src={three} alt="Three" width={40} />
              <h1 className="flex-1 pt-3">بررسی و تحلیل تخصصی دارایی ها</h1>
            </div>
          </div>
        </div>
      </div>
      <div dir="rtl" className="h-[25rem] sm:h-[40rem] flex flex-col gap-10 ">
        <div className="flex flex-row justify-center items-center sm:h-40 mt-8">
          <div className="flex-1">
            <img src={border} alt="" className="" />
          </div>
          <h1 className="flex-1 font-bold text-[23px] text-[#3DA88C] text-right sm:text-[40px]">
            فرآیند نشر
          </h1>
        </div>
        <div className="flex items-center">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            speed={500}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            effect={"fade"}
          >
            <SwiperSlide className="p-10">
              <div
                onClick={() => {
                  fetchPost(255);
                }}
                className="flex flex-col items-center gap-10"
              >
                <h1 className="w-[12rem] text-center">
                  ورود به مرحله توکن سازی دارایی ها بعد از گذر از فرآیند آماده
                  سازی{" "}
                </h1>
                <img
                  animate={{
                    scale: [1, 1, 1, 1, 1],
                    rotate: [0, 0, 360],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatDelay: 1,
                  }}
                  src={imageTwo}
                  alt="First Image"
                  width={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-10">
              <div
                onClick={() => {
                  fetchPost(256);
                }}
                className="flex flex-col items-center gap-10"
              >
                <img src={imageOne} alt="First Image" width={200} />
                <h1 className="w-[15rem] text-center">
                  عرضه توکن طبق بلاکچین شخصی سازی شده نمادکس توسط بنیاد سور
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                fetchPost(257);
              }}
              className="p-10"
            >
              <div className="flex flex-col items-center gap-10">
                <h1 className="w-[13rem] text-center">
                  روند مراقبت از توکنها بصورت دائمی در سرورها و همچنین ارائه
                  گزارشهای شفاف کاری
                </h1>
                <img src={imageThree} alt="First Image" width={200} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <ProcessModal
        data={data}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
