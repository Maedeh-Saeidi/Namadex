import { SectionsContext } from "../components/SectionsContext";
import { useContext } from "react";

export default function Services() {
  const { sections, isLoading } = useContext(SectionsContext);

  return (
    isLoading && (
      <div
        id="Services"
        className="h-full gap-4 mb-10 bg-[url(../src/images/ServicesBI.jpg)] bg-no-repeat sm:bg-cover flex flex-col justify-center items-center sm:gap-7 sm:h-screen sm:mb-0 xl:h-[50rem]"
      >
        <div className="pt-10 sm:pt-3 flex flex-col gap-1 items-center justify-center sm:mt-0 mb-5">
          <h1
            className="w-[100%] text-center text-[20px] text-[#4D4D4D] font-bold sm:text-[28px] sm:w-[100%] sm:pt-10"
            dangerouslySetInnerHTML={{ __html: sections[1].title }}
          ></h1>
        </div>
        <div className="flex-1 sm:w-[80%] 2xl:w-[80%] gap-3 flex flex-wrap justify-center">
          {isLoading &&
            sections[1].posts.map((post, index) => (
              <div
                key={index}
                className="w-[20rem] h-[13rem] gap-3 flex flex-col items-center justify-center text-center sm:gap-3 md:gap-5 bg-white shadow-xl rounded-xl sm:w-[20rem] sm:h-[15rem] 2xl:w-[25rem] 2xl:h-[18rem]"
              >
                <img
                  width={180}
                  src={`https://api.namadex.ir/api/v1/section/post/${post.id}/image`}
                  alt={post.title}
                  className="w-[150px]"
                />
                <p
                  className="w-[15rem] text-[#363636] 2xl:text-[22px] text-center sm:text-[20px] sm:w-[18rem]"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                ></p>
              </div>
            ))}
        </div>
      </div>
    )
  );
}
