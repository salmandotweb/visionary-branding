import Home from "./Sections/Home/Home";
import Partners from "./Sections/Partners/Partners";
import "./App.css";
import Services from "./Sections/Services/Services";
import Why from "./Sections/Why/Why";

function App() {
  return (
    <div className="App">
      <Home />
      <Partners />
      <Services />
      <Why />
    </div>
  );
}

export default App;
