import NavigationDots from "../../components/NavigationDots";
import SocialMedia from "../../components/SocialMedia";
import { images } from "../../constants";
import "./Skills.scss";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "Flutter",
      img: images.flutter,
      bgColor: "#b3e5fc",
    },
    {
      name: "React JS",
      img: images.react,
      bgColor: "#cce6e4",
    },
    {
      name: "Redux",
      img: images.redux,
      bgColor: "#c4abd6",
    },
    {
      name: "Next JS",
      img: images.next,
      bgColor: "#b0b0ab",
    },
    {
      name: "HTML5",
      img: images.html,
      bgColor: "#fa7f4b",
    },
    {
      name: "CSS3",
      img: images.css,
      bgColor: "#268be4",
    },
    {
      name: "Javascript",
      img: images.javascript,
      bgColor: "#f5ebb0",
    },
    {
      name: "Node JS",
      img: images.node,
      bgColor: "#7ecf9d",
    },
    {
      name: "Express JS",
      img: images.express,
      bgColor: "white",
    },
    {
      name: "Python",
      img: images.python,
      bgColor: "#65b2f0",
    },
    {
      name: "Django",
      img: images.django,
      bgColor: "#17734f",
    },
    {
      name: "Laravel",
      img: images.laravel,
      bgColor: "#f5a9a4",
    },
    {
      name: "Tensorflow",
      img: images.tensorflow,
      bgColor: "#f7d279",
    },
    {
      name: "Git",
      img: images.git,
      bgColor: "#ffa494",
    },
  ];
  return (
    <div className="app__flex" id="skills">
      <SocialMedia></SocialMedia>
      <motion.div
        whileInView={{
          y: [100, 0],
          opacity: [0, 1],
          transition: { duration: 0.5, delayChildren: 0.5 },
        }}
      >
        <div className="work-header">
          <h2 className="head-text">Skills</h2>
        </div>
        <motion.div
          whileInView={{
            opacity: [0, 0, 1],
            transition: { duration: 1 },
          }}
          className="app__skills app__flex"
        >
          {skills.map((skill, index) => {
            return (
              <div key={index} className="app__skill">
                <div
                  className="app__skill-img"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img alt="skill" src={skill.img}></img>
                </div>

                <p>{skill.name}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      <NavigationDots item="skills"></NavigationDots>
    </div>
  );
}

export default Skills;
