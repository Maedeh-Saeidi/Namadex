import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

export default function ProcessModal({ openModal, setOpenModal, data }) {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openModal]);
  return (
    <AnimatePresence>
      {openModal && (
        <motion.div className="p-4 sm:p-0 fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
          <motion.div className="relative bg-[url(../src/images/bg-process.jpg)] bg-no-repeat sm:bg-cover rounded-lg p-8 shadow-xl">
            <button
              onClick={() => setOpenModal(false)}
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
            <div
              dir="rtl"
              className="mt-4 flex justify-center items-center flex-col gap-5"
            >
              <h1 className="sm:w-[70%] text-xl font-bold mb-2 text-center">
                {" "}
                {data.title}
              </h1>
              <p className="sm:w-[80%] text-gray-700 max-w-2xl text-[13px]">
                {" "}
                {data.desc}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
