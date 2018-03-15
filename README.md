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

To interact with items on the table we need to represent our table in the form of an array, so

**Any table can be represented in the form of an array**

![Array screenshot](https://raw.githubusercontent.com/Evoltic/create-level/master/src/img/array_ss.png)

> JS syntax

 `2 - hero`
 
 `3 - health box`
 
 `0 - wall`
 
 `1 - space where the hero moves`

playfield[0] is a first row, playfield[1] is a second row

palyfield[0][0] is a first row and first column, playfield[1][0] is a second row and first colum

playfield[3][2] - Hero

playfield[5][6] - Health Box

## Basic Usage

Pick a color

![Color bar screenshot](https://raw.githubusercontent.com/Evoltic/create-level/master/src/img/colorbar_ss.png)

And draw 

![Project screenshot](https://raw.githubusercontent.com/Evoltic/create-level/master/src/img/project_ss.png)

Then just click on "copy" and you will get the result in the form of an array

![Result screenshot](https://raw.githubusercontent.com/Evoltic/create-level/master/src/img/result_ss.png)

## Change value

Change what to pass in the table (array) in the input field:

1.  Pass a new value

2. Click "change"

Also you can change a color that visualise your value:

1. Click on the eye dropper icon 

2. Pick a color

3. Click on the eye dropper icon again to hide the color picker

![Items screenshot](https://raw.githubusercontent.com/Evoltic/create-level/master/src/img/items_ss.png)

## Enjoy!
