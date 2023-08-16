import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";
import NavigationDots from "../../components/NavigationDots";
import SocialMedia from "../../components/SocialMedia";

function About() {
  const abouts = [
    {
      img: images.about01,
      title: "Web development",
      description:
        "Transforming ideas into interactive and visually appealing websites using different technologies (HTML, CSS, JavaScript, React js...) and back-end frameworks (e.g., Express.js, Django, Laravel)",
    },

    {
      img: images.about03,
      title: "Mobile development",
      description:
        "Crafting mobile apps that engage and delight users using platforms like Flutter, ensuring seamless performance and a consistent user experience across devices.",
    },
    // {
    //   img: images.about02,
    //   title: "Database managment",
    //   description: "Back development description",
    // },
    {
      img: images.about04,
      title: "Machine learning",
      description:
        "Leveraging data-driven insights to develop intelligent algorithms and models. Experienced in applying machine learning techniques (e.g., regression, classification, clustering) to extract meaningful patterns and predictions, enabling data-informed decision-making and innovative solutions.",
    },
  ];
  return (
    <div className="app__flex" id="about">
      <SocialMedia></SocialMedia>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
          transition: { duration: 0.5 },
        }}
        className="app__about"
      >
        <div>
          <div className="about-head">
            <h2 className="head-text" style={{ marginTop: 20 }}>
              I know that <span>good apps</span>
              <br></br> means <span>good business</span>
            </h2>
          </div>
          <div className="app__items">
            {abouts.map((about, index) => {
              return (
                <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="app__item"
                  key={index}
                >
                  <img alt={about.title} src={about.img}></img>
                  <h3 style={{ margin: "10px 0", textAlign: "center" }}>
                    {about.title}
                  </h3>
                  <p className="p-text" style={{ textAlign: "center" }}>
                    {about.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
      <NavigationDots item="about"></NavigationDots>
    </div>
  );
}

export default About;
