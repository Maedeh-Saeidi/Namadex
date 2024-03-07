import Teehoo from "../images/Teehoo.jpg";
import TeehooSvg from "../images/Teehoo.svg";
import Jalizan from "../images/Jalizan.jpg";
import JalizanSvg from "../images/Jalizan.svg";
import ecosam from "../images/ecosam.jpg";
import AcometrSvg from "../images/Acometr.svg";

export default function Projects() {
  return (
    <div
      id="Projects"
      className=" h-max-screen bg-[url(../src/images/ProjectsBI.jpg)] bg-right bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10 sm:h-screen xl:h-[60rem]"
    >
      <h1 className="font-bold text-[25px] mt-5 text-[#4D4D4D] sm:text-[50px] sm:mt-0">
        پروژه های ما
      </h1>
      <div className=" mb-10 flex flex-col gap-1 text-[#4D4D4D] text-[15px] sm:text-[20px] sm:flex-row">
        <a href="https://teehoo.me/" target="_blank">
          <div className=" m-2 bg-[#ffffff] flex flex-col flex-start items-center h-[20rem] w-[18rem] rounded-xl sm:h-[22rem]">
            <img src={Teehoo} alt="" className="h-[190px] w-full rounded-xl" />
            <img
              src={TeehooSvg}
              alt="Teehoo Company"
              width={50}
              className="mt-4"
            />
            <p className="text-center">
              شرکت تیهو <br />
              Teehoo.com
            </p>
          </div>
        </a>
        <a href="https://jalizan.com/" className="sm:pt-10" target="_blank">
          <div className="border-2 border-[#3DA88C] m-2 bg-[#ffffff] flex flex-col flex-start items-center h-[20rem] w-[18rem] rounded-xl sm:h-[22rem]">
            <img src={Jalizan} alt="" className="h-[190px] w-full rounded-xl" />
            <img
              src={JalizanSvg}
              alt="Jalizan Company"
              width={50}
              className="mt-4"
            />
            <p className="text-center">
              شرکت جالیزان
              <br />
              Jalizan.com
            </p>
          </div>
        </a>
        <a href="https://acometr.com/app/projects" target="_blank">
          <div className=" m-2 bg-[#ffffff] flex flex-col flex-start items-center h-[20rem] w-[18rem] rounded-xl sm:h-[22rem]">
            <img src={ecosam} alt="" className="h-[190px] w-full rounded-xl" />
            <img
              src={AcometrSvg}
              alt="Acometr Company"
              width={50}
              className="mt-4"
            />
            <p className="text-center">
              شرکت اکوسام
              <br />
              Acometr.com
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
