import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='min-h-full min-w-full bg-gradient-to-b from-black  via-black to-violet-700 ' >
      <NavigationBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>

      <SocialLinks/>

    </div>
  );
}

export default App;
