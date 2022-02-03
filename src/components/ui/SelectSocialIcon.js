import React, { useState } from 'react';
import styled from 'styled-components';

function SelectSocialIcon({ icon, text, selected, color, bgColor, onClick }) {
    const [hovered, setHovered] = useState(false)
  return <Wrapper 
            bgColor={bgColor} 
            color={color}
            selected={selected}
            onMouseOver={() => setHovered(true)} 
            onMouseOut={() => setHovered(false)}
            onClick={onClick}
        >
      {icon}
      {hovered && <PopupText>{text}</PopupText>}
      {selected && <p>{text}</p>}

  </Wrapper>;
}
const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    color: ${props => props.color ?  props.color : 'black'};
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    transition: all .3s ease-out;
    position: relative;
    ${props => props.selected && `
        pointer-events: none;
        background-color: ${props.bgColor};
        border-radius: 9px;
        height: 40px;
        width: auto;
        padding: 0 10px;
        color: white;
    `}
    &:hover {
        color: white;
        background-color: ${props => props.bgColor ? props.bgColor : 'white' };
    }
    i {
        font-size: 1.5rem;
    }
`
const PopupText = styled.div`
    position: absolute;
    font-size: 0.8rem;
    color: white;
    background-color: black;
    padding: 5px;
    border-radius: 5px;
    bottom: -40px;
    z-index: 2;
    &:after {
        content: "";
        display: block;
        position: absolute;
        height: 0px;
        width: 0px;
        left: 50%;
        top: -10px;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-bottom: 5px solid black;
    }

`
export default SelectSocialIcon;
