import React from "react";
import Slider from "../typesenergy-components/gsapslider";
import styled from "styled-components";

const Div = styled.div`
  margin: 0;
  border-top: 1px solid yellow;
  border-bottom: 1px solid yellow;
`;

const TypesEnergy = () => {
  return (
    <Div>
      <Slider />
    </Div>
  );
};

export default TypesEnergy;
