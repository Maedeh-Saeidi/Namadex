import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTelegram,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia({ color }) {
  return (
    <div className="flex flex-row flex-1 gap-2.5 items-center justify-center">
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className="fa-lg rounded-full"
      >
        <a
          href="https://wa.me/989126846896"
          className="border-neutral-100 border-2 rounded-full p-2 pb-1"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: color, fontSize: "25px" }}
            className="pr-1 pl-1"
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className="fa-lg rounded-full"
      >
        <a
          href="https://t.me/Namadexx"
          className="border-neutral-100 border-2 rounded-full p-2 pb-1"
        >
          <FontAwesomeIcon
            icon={faTelegram}
            style={{ color: color, fontSize: "24px" }}
            className="pl-1 pr-1"
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className="fa-lg rounded-full"
      >
        <a
          href="https://www.instagram.com/namadex.ir?utm_source=qr&igsh=dXFxMXZpaWUxb3Rw"
          className="border-neutral-100 border-2 rounded-full p-2 pb-1"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: color, fontSize: "24px" }}
            className="pl-1 pr-1"
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className="fa-lg rounded-full"
      >
        <a
          href="https://www.facebook.com/profile.php?id=61556810630019&mibextid=ZbWKwL"
          className="border-neutral-100 border-2 rounded-full p-2 pb-1"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: color, fontSize: "24px" }}
            className="pr-1.5 pl-1"
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className="fa-lg rounded-full"
      >
        <a
          href="https://youtube.com/@Namadex?si=s2dZ4CeCY97NjcJj"
          className="border-neutral-100 border-2 rounded-full p-2 pb-1"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: color, fontSize: "24px" }}
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className="fa-lg rounded-full"
      >
        <a
          href="mailto:Namadex.ir@gmail.com"
          className="border-neutral-100 border-2 rounded-full p-2 pb-1"
        >
          <FontAwesomeIcon
            icon={faAt}
            style={{ color: color, fontSize: "26px" }}
          />
        </a>
      </motion.div>
    </div>
  );
}
