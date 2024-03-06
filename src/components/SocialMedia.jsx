import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTelegram,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia({ color }) {
  return (
    <div className="flex flex-row flex-1 gap-3 items-center justify-center">
      <div className="fa-xl">
        <a
          href="https://wa.me/989126846896"
          className="border-neutral-100 border-2 rounded-full p-2"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: color, fontSize: "30px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a
          href="https://web.telegram.org/k/#@Namadexx"
          className="border-neutral-100 border-2 rounded-full p-2"
        >
          <FontAwesomeIcon
            icon={faTelegram}
            style={{ color: color, fontSize: "27px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a href="link" className="border-neutral-100 border-2 rounded-full p-2">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: color, fontSize: "28px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a
          href="https://www.facebook.com/profile.php?id=61556810630019&mibextid=ZbWKwL"
          className="border-neutral-100 border-2 rounded-full p-2"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: color, fontSize: "27px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a
          href="https://youtube.com/@Namadex?si=s2dZ4CeCY97NjcJj"
          className="border-neutral-100 border-2 rounded-full p-2"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: color, fontSize: "28px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a
          href="Namadex.ir@gmail.com"
          className="border-neutral-100 border-2 rounded-full p-2"
        >
          <FontAwesomeIcon
            icon={faAt}
            style={{ color: color, fontSize: "28px" }}
          />
        </a>
      </div>
    </div>
  );
}
