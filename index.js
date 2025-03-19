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

function gridMouseOver(e){
    e.target.style.backgroundColor = "grey";
};
function gridMouseOut(e){
    e.target.style.backgroundColor = "white";
};

for(let i = 0; i < maxGridSize ** 2; i++){
    let newElement = singleSquareGrid.cloneNode();//if any unique attributes are used (like ID), modify them before appending the child to parent!
    newElement.addEventListener("mouseover",(e)=>{gridMouseOver(e)});
    newElement.addEventListener("mouseout",(e)=>{gridMouseOut(e)});
    mainGrid.appendChild(newElement);
};
