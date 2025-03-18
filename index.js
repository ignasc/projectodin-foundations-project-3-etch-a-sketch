const maxGridSize = 16;
const gridSquareSizeInPx = 5;

const mainApp = document.querySelector("#root");

const mainGrid = document.createElement("div");
mainGrid.setAttribute("id", "main-grid");

mainApp.appendChild(mainGrid);


const singleSquareGrid = document.createElement("div");
singleSquareGrid.style.width = gridSquareSizeInPx + "px";
singleSquareGrid.style.height = gridSquareSizeInPx + "px";
singleSquareGrid.style.border = "1px solid grey";


for(let i = 0; i < maxGridSize; i++){
    let newElement = singleSquareGrid.cloneNode();//if ID is used, modify it before appending the child to parent!
    mainGrid.appendChild(newElement);
};
