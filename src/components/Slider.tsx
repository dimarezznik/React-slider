import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Slide } from "./../mockSlides";
import IMGRight from "../assets/right-arrow.svg";
import IMGLeft from "../assets/left-arrow.svg";
import MapSlide from "./Slide/Slide";
import Dots from "./Slide/Dots/Dots";

export interface Sliders {
  slides: Slide[];
  loop: boolean;
  navs: boolean;
  pags: boolean;
  auto: boolean;
  stopMouseHover: boolean;
  delay: number;
}

const Slider: FC<Sliders> = ({
  slides,
  loop,
  navs,
  pags,
  auto,
  stopMouseHover,
  delay,
}) => {
  const [autoRun, setAuto] = useState<boolean>(auto);
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const nextSlide = () => {
    if (slideIndex === slides.length && loop) {
      setSlideIndex(1);
    } else if (slideIndex === slides.length && !loop) {
      setSlideIndex(slides.length);
    } else if (slideIndex < slides.length) {
      setSlideIndex(slideIndex + 1);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoRun) {
      interval = setTimeout(() => {
        nextSlide();
      }, delay * 1000 || 5000);
    }
    return () => clearTimeout(interval);
  }, [autoRun, slideIndex]);

  const prevSlide = () => {
    if (slideIndex === 1 && loop) {
      setSlideIndex(slides.length);
    } else if (slideIndex > 1 || (slideIndex === slides.length && !loop)) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const stopMove = useCallback(() => {
    if (autoRun === true && stopMouseHover === auto) {
      setAuto(false);
    }
  }, [autoRun]);

  const startMove = useCallback(() => {
    if (autoRun === false && stopMouseHover === auto) {
      setAuto(true);
    }
  }, [autoRun]);

  const tapDot = useCallback(
    (index: React.SetStateAction<number>) => {
      setSlideIndex(index);
    },
    [slideIndex]
  );

  return (
    <section>
      <SecSlider>
        {navs && (
          <>
            <ArrowLeft src={IMGLeft} alt="btn" onClick={prevSlide} />
            <ArrowRight src={IMGRight} alt="btn" onClick={nextSlide} />
          </>
        )}

        {slides.map((slide, index) => {
          return (
            <MapSlide
              slideIndex={slideIndex}
              index={index}
              key={slide.id}
              id={slide.id}
              img={slide.img}
              text={slide.text}
              stopMove={stopMove}
              startMove={startMove}
            />
          );
        })}
        {pags && (
          <>
            <DotsContainer>
              {slides.map((item, index) => (
                <Dots
                  key={item.id}
                  slideIndex={slideIndex}
                  index={index}
                  tapDot={tapDot}
                />
              ))}
            </DotsContainer>
          </>
        )}
      </SecSlider>
    </section>
  );
};

export default Slider;

const DotsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 110%;
  transform: translateX(-50%);
  display: flex;
  z-index: 1;
`;

const SecSlider = styled.div`
  position: relative;
  width: 80%;
  height: 500px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const ArrowRight = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: 60px;
  z-index: 1;
  padding: 20px;
  user-select: none;
  border-radius: 15px 0 0 15px;
  opacity: 0.5;
  background-color: white;
  &:hover {
    background-color: #b8b5b5;
  }
`;
const ArrowLeft = styled.img`
  width: 20px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: 60px;
  z-index: 1;
  padding: 20px;
  user-select: none;
  border-radius: 0 15px 15px 0;
  background-color: white;
  opacity: 0.5;
  &:hover {
    background-color: #b8b5b5;
  }
`;
