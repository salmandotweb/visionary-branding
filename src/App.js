import Home from "./Sections/Home/Home";
import Partners from "./Sections/Partners/Partners";
import "./App.css";
import Services from "./Sections/Services/Services";
import Why from "./Sections/Why/Why";
import Work from "./Sections/Work/Work";
import Testimonial from "./Sections/Testimonial/Testimonial";
import Contact from "./Sections/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Partners />
      <Services />
      <Why />
      <Work />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
