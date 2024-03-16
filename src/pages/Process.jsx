import React from "react";
import border from "../images/border.jpg";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import imageOne from "../images/image1.png";

export default function Process() {
  return (
    <div className="h-max-screen bg-[#FFFCF8] flex flex-col">
      <div className="h-[6rem]">
        <h1 className="font-bold text-[28px] text-center pt-10 sm:pt-10 sm:text-[45px]">
          فرآیند کاری نمادکس
        </h1>
      </div>
      <div className="h-[20rem] sm:h-[23rem] flex flex-col">
        <div className="flex flex-col sm:flex-col gap-10 sm:gap-0">
          <div className="flex flex-row justify-center items-center sm:h-40 mt-10">
            <div className="flex-1">
              <img src={border} alt="" className="" />
            </div>
            <h1 className="flex-1 font-bold text-[20px] text-[#3DA88C] text-left pr-[4rem] sm:pr-[15rem] sm:text-[30px] 2xl:text-[45px]">
              فرآیند آماده سازی
            </h1>
          </div>
          <div
            dir="rtl"
            className="flex flex-col items-center gap-3 text-[15px] sm:flex-row sm:justify-center sm:gap-[2rem] 2xl:gap-[10rem] sm:text-[20px]"
          >
            <div className="flex flex-row gap-2">
              <img className="" src={one} alt="One" width={40} />
              <h1 className="flex-1 pt-3">
                بررسی و تحلیل اقتصادی دارایی ها
              </h1>{" "}
            </div>
            <div className="flex flex-row gap-2 pl-2">
              <img className="" src={two} alt="Two" width={40} />
              <h1 className="flex-1 pt-3">بررسی و تحلیل حقوقی دارایی ها</h1>
            </div>
            <div className="flex flex-row gap-2">
              <img className="" src={three} alt="Three" width={40} />
              <h1 className="flex-1 pt-3">بررسی و تحلیل تخصصی دارایی ها</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        dir="rtl"
        className="bg-blue-100 h-[25rem] sm:h-[40rem] flex flex-col gap-10 "
      >
        <div className="flex flex-row justify-center items-center sm:h-40 mt-8">
          <div className="flex-1">
            <img src={border} alt="" className="" />
          </div>
          <h1 className="flex-1 font-bold text-[20px] text-[#3DA88C] text-right sm:text-[50px]">
            فرآیند نشر
          </h1>
        </div>
        <div className="flex flex-col items-center gap-10">
          <img src={imageOne} alt="First Image" width={200} />
          <h1 className="w-[15rem] text-center">
            عرضه توکن طبق بلاکچین شخصی سازی شده نمادکس توسط بنیاد سور
          </h1>
        </div>
      </div>
    </div>
  );
}
