import React from 'react'
import styled from "styled-components";



const Dots = ({slideIndex, index, tapDot}) => {
  return (
      <>
      {slideIndex === index + 1 ? <ActiveDot ></ActiveDot> : <Dot onClick={() => tapDot(index + 1)}></Dot>}
    </>
  )
}

export default Dots


const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: #f1f1f1;
  cursor: pointer;
`;

const ActiveDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  cursor: pointer;
  background: rgb(32, 32, 32);
`;