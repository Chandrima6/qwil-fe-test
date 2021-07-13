import React, {MouseEvent} from "react";
import styled, {css} from 'styled-components';


type ButtonProps = {
    type: 'submit'|'reset'|'button',
    name: string,
    disabled?: boolean,
    clickHandler: (event: MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode,
    'data-testid'?: string
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  border: 1px solid #0b0909;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  font-weight: bold;
  &:disabled {
    cursor: auto;
    box-shadow: none;
    background-color: #dbd7d7;
    color: #0b0909;
  }
  @media (min-width: 768px) {
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 10px inset #b7b4b4;
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

const StyledIconButton = styled(StyledButton)`
  border: none;
  border-radius: 5px;
  padding: 0px;

  &:hover {
    box-shadow: none;
  }

  &:disabled {
    background-color: transparent;
    svg {
      color: #acabab;
    }
  }

  & svg {
    height: 3em;
    width: 3em;
    color: #280202;
  }
  
  &:enabled {
    svg:focus, svg:hover {
      color: #de0d0d;
    }
  }

  ${props => {
    if (props.type === 'submit') {
      return css`
        background-color: transparent;
      `
    } else {
      return css`
        background-color: transparent;
      `
    }
  }}
`




const Button: React.FC<ButtonProps> = (props) => {
    const {
        type,
        name,
        children,
        clickHandler,
        disabled = false,
    } = props
    return <StyledButton
        type={type}
        name={name}
        onClick={clickHandler}
        disabled={disabled}
        data-testid={props['data-testid']}>
        {children}
    </StyledButton>
}

export const IconButton: React.FC<ButtonProps> = (props) => {
    const {
        type,
        name,
        children,
        clickHandler,
        disabled = false,
    } = props
    return <StyledIconButton
        type={type}
        name={name}
        onClick={clickHandler}
        disabled={disabled}
        data-testid={props['data-testid']}>
        {children}
    </StyledIconButton>
}


export default Button
