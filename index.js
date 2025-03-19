const drawingBoardSize = 100;
let numOfPixelsPerSide = 8;
const gridSquareBorderSize = 1;
let gridPixelSize = getGridPixelSize(drawingBoardSize, numOfPixelsPerSide, gridSquareBorderSize);
let drawingBoardPadding = getDrawingBoardPadding(drawingBoardSize, numOfPixelsPerSide, gridPixelSize, gridSquareBorderSize);

const mainApp = document.querySelector("#root");

const mainGrid = document.createElement("div");
mainGrid.setAttribute("id", "main-grid");
mainGrid.style.width = drawingBoardSize + "px";
mainGrid.style.height = drawingBoardSize + "px";

mainApp.appendChild(mainGrid);


const singleSquareGrid = document.createElement("div");

function createNewDrawingBoard(){

    singleSquareGrid.style.width = gridPixelSize + "px";
    singleSquareGrid.style.height = gridPixelSize + "px";
    singleSquareGrid.style.border = gridSquareBorderSize + "px solid grey"
    singleSquareGrid.setAttribute("class", "singleGridSquare");
    
    for(let i = 0; i < numOfPixelsPerSide ** 2; i++){
        let newElement = singleSquareGrid.cloneNode();//if any unique attributes are used (like ID), modify them before appending the child to parent!
        newElement.addEventListener("mouseover",(e)=>{gridMouseOver(e)});
        newElement.addEventListener("mouseout",(e)=>{gridMouseOut(e)});
        mainGrid.appendChild(newElement);
    };
};

function gridMouseOver(e){
    e.target.style.backgroundColor = "grey";
};
function gridMouseOut(e){
    e.target.style.backgroundColor = "white";
};

function getGridPixelSize(drawingBoardSize, numOfPixelsPerSide, gridSquareBorderSize){
    return parseInt((drawingBoardSize / numOfPixelsPerSide) - gridSquareBorderSize * 2);
};

function getDrawingBoardPadding(drawingBoardSize, numOfPixelsPerSide, gridSquareSize, gridSquareBorderSize){
    let totalUsedSpace = numOfPixelsPerSide * (gridSquareSize + gridSquareBorderSize * 2);
    let remainingUnusedSpace = drawingBoardSize - totalUsedSpace;
    console.log("Board size: " + drawingBoardSize + "\nPixel size: " + gridSquareSize + "\nTotal used space: " + totalUsedSpace + "\nRemaining space: " + remainingUnusedSpace);
    return remainingUnusedSpace / 2;
};

createNewDrawingBoard();