import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props=>props.size}, 18px);
  grid-template-rows: repeat(${props=>props.size}, 18px);
  border: solid black 1px;
`

export const Cell = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${props => props.color};
  border: solid grey 0.5px;
`;