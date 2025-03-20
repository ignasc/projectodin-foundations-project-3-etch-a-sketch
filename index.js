const drawingBoardSize = 500;
let drawingBoardBorder = 1;
let drawingBoardPadding = 0;
let numOfPixelsPerSide = 8; //starting default pixel size
const gridSquareBorderSize = 1;
let gridPixelSize = getGridPixelSize(drawingBoardSize, numOfPixelsPerSide);
const mainApp = document.querySelector("#root");

const btnSetNumOfPixels = document.createElement("button");
btnSetNumOfPixels.textContent = "Set grid density.";
btnSetNumOfPixels.addEventListener("click", ()=>{
    numOfPixelsPerSide = prompt("Select number of pixels per side (max size 100)",);
    if(numOfPixelsPerSide > 100){ numOfPixelsPerSide = 100;};
    createNewDrawingBoard();
});

mainApp.appendChild(btnSetNumOfPixels);

const mainGrid = document.createElement("div");
mainGrid.setAttribute("id", "main-grid");
mainGrid.style.width = drawingBoardSize + "px";
mainGrid.style.height = drawingBoardSize + "px";

mainApp.appendChild(mainGrid);


const singleSquareGrid = document.createElement("div");

function createNewDrawingBoard(){

    /*Remove existing board if present*/
    let existingBoardNodeList = document.querySelectorAll("#main-grid>div");
    if(existingBoardNodeList.length > 0){
        existingBoardNodeList.forEach((element)=>{
            element.remove();
        });
    };

    /*set new board dimensions*/
    gridPixelSize = getGridPixelSize(drawingBoardSize, numOfPixelsPerSide);

    singleSquareGrid.style.width = gridPixelSize + "px";
    singleSquareGrid.style.height = gridPixelSize + "px";
    singleSquareGrid.style.border = gridSquareBorderSize + "px solid grey"
    singleSquareGrid.setAttribute("class", "grid-pixel");
    singleSquareGrid.style.boxSizing = "border-box";

    mainGrid.style.padding = drawingBoardPadding + "px";
    
    for(let i = 0; i < numOfPixelsPerSide ** 2; i++){
        let newElement = singleSquareGrid.cloneNode();//if any unique attributes are used (like ID), modify them before appending the child to parent!
        newElement.addEventListener("mouseover",(e)=>{gridMouseOver(e)});
        newElement.setAttribute("id","grid-pixel-" + (i + 1));
        mainGrid.appendChild(newElement);
    };
};

function gridMouseOver(e){
    e.target.style.backgroundColor = "darkgrey";
};

function getGridPixelSize(drawingBoardSize, numOfPixelsPerSide){
    /*NOTE: box-sizing = "border box", which means margins, border and padding are all included in total width and height*/
    let pixelSize = parseInt((drawingBoardSize / numOfPixelsPerSide)*10)/10;
    let spaceForPadding = (drawingBoardSize - numOfPixelsPerSide * pixelSize) / 2;
    if(spaceForPadding > 1){
        drawingBoardPadding = parseInt(spaceForPadding*10)/10;
    };
    return pixelSize;
};

createNewDrawingBoard();
