import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Stack from "./components/Stack";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";


function App() {
  return (
    <>
    <div>
          <NavBar />
          <Home />
          <About/>
          <Stack />
          <Certificate />
          <Contact />
    </div>
    </>
  );
}

export default App;
