import "./App.scss";
import { Navbar } from "./components";
import { About, Contact, Footer, Header, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>

      <Work></Work>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
