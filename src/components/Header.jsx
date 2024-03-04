import SocialMedia from "./SocialMedia";
export default function Header() {
  return (
    <div className="w-full h-[90px] flex flex-row ">
      <SocialMedia></SocialMedia>

      <div className="flex-1 flex items-center justify-center">
        <ul className=" flex flex-row gap-7 text-[16px]">
          <li>
            <a href="#Homepage">ارتباط با ما</a>
          </li>
          <li>
            <a href="">سرویس ها</a>
          </li>
          <li>
            <a href=""></a>محصولات
          </li>
          <li>
            <a href=""></a>درباره ی ما
          </li>
        </ul>
        <a href="">
          <img src="../src/images/Namadex.svg" alt="Namadex" className="pl-5" />
        </a>
      </div>
    </div>
  );
}
