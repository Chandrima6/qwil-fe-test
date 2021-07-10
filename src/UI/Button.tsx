import React, {MouseEvent} from "react";
import styled, {css} from 'styled-components';

type ButtonProps = {
    type: 'submit'|'reset'|'button',
    name: string,
    disabled?: boolean,
    clickHandler: (event: MouseEvent<HTMLButtonElement>) => void,
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


const Button: React.FC<ButtonProps> = ({
        type,
        name,
        children,
        clickHandler,
        disabled = false
    }) => {
    return <StyledButton type={type} name={name} onClick={clickHandler} disabled={disabled}>{children}</StyledButton>
}


export default Button
