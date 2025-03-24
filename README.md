## Project Odin - Foundation Course - Project#3
### Etch-a-Sketch game

A project assignment to build an etch-a-sketch game, where mouse over a pixel changes it's color to random and every subsequent mouse over on the same pixel increases saturation of the color.

[Live preview(To be added)](https://ignasc.github.io/projectodin-foundations-project-3-etch-a-sketch/)

### Main challenges

The main challenge was to figure out how to produce a grid of certain pixel length, while the canvas of the grid remains the same.

Even though I am sure math is correct "side length / number of grid pixels = pixel size", because I am using box-sizing set to border-box, which means pixel width will be the actual with, even if pixel is with borders.

But for some reason I still get certain grid dimensions to be incorrect, where I am either 1 pixel short or 1 pixel too long, ending up in an uneven grid size.
