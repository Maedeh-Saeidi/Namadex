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
        <a href="link" className="border-neutral-100 border-2 rounded-full p-2">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: color, fontSize: "30px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a href="link" className="border-neutral-100 border-2 rounded-full p-2">
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
        <a href="link" className="border-neutral-100 border-2 rounded-full p-2">
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: color, fontSize: "27px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a href="link" className="border-neutral-100 border-2 rounded-full p-2">
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: color, fontSize: "28px" }}
          />
        </a>
      </div>
      <div className="fa-xl">
        <a href="link" className="border-neutral-100 border-2 rounded-full p-2">
          <FontAwesomeIcon
            icon={faAt}
            style={{ color: color, fontSize: "28px" }}
          />
        </a>
      </div>
    </div>
  );
}
