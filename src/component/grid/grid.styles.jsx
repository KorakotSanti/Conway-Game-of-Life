import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props=>props.col}, 18px);
  grid-template-rows: repeat(${props=>props.row}, 18px);
`

export const Cell = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${props => props.color};
  border: solid black 0.5px;
`;