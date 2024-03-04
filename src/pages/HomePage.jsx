export default function HomePage() {
  return (
    <div className="bg-[#fffaf4] h-screen w-full bg-[url(../src/images/HomePageBI.jpg)] bg-contain bg-no-repeat bg-cover bg-left flex flex-col items-end justify-center align-center">
      <div className="flex items-end flex-col gap-[8rem] mr-[8rem]">
        <div className="flex flex-col items-end">
          <h1 className="text-[64px] font-bold text-[#3DA88C]">نمادِکس</h1>
          <h2 className="text-[40px] text-[#4D4D4D]">
            با ما به دنیای جدید کسب و کار بپیوندید
          </h2>
          <h3 className="text-[24px] text-[#6A7875]">
            قابلیت عرضه املاک، محصولات کشاورزی و دیگر تولیدات شما
          </h3>
          <h3 className="text-[24px] text-[#6A7875]"> در شرکت ما</h3>
        </div>
        <button className="bg-[#3DA88C] text-white py-2.5 px-5 rounded ">
          !ثبت نام کنید
        </button>
      </div>
    </div>
  );
}
