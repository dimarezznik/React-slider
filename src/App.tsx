import Slider from "./components/Slider";
import { slides } from "./mockSlides";

function App() {
  return (
    <Slider
      slides={slides}
      loop={true}
      navs={true}
      pags={true}
      auto={true}
      stopMouseHover={true}
      delay={1}
    />
  );
}

export default App;
