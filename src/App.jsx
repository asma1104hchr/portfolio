import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        {" "}
        <Hero></Hero>
        <Skills></Skills>
        <WorkExperience/>
        <Contact/>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
