import { useState } from "react";
import "./Work.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import NavigationDots from "../../components/NavigationDots";
import SocialMedia from "../../components/SocialMedia";

const handleClick = (link) => {
  window.open(link);
};

function Work() {
  const categories = ["All", "Web App", "Mobile App", "Machine Learning"];
  const works = [
    {
      name: "Full Stack E-commerce",
      category: "Web App",
      description:
        "A full stack e-commerce website using mern stack technology that includes both user and admin interface",
      imgUrl: images.work1,
      github: "https://github.com/ZakiMouzaoui/full-stack-ecommerce-website",
    },
    {
      name: "Reddit Clone",
      category: "Web App",
      description:
        "A responsive reddit clone app using firebase, react js, chakra ui and redux",
      imgUrl: images.work2,
      github: "https://github.com/ZakiMouzaoui/reddit_clone",
    },
    {
      name: "Charitable works",
      category: "Web App",
      description:
        "A full stack web app for charity works using django and jquery",
      imgUrl: images.work3,
      github: "https://github.com/ZakiMouzaoui/1cs_project_oeuvres_sociales",
    },
    {
      name: "Whatsapp Chat Clone",
      category: "Mobile App",
      description: "A whatsapp chat clone application using firebase + flutter",
      imgUrl: images.work4,
      github: "https://github.com/ZakiMouzaoui/whatsapp_clone",
    },
    {
      name: "Tiktok Clone Mobile App",
      category: "Mobile App",
      description: "A tiktok clone application using firebase + flutter",
      imgUrl: images.work6,
      github: "https://github.com/ZakiMouzaoui/tiktok_clone",
    },
    {
      name: "Brain Tumors Semantic Segmentation",
      description:
        "A final year project for brain tumor semantic segmentation using deep learning and streamlit",
      category: "Machine Learning",
      imgUrl: images.work5,
      github: "https://github.com/ZakiMouzaoui/brain-tumor-segmentation",
    },
  ];
  const [filtered, setFiltered] = useState(works);

  const filterWorks = (index) => {
    setSelectedIndex(index);
    const category = categories[index];
    if (category !== "All") {
      setFiltered(works.filter((work) => work.category === category));
    } else {
      setFiltered(works);
    }
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="app__flex" id="works">
      <SocialMedia></SocialMedia>
      <div className="app__work">
        <div className="work-header">
          <h2 className="head-text">
            <span>Projects</span> i have built
          </h2>
        </div>

        <div className="app__work-categories">
          {categories.map((category, index) => {
            return (
              <div
                className={`${
                  selectedIndex === index
                    ? "app__work-category-active"
                    : "app__work-category"
                }`}
                key={index}
                onClick={() => filterWorks(index)}
              >
                {category}
              </div>
            );
          })}
        </div>
        <motion.div
          className="app__work-projects"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          key={selectedIndex}
        >
          {filtered.map((work, index) => {
            return (
              <div key={index} className="app__work-project">
                <div className="app__work-img">
                  <img alt="projetc" src={work.imgUrl}></img>
                  <div className="app__work-overlay">
                    <div className="overlay-icon">
                      <AiFillGithub
                        onClick={() => {
                          handleClick(work.github);
                        }}
                      ></AiFillGithub>
                    </div>
                  </div>
                </div>

                <h3 style={{ textAlign: "center", margin: "1rem 0" }}>
                  {work.name}
                </h3>
                <p style={{ textAlign: "center" }} className="p-text">
                  {work.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
      <NavigationDots item="works"></NavigationDots>
    </div>
  );
}

export default Work;
