import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="h-80 bg-[url(../src/images/Footer.jpg)] flex flex-row text-[#FFFFFF]">
      <div className=" flex-1 flex justify-center items-center">
        <div className="flex flex-col gap-1 mt-[5rem] text-[20px]">
          <a href="tel:982188600820+">982188600820+</a>
          <a href="mailto:Namadex.ir@gmail.com">Namadex.ir@gmail.com</a>
        </div>
      </div>
      <div className=" flex-1 flex flex-col gap-10 items-center justify-center">
        <a href="" className="flex flex-col items-center gap-2">
          <img src="../src/images/Namadex.svg" alt="Namadex" />
          <h1 className="font-bold text-[24px]">Namadex</h1>
        </a>
        <div>
          <SocialMedia color={"#FFFFFF"}></SocialMedia>
        </div>
      </div>
      <div className="bg-blue-200 flex-1">Bye</div>
    </div>
  );
}
