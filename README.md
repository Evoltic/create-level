# Create simple game levels
## General idea

**Any playfield can be represented in the form of a table**

Walls, boxes, enemies, health boxes, weapons and etc have their own place (cell)

Lets take a look at the picture below:

![Simple game screenshot](https://raw.githubusercontent.com/Evoltic/create-level/master/src/img/simple_ss.png)

> Simple game

 `Blue color - hero`
 
 `Green color - health box`
 
 `Gray color - wall`
 
 `White - space where the hero moves`
 
The hero position is the forth row and the third column

The health box position is the seventh row and the sixth column

When the hero moves to the health box cell then the box disappears and hero gains more Health Points (HP)

To interact with items on the table we need to represent our table as an array, so

**Any table can be represented in the form of an array**

![Array screenshot](https://raw.githubusercontent.com/Evoltic/create-level/master/src/img/array_ss.png)

