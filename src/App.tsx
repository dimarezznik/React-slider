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
      delay={3}
    />
  );
}

export default App;
