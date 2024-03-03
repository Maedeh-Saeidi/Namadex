export default function NewsPage() {
  return (
    <div className="h-screen flex flex-col gap-[10rem]">
      <div className=" flex flex-row justify-center items-center h-40">
        <div className="flex-1">
          <img src="../src/images/border.jpg" alt="" className="" />
        </div>
        <h1 className="font-bold text-[50px] text-left flex-1  pr-[15rem]">
          آخرین اخبار
        </h1>
      </div>
      <div class="flex justify-center items-center">
        <div className="flex flex-row gap-10 justify-center items-center">
          <div class=" m-2 bg-orange-200 flex flex-col  items-center h-[22rem] w-[18rem] rounded-xl">
            <img></img>
            <p></p>
            <button></button>
          </div>
          <div class=" m-2 bg-orange-200 flex flex-col  items-center h-[22rem] w-[18rem] rounded-xl">
            <img></img>
            <p></p>
            <button></button>
          </div>
          <div class=" m-2 bg-orange-200 flex flex-col  items-center h-[22rem] w-[18rem] rounded-xl">
            <img></img>
            <p></p>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
