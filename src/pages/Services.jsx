import R2 from "../images/R2.jpg";
import R1 from "../images/R1.jpg";
import R3 from "../images/R3.jpg";
import R4 from "../images/R4.jpg";
import R5 from "../images/R5.jpg";
import R6 from "../images/R6.jpg";

export default function Services() {
  return (
    <div
      id="Services"
      className="ma-h-screen gap-4 mb-10 bg-[url(../src/images/ServicesBI.jpg)] bg-no-repeat sm:bg-cover flex flex-col justify-center items-center sm:gap-7 sm:h-screen sm:mb-0 xl:h-[50rem]"
    >
      <div className="flex flex-col gap-1 mt-7 items-center sm:mt-0 mb-5 ">
        <h1 className="font-bold text-[22px] text-[#4D4D4D] sm:text-[35px]">
          انواع{" "}
          <span className=" font-bold text-[22px] text-[#3DA88C] sm:text-[35px]">
            اقتصاد نمادی
          </span>
        </h1>
        <h2 className="font-bold text-[20px] text-[#4D4D4D] sm:text-[30px]">
          توکن های متکی بر دارایی های واقعی
        </h2>
      </div>

      <div className="flex flex-col gap-4 text-[#363636] text-[17px] text-center sm:flex-row sm:gap-5 sm:text-[22px]">
        <div className="bg-[#FFFFFF] shadow-xl h-[10rem] w-[20rem] rounded-xl flex flex-col gap-2 items-center justify-center sm:h-[12rem] w-[20rem] text-[]">
          <img src={R1} alt="" width={200} />
          <p>
            درخت و مزرعه <br /> (زعفران، مرغ، گوسفند)
          </p>
        </div>
        <div className=" bg-[#FFFFFF] shadow-xl h-[10rem] w-[20rem] rounded-xl flex flex-col gap-3 items-center justify-center sm:h-[12rem] w-[20rem]">
          <img src={R2} alt="" width={150} />
          <p>
            سها‌م، حق تقدم، واحدهای <br /> صندق و اوراق بهادار
          </p>
        </div>
        <div className="bg-[#FFFFFF] gap-0 shadow-xl h-[12rem] w-[20rem] rounded-xl flex flex-col items-center justify-center sm:h-[12rem] w-[20rem]">
          <img src={R3} alt="" width={128} />
          <p className=" sm:pb-2">
            ملک
            <span className="flex flex-wrap">(آپارتمان، زمین، پروژه ساخت)</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-[#363636] text-[17px] text-center sm:flex-row sm:gap-5 sm:text-[22px]">
        <div className=" bg-[#FFFFFF] shadow-xl h-[10rem] w-[20rem] rounded-xl flex flex-col gap-4 items-center justify-center sm:h-[12rem] w-[20rem]">
          <img src={R4} alt="" width={130} />
          <p>
            تامین مالی واحدهای
            <br /> معدنی و صنعتی
          </p>
        </div>
        <div className=" bg-[#FFFFFF] shadow-xl h-[10rem] w-[20rem] rounded-xl flex flex-col gap-1 sm:gap-4 items-center justify-center sm:h-[12rem] w-[20rem]">
          <img src={R5} alt="" width={120} />
          <p>
            فروش کالاهای
            <br />
            آتی
          </p>
        </div>
        <div className=" bg-[#FFFFFF] shadow-xl h-[10rem] w-[20rem] rounded-xl flex flex-col gap-4 items-center justify-center sm:h-[12rem] w-[20rem]">
          <img src={R6} alt="" width={180} />
          <p>
            گردشگری
            <br />
            (واحدهای بوم گردی)
          </p>
        </div>
      </div>
    </div>
  );
}
