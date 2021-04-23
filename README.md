# [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

This is my implementation of Conway's Game of Life using ReactJs</br>
You can find the app at https://korakotsanti.github.io/Conway-Game-of-Life/

## What is Conway's Game of Life?
> The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. </br>
> [Source](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

</br>
The Game of Life  consists of a grid each cell in the grid can have up to 8 neighbors. The cell in the grid are either alive or dead.
The Game of Life will keep cycling on and on through generations with a ruleset that will turn the live cells into dead cells and dead cells into live cells.
</br
The rules are as followed:
- Live cell with less than 2 neighbors or more than 3 neighbors will become a dead cell
- Dead cells with exactly 3 neighbors will become a live cell

## Features
There are some features for this app. they are:
- **Start**: allows you to start the game and see the magic, and the button will turn into a **Stop** button
- **Stop**: will stop the running game, when press will turn into a **Start** button
- **Interval Dropdown**: There are options to see the change in milliseconds
- **Clear**: Will clear the grid
- **Randomize**: Will do random live and dead cell for the entire grid
- **Set Size**: Allows you to set the size of the board nxn from 20 to 50
- **Color in Cell**: You are allowed to click the cell to make a live cell into a dead cell and vice versa
