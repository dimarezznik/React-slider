import Img1 from "./assets/img_mountains_wide.jpg";
import Img2 from "./assets/img_nature_wide.jpg";
import Img3 from "./assets/img_snow_wide.jpg";
import Img4 from "./assets/img_lights_wide.jpg";

export interface Slide {
  id: number;
  img: string;
  text: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    img: Img1,
    text: "Caption Text 1",
  },
  {
    id: 2,
    img: Img2,
    text: "Caption Text 2",
  },
  {
    id: 3,
    img: Img3,
    text: "Caption Text 3",
  },
  {
    id: 4,
    img: Img4,
    text: "Caption Text 4",
  },
];
