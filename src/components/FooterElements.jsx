import React from "react";
import { motion } from "framer-motion";

export default function FooterElements() {
  return (
    <>
      <motion.a
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className=""
        href="#AboutUs"
      >
        درباره ی ما
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className=""
        href="#Services"
      >
        محصولات
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className=""
        href="#Projects"
      >
        سرویس ها
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className=""
        href="#ContactUs"
      >
        ارتباط با ما
      </motion.a>
    </>
  );
}
