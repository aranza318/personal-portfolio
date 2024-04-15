import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NB.jsx";
import { Banner } from "./components/Banner.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contacto } from "./components/Contacto.jsx"
import { Footer } from "./components/Footer.jsx";
import { FinishImg } from "./components/FinishImg.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacto />
      <Footer />
      <FinishImg />
    </div>
  );
}

export default App;
