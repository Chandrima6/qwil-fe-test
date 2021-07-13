import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: flex-start;
  justify-content: stretch;
  align-items: stretch;
  padding: 0;
  margin: 0;
`

export const StyledListItem = styled.li`
  list-style-type: none;
  border-bottom: 1px solid darkslategrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;

  p, h3 {
    margin: 2px 0;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  &.active {
    background-color: #dda1b6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    cursor: pointer;
    &:hover {
      background-color: #dda1b6;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`

