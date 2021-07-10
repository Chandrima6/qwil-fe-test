import styled from 'styled-components';
import React from "react";

type CardProps = {
    direction?: 'row'|'column',
    width: string,
    children: React.ReactNode
}

const StyledCard = styled.section`
  display: flex;
  flex-direction: ${(props: CardProps) => props.direction};
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #d39a9a;
  padding: 10px;
  margin: 10px;
  color: #000000;
  flex: 1 0 ${(props: CardProps) => props.width};
`

const Card: React.FC<CardProps> = ({width, children,direction= 'column'}) => {
    return <StyledCard width={width} direction={direction}>{children}</StyledCard>
}

export default Card
