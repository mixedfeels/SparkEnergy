import React from "react";
import styled from "styled-components";

const BoxEnergy = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  gap: 5px;
  padding: 20px;
  width: 400px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const EnergyImg = styled.img`
  width: 120px; // Increased width to make it wider
  height: 90px; // Reduced height to make the image less tall
  object-fit: contain;
  margin-bottom: 10px;
`;

const EnergyTitle = styled.p`
  font-size: 1.3em;
  color: #333;
  font-weight: 700;
`;

const EnergyText = styled.p`
  font-size: 0.65em;
  color: #666;
  padding: 10px 0;
  line-height: 1.5;
`;

// const EnergyButton = styled.a`
//   display: inline-block;
//   background-color: #000;
//   color: #f6e24b;
//   font-size: 15px;
//   font-weight: 600;
//   padding: 12px 24px;
//   border: 2px double solid #f6e24b;
//   border-radius: 50px;
//   cursor: pointer;
//   text-decoration: none; // Remove underline
//   transition: background-color 0.3s, color 0.3s, transform 0.2s;

//   &:hover {
//     background-color: #f6e24b;
//     color: #000;
//     transform: scale(1.05);
//   }

//   &:active {
//     transform: scale(0.98);
//     background-color: #333;
//   }
// `;

const EnergyBox = ({ imgSrc, title, description }) => (
  <BoxEnergy>
    <EnergyImg src={imgSrc} alt={title} />
    <EnergyTitle>{title}</EnergyTitle>
    <EnergyText>{description}</EnergyText>
  </BoxEnergy>
);

export default EnergyBox;
