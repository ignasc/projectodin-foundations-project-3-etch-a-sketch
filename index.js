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
        newElement.addEventListener("mouseover",(e)=>{mouseOver(e)});
        newElement.setAttribute("id","grid-pixel-" + (i + 1));
        mainGrid.appendChild(newElement);
    };
};

function mouseOver(e){
    /*If no color set, sets a random color, otherwise darkens/saturates existing color*/
    let redColor;
    let greenColor;
    let blueColor;
    let colorAlpha;

    if(e.target.style.backgroundColor){
        redColor = e.target.getAttribute("redColor");
        greenColor = e.target.getAttribute("greenColor");
        blueColor = e.target.getAttribute("blueColor");
        colorAlpha = e.target.getAttribute("colorAlpha") * 1;

        colorAlpha += 0.1;
        if(colorAlpha >= 1){ colorAlpha = 1};

        e.target.style.backgroundColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + "," + colorAlpha + ")";
        e.target.setAttribute("redColor", redColor);
        e.target.setAttribute("greenColor", greenColor);
        e.target.setAttribute("blueColor", blueColor);
        e.target.setAttribute("colorAlpha", colorAlpha);

    } else {
        redColor = parseInt(Math.random()*255);
        greenColor = parseInt(Math.random()*255);
        blueColor = parseInt(Math.random()*255);
        colorAlpha = 0.1;
        e.target.style.backgroundColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + "," + 0.1 + ")";
        e.target.setAttribute("redColor", redColor);
        e.target.setAttribute("greenColor", greenColor);
        e.target.setAttribute("blueColor", blueColor);
        e.target.setAttribute("colorAlpha", colorAlpha);
    };
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
