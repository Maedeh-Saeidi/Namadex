export default function NewsPage() {
  return (
    <div className="h-screen flex flex-col gap-[10rem]">
      <div className=" flex flex-row justify-center items-center h-40 mt-10">
        <div className="flex-1">
          <img src="../src/images/border.jpg" alt="" className="" />
        </div>
        <h1 className="font-bold text-[50px] text-left flex-1  pr-[15rem]">
          آخرین اخبار
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-row gap-10 justify-center items-center text-right text-[14px]">
          <div className="bg-[#fffcf8] flex flex-col gap-5 h-[22rem] w-[20rem] rounded-xl ">
            <img src="../src/images/new1.jpg" alt="News" />
            <p>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،..
            </p>
            <button className="text-[#3FAC8D] text-left ml-4">
              بیشتر بخوانید
            </button>
          </div>
          <div className="bg-[#fffcf8] flex flex-col gap-5  h-[22rem] w-[20rem] rounded-xl">
            <img src="../src/images/new2.jpg" alt="News" />
            <p>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،..
            </p>
            <button className="text-[#3FAC8D] text-left ml-4">
              بیشتر بخوانید
            </button>
          </div>
          <div className="bg-[#fffcf8] flex flex-col gap-5 h-[22rem] w-[20rem] rounded-xl">
            <img src="../src/images/new3.jpg" alt="News" />
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
