import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTelegram,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="w-full h-[90px] flex flex-row ">
      <div className=" flex flex-row flex-1 gap-3 flex items-center justify-center ">
        <div className="fa-xl">
          <a
            href="link"
            className="border-neutral-100 border-2 rounded-full p-2"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ color: "#6c6c6c", fontSize: "30px" }}
            />
          </a>
        </div>
        <div className="fa-xl">
          <a
            href="link"
            className="border-neutral-100 border-2 rounded-full p-2 "
          >
            <FontAwesomeIcon
              icon={faTelegram}
              style={{ color: "#6c6c6c", fontSize: "27px" }}
            />
          </a>
        </div>
        <div className="fa-xl">
          <a
            href="link"
            className="border-neutral-100 border-2 rounded-full p-2 "
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#6c6c6c", fontSize: "28px" }}
            />
          </a>
        </div>
        <div className="fa-xl">
          <a
            href="link"
            className="border-neutral-100 border-2 rounded-full p-2 "
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#6c6c6c", fontSize: "27px" }}
            />
          </a>
        </div>
        <div className="fa-xl">
          <a
            href="link"
            className="border-neutral-100 border-2 rounded-full p-2 "
          >
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "#6c6c6c", fontSize: "28px" }}
            />
          </a>
        </div>
        <div className="fa-xl">
          <a
            href="link"
            className="border-neutral-100 border-2 rounded-full p-2 "
          >
            <FontAwesomeIcon
              icon={faAt}
              style={{ color: "#6c6c6c", fontSize: "28px" }}
            />
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ul className=" flex flex-row gap-7 text-[16px]">
          <li>
            <a href="#Homepage">ارتباط با ما</a>
          </li>
          <li>
            <a href="">سرویس ها</a>
          </li>
          <li>
            <a href=""></a>محصولات
          </li>
          <li>
            <a href=""></a>درباره ی ما
          </li>
        </ul>
        <a href="">
          <img src="../src/images/Namadex.svg" alt="Namadex" className="pl-5" />
        </a>
      </div>
    </div>
  );
}
