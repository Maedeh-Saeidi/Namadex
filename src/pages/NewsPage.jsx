import border from "../images/border.jpg";
import new1 from "../images/new1.jpg";
import new2 from "../images/new2.jpg";
import new3 from "../images/new3.jpg";

export default function NewsPage() {
  return (
    <div className="h-max-screen sm:h-screen flex flex-col gap-[2.5rem] sm:gap-[5rem] bg-[#FFFCF8] xl:h-[50rem]">
      <div className=" flex flex-row justify-center items-center sm:h-40 mt-10">
        <div className="flex-1">
          <img src={border} alt="" className="" />
        </div>
        <h1 className="font-bold text-[30px] text-left flex-1 pr-[5rem]  sm:pr-[15rem] sm:text-[50px]">
          آخرین اخبار
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center text-right text-[14px] mb-[4rem] sm:mb-0">
          <div className="bg-[#fffcf8] shadow-xl flex flex-col gap-3 h-[20rem] w-[20rem] rounded-xl sm:h-[22rem] sm:gap-5">
            <img src={new1} alt="News" />
            <p>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،..
            </p>
            <button className="text-[#3FAC8D] text-left ml-4">
              بیشتر بخوانید
            </button>
          </div>
          <div className="bg-[#fffcf8] shadow-xl flex flex-col gap-3 h-[20rem] w-[20rem] rounded-xl sm:h-[22rem] sm:gap-5">
            <img src={new2} alt="News" />
            <p>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،..
            </p>
            <button className="text-[#3FAC8D] text-left ml-4">
              بیشتر بخوانید
            </button>
          </div>
          <div className="bg-[#fffcf8] shadow-xl flex flex-col gap-3 h-[20rem] w-[20rem] rounded-xl sm:h-[22rem] sm:gap-5">
            <img src={new3} alt="News" />
            <p>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،..
            </p>
            <button className="text-[#3FAC8D] text-left ml-4">
              بیشتر بخوانید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
