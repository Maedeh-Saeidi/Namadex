import C1 from "../images/C1.jpg";
import C2 from "../images/C2.jpg";
import C3 from "../images/C3.jpg";
import C4 from "../images/C4.jpg";

export default function Companies() {
  return (
    <div
      dir="rtl"
      className="w-[20rem] h-[14rem] flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-[7rem] sm:h-60 sm:w-full"
    >
      <a href="https://teehoo.me/" className="pl-[3rem] sm:pl-0">
        <img src={C1} alt="Teehoo" width={100} />
      </a>
      <a href="https://jalizan.com/" className="pl-[3rem] sm:pl-0">
        <img src={C2} alt="" width={100} />
      </a>
      <a href="" className="pl-[3rem] sm:pl-0">
        <img src={C3} alt="" width={100} />
      </a>
      <a href="https://acometr.com/app/projects" className="pl-[3rem] sm:pl-0">
        <img src={C4} alt="Acometr" width={100} />
      </a>
    </div>
  );
}
