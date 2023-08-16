import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import "./Footer.scss";

const handleClick = (link) => {
  window.open(link);
};

const Footer = () => (
  <div className="app__flex app__footer">
    <div onClick={() => handleClick("https://github.com/ZakiMouzaoui")}>
      <BsGithub />
    </div>
    <div
      onClick={() =>
        handleClick("https://www.facebook.com/profile.php?id=100063985891044")
      }
    >
      <FaFacebook />
    </div>
    <div
      onClick={() =>
        handleClick("https://www.linkedin.com/in/zaki-mouzaoui-470b9519b/")
      }
    >
      <BsLinkedin />
    </div>
  </div>
);

export default Footer;
