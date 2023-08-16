import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";
import NavigationDots from "../../components/NavigationDots";
import SocialMedia from "../../components/SocialMedia";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__flex" id="home">
    <SocialMedia></SocialMedia>
    <div className="app__header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hello, I am</p>
              <h1 className="head-text">Mouzaoui Zakaria</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p>
              I am a 23 years old Computer Science graduated student & I am
              passionate about everything related to software engineer
            </p>
            {/* <p>Computer Science graduated student</p>
          <p>
            & I am passionate about everything realated to software engineer
          </p> */}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={images.profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.react, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
    <NavigationDots item={"home"}></NavigationDots>
  </div>
);

export default Header;
