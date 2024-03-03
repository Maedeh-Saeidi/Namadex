export default function Services() {
  return (
    <div className=" bg-[url(../src/images/ServicesBI.jpg)] bg-no-repeat bg-cover bg-contain flex flex-col gap-7 justify-center items-center">
      <div className="flex flex-col gap-1 items-center mb-5 ">
        <h1 className="font-bold text-[35px] text-[#4D4D4D]">
          انواع{" "}
          <span className=" font-bold text-[#3DA88C] text-[35px]">
            اقتصاد نمادی
          </span>
        </h1>
        <h2 className="font-bold text-[35px] text-[#4D4D4D]">
          توکن های متکی بر دارایی های واقعی
        </h2>
      </div>

      <div className="flex flex-row gap-5 text-[#363636] text-[20px] text-center">
        <div class="bg-[#FFFFFF] h-[12rem] w-[20rem] rounded-xl flex flex-col gap-2 items-center justify-center">
          <img src="../src/images/R1.jpg" alt="" width={200} />
          <p>
            درخت و مزرعه <br /> (زعفران، مرغ، گوسفند)
          </p>
        </div>
        <div class=" bg-[#FFFFFF] h-[12rem] w-[20rem] rounded-xl flex flex-col gap-3 items-center justify-center">
          <img src="../src/images/R2.jpg" alt="" width={150} />
          <p>
            سها‌م، حق تقدم، واحدهای <br /> صندق و اوراق بهادار
          </p>
        </div>
        <div class=" bg-[#FFFFFF] h-[12rem] w-[20rem] rounded-xl flex flex-col items-center justify-center">
          <img src="../src/images/R3.jpg" alt="" width={140} />
          <p>
            ملک
            <br />
            (آپارتمان، زمین، پروژه ساخت)
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-5 text-[#363636] text-[20px] text-center">
        <div class=" bg-[#FFFFFF] h-[12rem] w-[20rem] rounded-xl flex flex-col gap-4 items-center justify-center">
          <img src="../src/images/R4.jpg" alt="" width={140} />
          <p>
            تامین مالی واحدهای
            <br /> معدنی و صنعتی
          </p>
        </div>
        <div class=" bg-[#FFFFFF] h-[12rem] w-[20rem] rounded-xl flex flex-col gap-4 items-center justify-center">
          <img src="../src/images/R5.jpg" alt="" width={130} />
          <p>
            فروش کالاهای
            <br />
            آتی
          </p>
        </div>
        <div class=" bg-[#FFFFFF] h-[12rem] w-[20rem] rounded-xl flex flex-col gap-4 items-center justify-center">
          <img src="../src/images/R6.jpg" alt="" width={180} />
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
