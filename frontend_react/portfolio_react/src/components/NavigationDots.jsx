/* eslint-disable react/prop-types */

const NavigationDots = ({ item }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "works", "skills", "contact"].map((link, index) => {
        return (
          <a
            href={`#${link}`}
            key={index}
            className="app__navigation-dot"
            style={item === link ? { backgroundColor: "#313BAC" } : {}}
          ></a>
        );
      })}
    </div>
  );
};

export default NavigationDots;
