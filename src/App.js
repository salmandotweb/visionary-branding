import { useEffect, useState } from "react";
import Home from "./Sections/Home/Home";
import Partners from "./Sections/Partners/Partners";
import Services from "./Sections/Services/Services";
import Why from "./Sections/Why/Why";
import Work from "./Sections/Work/Work";
import Testimonial from "./Sections/Testimonial/Testimonial";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
          <Partners />
          <Services />
          <Why />
          <Work />
          <Testimonial />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
