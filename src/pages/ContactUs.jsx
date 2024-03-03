export default function ContactUs() {
  return (
    <div className="h-screen bg-[url(../src/images/ContactUs.jpg)] bg-no-repeat bg-cover bg-contain flex flex-row items-center justify-end pr-[10rem] text-right">
      <div className=" flex flex-col gap-[2.5rem] pt-[5rem]">
        <h1 className="text-[40px] text-[#FFFFFF]">با ما در ارتباط باشید</h1>
        <form className="flex flex-col gap-4  ">
          <input
            type="text"
            className="bg-[#FFFFFF] rounded py-2 px-5 text-right"
            placeholder="ایمیل خود را وارد کنید"
          />
          <input
            type="text"
            className="bg-[#FFFFFF] rounded py-2 px-5 text-right w-[25rem]"
            placeholder="متن پیام خود را بنویسید"
          />
          <button className="bg-[#FFFFFF] text-white py-2 px-5 rounded text-[#3EA98D]">
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
}
