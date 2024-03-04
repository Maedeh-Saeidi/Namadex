export default function Projects() {
  return (
    <div className="h-screen  bg-[url(../src/images/ProjectsBI.jpg)] bg-right bg-no-repeat bg-cover bg-contain flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-[50px] text-[#4D4D4D]">پروژه های ما</h1>
      <div className="flex flex-row gap-1 text-[#4D4D4D] text-[20px]">
        <a href="">
          <div className=" m-2 bg-[#ffffff] flex flex-col flex-start items-center h-[22rem] w-[18rem] rounded-xl">
            <img
              src="../src/images/Teehoo.jpg"
              alt=""
              className="h-[190px] w-full rounded-xl"
            />
            <img
              src="../src/images/Teehoo.svg"
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
        <a href="">
          <div className="mt-10 m-2 bg-[#ffffff] flex flex-col flex-start items-center h-[22rem] w-[18rem] rounded-xl">
            <img
              src="../src/images/Jalizan.jpg"
              alt=""
              className="h-[190px] w-full rounded-xl"
            />
            <img
              src="../src/images/Jalizan.svg"
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
        <a href="">
          <div className=" m-2 bg-[#ffffff] flex flex-col flex-start items-center h-[22rem] w-[18rem] rounded-xl">
            <img
              src="../src/images/ecosam.jpg"
              alt=""
              className="h-[190px] w-full rounded-xl"
            />
            <img
              src="../src/images/Acometr.svg"
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
