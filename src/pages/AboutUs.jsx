export default function AboutUs() {
  return (
    <div className="h-screen bg-[url(../src/images/AboutUsBI.jpg)] bg-cover bg-contain bg-no-repeat bg-left flex flex-row">
      <div className="flex-1 flex flex-col gap-10 justify-center items-start">
        <div className="flex flex-col gap-10 items-end">
          <h1 className="font-bold text-[40px] text-[#4D4D4D]">
            آشنایی با مفهوم توکنایز
          </h1>
          <p className="text-[24px] text-[#4D4D4D] max-w-[90%] text-right">
            توکنایزیشن یا نمادسازی فرآیند جایگزینی داده های حساس با نمادهای
            شناسایی منحصر به فرد است که تمام اطلاعات ضروری در مورد داده ها را
            بدون به خطر انداختن امنیت آن حفظ می کند. توکن‌سازی که به دنبال به
            حداقل رساندن میزان داده‌های حساسی است که یک کسب ‌وکار
          </p>
        </div>
        <a href="" className="text-[20px] text-[#3FAC8D] ml-10">
          ادامه ی مطلب
        </a>
      </div>
      <div className="flex-1 relative flex flex-col justify-center">
        <img
          className="absolute right-0"
          src="../src/images/AboutUsImg.jpg"
          alt="AboutUs Image"
          width={500}
        />
      </div>
    </div>
  );
}
