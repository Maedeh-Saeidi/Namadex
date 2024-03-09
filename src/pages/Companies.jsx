import C1 from "../images/C1.jpg";
import C2 from "../images/C2.jpg";
import C3 from "../images/C3.jpg";
import C4 from "../images/C4.jpg";
import { motion } from "framer-motion";

export default function Companies() {
  return (
    <div
      dir="rtl"
      className="w-[20rem] h-[14rem] flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-[7rem] sm:h-60 sm:w-full"
    >
      <motion.a
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        href="https://teehoo.me/"
        className="pl-[3rem] sm:pl-0"
      >
        <img src={C1} alt="Teehoo" width={100} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        href="https://jalizan.com/"
        className="pl-[3rem] sm:pl-0"
      >
        <img src={C2} alt="" width={100} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        href="https://sepasinvest.com/"
        className="pl-[3rem] sm:pl-0"
      >
        <img src={C3} alt="" width={100} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        href="https://acometr.com/app/projects"
        className="pl-[3rem] sm:pl-0"
      >
        <img src={C4} alt="Acometr" width={100} />
      </motion.a>
    </div>
  );
}
