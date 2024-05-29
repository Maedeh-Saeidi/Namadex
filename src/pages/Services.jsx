import Modal from "../components/Modal";
import { SectionsContext } from "../components/SectionsContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import eye from "../images/eye.svg";

export default function Services() {
  const { sections, isLoading } = useContext(SectionsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (postId) => {
    setIsModalOpen(true);
    const post = sections[1].posts.find((post) => post.id === postId);
    setModalData({
      title: post.title,
      description: post.description,
      id: post.id,
    });
  };
  return (
    isLoading && (
      <div
        id="Services"
        className={`
  h-full gap-4 mb-10 bg-[url(../src/images/ServicesBI.jpg)] bg-no-repeat sm:bg-cover 
  flex flex-col justify-center items-center sm:gap-7 sm:h-screen sm:mb-0 xl:h-[50rem]
  ${isModalOpen ? "blur-5" : ""} 
`}
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
              <motion.div
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 5px rgb(255,255,255)",
                }}
                onClick={() => openModal(post.id)}
                key={index}
                className={`w-[20rem] hover:cursor-pointer h-[13rem] gap-3 flex flex-col items-center justify-center text-center sm:gap-3 md:gap-5 bg-white shadow-xl rounded-xl sm:w-[20rem] sm:h-[15rem] 2xl:w-[25rem] 2xl:h-[18rem] relative
                `}
              >
                <img
                  src={eye}
                  alt="zoom"
                  className="absolute top-2 right-2 w-[10%]"
                />
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
              </motion.div>
            ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
        />
      </div>
    )
  );
}
