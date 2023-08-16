import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const handleClick = (link) => {
  window.open(link);
};

const SocialMedia = () => (
  <div className="app__social">
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

export default SocialMedia;
