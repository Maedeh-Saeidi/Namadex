import tokenize from "../images/tokenize.jpeg";
export default function AboutUs() {
  return (
    <div className="bg-[url(../src/images/AboutUsBI.jpg)] bg-cover bg-contain bg-no-repeat flex flex-col-reverse h-screen sm:flex-row bg-left xl:h-[50rem]">
      <div className="flex-1 flex flex-col gap-10 justify-center items-start">
        <div className="flex flex-col gap-10 items-end">
          <h1 className="font-bold text-[30px] text-[#4D4D4D] mr-4  sm:text-[40px]">
            آشنایی با مفهوم توکنایز
          </h1>
          <p className="text-[18px] text-[#4D4D4D] max-w-[90%] text-right mr-4 sm:text-[24px]">
            توکنیزیشن یا نمادسازی فرآیند جایگزینی داده های حساس با نمادهای
            شناسایی منحصر به فرد است که تمام اطلاعات ضروری در مورد داده ها را
            بدون به خطر انداختن امنیت آن حفظ می کند. توکن‌سازی که به دنبال به
            حداقل رساندن میزان داده‌های حساسی است که یک کسب ‌وکار
          </p>
        </div>
        <a href="" className="text-[15px] text-[#3FAC8D] sm:text-[20px] ml-10">
          ادامه ی مطلب
        </a>
      </div>
      <div className="flex-1 relative flex flex-col justify-center">
        <img
          className="absolute mb-[1rem]  sm:right-20 mt-0"
          src={tokenize}
          alt="AboutUs Image"
          width={500}
        />
      </div>
    </div>
  );
}
