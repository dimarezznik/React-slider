import React, { FC } from "react";
import styled from "styled-components";

type SlideType = {
  id: number;
  img: string;
  text: string;
  index: number;
  slideIndex: number;
  stopMove: () => any;
  startMove: () => any;
};

const MapSlide: FC<SlideType> = ({
  id,
  img,
  text,
  index,
  slideIndex,
  stopMove,
  startMove,
}) => {
  return (
    <>
      {slideIndex !== index + 1 ? (
        <SomeSlide onMouseEnter={stopMove} onMouseLeave={startMove}>
          <Amount>{id} / 4</Amount>
          <Image src={img} alt="some pic" />
          <Text>{text}</Text>
        </SomeSlide>
      ) : (
        <ActiveSomeSlide onMouseEnter={stopMove} onMouseLeave={startMove}>
          <Amount>{id} / 4</Amount>
          <Image src={img} alt="some pic" />
          <Text>{text}</Text>
        </ActiveSomeSlide>
      )}
    </>
  );
};

export default MapSlide;

const SomeSlide = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
`;
const ActiveSomeSlide = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;
  transition: opacity ease-in-out 0.4s;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 500px;
  transition: all 0.2s;
`;

const Amount = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #ffffff;
  z-index: 1;
`;

const Text = styled.p`
  position: absolute;
  bottom: 10px;
  color: #ffffff;
  font-size: 20px;
  left: 50%;
  transform: translate(-50%);
`;
