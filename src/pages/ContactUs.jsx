export default function ContactUs() {
  return (
    <div className="h-screen bg-no-repeat bg-cover flex flex-col justify-center ">
      <div className="flex flex-row h-[30rem] bg-[url(../src/images/GreenBg.jpg)] ">
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <img
            src="../src/images/EmailP.png"
            alt="Email"
            width={500}
            className="absolute bottom-[8rem]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center pb-[5rem] gap-[2.5rem] text-right">
          <h1 className="text-[40px] text-[#FFFFFF] pr-[5rem]">
            با ما در ارتباط باشید
          </h1>
          <form
            action=""
            className="flex flex-col gap-4 items-center pl-[5rem]"
          >
            <input
              type="text"
              className="w-[25rem] rounded py-2 px-5 text-right"
              placeholder="ایمیل خود را وارد کنید"
            />
            <input
              type="text"
              className="w-[25rem] rounded py-2 px-5 text-right"
              placeholder="متن پیام خود را بنویسید"
            />
            <button className="bg-[#FFFFFF] text-[#3EA98D]] py-2 px-5 rounded text-[#3EA98D] w-[25rem] text-center">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
