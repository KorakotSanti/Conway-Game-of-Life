import styled from 'styled-components';

export const RuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  height: 90vh;
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight:bolder;
`;

export const TextBlock = styled.div`
  text-align: justify;
  padding: 5px;
`;

export const UnderLineText = styled.div`
  text-align: center;
  padding: 5px;
  text-decoration: underline;
`;

export const List = styled.ol`
`;

export const ListItem = styled.li`
  word-spacing: 1px;
  line-height: 1;
  padding: 10px;
`;