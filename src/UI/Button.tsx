import React from "react";
import styled, {css} from 'styled-components';

export interface ButtonProps {
    type: 'submit'|'reset'|'button',
    disabled: boolean,
    clickHandler: () => {},
    children: React.ReactNode
}

const StyledButton = styled.button`
  display: flex;
  border: 1px solid #0b0909;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  font-weight: bold;
  @media (min-width: 768px) {
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 10px inset #b7b4b4;
    }

    &:disabled {
      cursor: auto;
      box-shadow: none;
      background-color: #dbd7d7;
      color: #0b0909;
    }
  }
  ${props => {
    if (props.type === 'submit') {
        return css`
        background-color: #79b1b0;
        color: #ffffff;
      `
    } else {
        return css`
        background-color: #ffffff;
        color: #79b1b0;
      `
    }
}}
`


const Button: React.FC<ButtonProps> = (props) => {
    return <StyledButton type={props.type} onClick={props.clickHandler} disabled={props.disabled}>{props.children}</StyledButton>
}


export default Button
