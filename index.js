const maxGridSize = 16;
const gridSquareSize = 5;
const gridSquareBorderSize = 1;

const mainApp = document.querySelector("#root");

const mainGrid = document.createElement("div");
mainGrid.setAttribute("id", "main-grid");
mainGrid.style.width = maxGridSize * (gridSquareSize + gridSquareBorderSize * 2) + "px";

mainApp.appendChild(mainGrid);


const singleSquareGrid = document.createElement("div");
singleSquareGrid.style.width = gridSquareSize + "px";
singleSquareGrid.style.height = gridSquareSize + "px";
singleSquareGrid.style.border = "" + gridSquareBorderSize + "px solid grey"
singleSquareGrid.setAttribute("class", "singleGridSquare");


for(let i = 0; i < maxGridSize ** 2; i++){
    let newElement = singleSquareGrid.cloneNode();//if ID is used, modify it before appending the child to parent!
    mainGrid.appendChild(newElement);
};
