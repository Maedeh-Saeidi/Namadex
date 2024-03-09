import Laptop from "../images/Laptop.png";
export default function Slogan() {
  return (
    <div
      dir="rtl"
      className="h-[40rem] bg-[#20292D] sm:bg-[#fefbfb] sm:bg-[url(../src/images/Slogan.jpg)] bg-cover bg-no-repeat sm:h-60 flex flex-col items-center justify-center sm:flex sm:bg-[100%,100%]"
    >
      <div className="flex-1 flex justify-center items-center sm:hidden">
        <img src={Laptop} alt="" className="pt-[5rem]" />
      </div>
      <h1 className="flex items-center text-[#FFFFFF] pr-12 pl-13 text-right text-[1.5rem] sm:pl-[10em] flex-1 sm:w-[50rem] sm:text-[23px] sm:pr-0">
        نمادسازی (توکنایز کردن) محصولات شما حرفه ی ماست
      </h1>
    </div>
  );
}
