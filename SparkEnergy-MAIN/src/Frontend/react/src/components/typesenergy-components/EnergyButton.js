import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


const Button = styled(Link)`
  display: inline-block;
  background-color: #000;
  color: #f6e24b;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 24px;
  border: 2px double solid #f6e24b;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none; 
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

  &:hover {
    background-color: #f6e24b;
    color: #000;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
    background-color: #333;
  }
`;

const EnergyButton = ({ link, children }) => {
  return <Button to={link}>{children}</Button>;
};

export default EnergyButton;
