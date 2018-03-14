# Create simple game levels
## General idea

**Any playfield can be represented as a table**

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

When the hero moves to the health box then the box is disappears and hero gains more Health Points (HP)
