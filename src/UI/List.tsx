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
  padding: 5px;
  p {
    margin: 2px;
  }
`
