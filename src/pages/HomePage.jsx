import Header from "../components/Header";
import theMan from "../images/Man.png";

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col h-screen w-full md:flex-row justify-center items-center sm:bg-[url(../src/images/HomePageBI.jpg)] bg-no-repeat bg-cover bg-left bg-[#fffaf4] xl:h-[60rem]">
        <div className="flex-1 sm:hidden">
          <img src={theMan} alt="The Man" />
        </div>
        <div className="flex-1 flex flex-col items-end text-right relative sm:flex gap-[2rem] h-[30rem] ">
          <div className="flex flex-col items-end gap-2 m-10 md:mr-[4rem]">
            <h1 className="text-[55px] font-bold text-[#3DA88C] md:text-[64px]">
              نمادِکس
            </h1>
            <h2 className="text-[25px] text-[#4D4D4D] md:text-[40px]">
              با ما به دنیای جدید کسب و کار بپیوندید
            </h2>
            <h3 className="text-[24px] text-[#6A7875]">
              قابلیت عرضه املاک، محصولات کشاورزی و دیگر تولیدات شما
            </h3>
            <h3 className="text-[24px] text-[#6A7875]"> در شرکت ما</h3>
          </div>
          <button className="bg-[#3DA88C] text-white py-2.5 px-5 rounded absolute right-10 bottom-5 sm:bottom-10 sm:right-[4rem]">
            !ثبت نام کنید
          </button>
        </div>
      </div>
    </div>
  );
}
