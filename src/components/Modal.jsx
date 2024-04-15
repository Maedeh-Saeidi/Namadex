import React from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="p-4 sm:p-0 fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            dir="rtl"
            className="relative bg-[url(../src/images/ServicesBI.jpg)] bg-no-repeat sm:bg-cover rounded-lg p-8 shadow-xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mt-4 flex justify-center items-center flex-col gap-5">
              <img
                src={`https://api.namadex.ir/api/v1/section/post/${data.id}/image`}
                alt={data.title}
                className=" w-fit  rounded-lg"
              />
              <h1
                className="text-xl font-bold mb-2 text-center"
                dangerouslySetInnerHTML={{ __html: data.title }}
              ></h1>
              <p className="text-gray-700 max-w-2xl text-[13px]">
                {data.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
