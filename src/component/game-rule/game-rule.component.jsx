import React from "react";

import {
  RuleContainer,
  Link,
  TextBlock,
  List,
  ListItem,
  UnderLineText,
} from "./game-rule.styles";

const GameRule = () => {
  return (
    <RuleContainer>
      <h1>Rules</h1>
      <TextBlock>
        <Link href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          Conway's Game of Life
        </Link>{" "}
        is a celluar automation created by John Horton Conway.
      </TextBlock>
      <TextBlock>
        There is one singular grid. Each cell in the grid is either alive or
        dead. Each cell is surrounded by up to eight neighbors.
      </TextBlock>
      <TextBlock>
        The color black will indicates live and color white will indicate dead
        cells{" "}
      </TextBlock>
      <TextBlock>
        <UnderLineText>The rules are as followed:</UnderLineText>
        <List>
          <ListItem>
            Any live cell with two or three live neighbors will stay alive
          </ListItem>
          <ListItem>
            Any live cell with less than 2 live neighbors or more than 3 live
            neighbors will die
          </ListItem>
          <ListItem>
            Any dead cell with exactly 3 live neighbors will come back to life
          </ListItem>
        </List>
      </TextBlock>
    </RuleContainer>
  );
};

export default GameRule;
