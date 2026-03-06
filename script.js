const gridContainer = document.querySelector("#gridContainer");
const gridButton = document.querySelector("#gridButton");
const rainbowButton = document.querySelector("#rainbowColor");
const blackButton = document.querySelector("#blackColor");
const clearButton = document.querySelector("#clearButton");
const eraserButton = document.querySelector("#eraserButton");
const darkeningButton = document.querySelector("#darkeningButton");


let isDrawing = false; // needs to be declared once and on top of code for global scope
let drawingColor = "black"; // default will always be black
let colorDarkeningState = false;

function randomColorNum() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randomColorNum()},${randomColorNum()},${randomColorNum()})`;
}
function colorDarkening() {
    
}

// This function acts as a "switchboard"
function getColor() {
    if (drawingColor === "rainbow") {
        return randomRGB();
    }
    else if (drawingColor === "eraser") {
        return "white";
    }
    else {
        return "black";
    }
}

gridContainer.addEventListener("mousedown", (e) => {
    e.preventDefault(); 
    if (e.button === 0) { // 0 is the code for left click
        isDrawing = true;
        if (e.target.classList.contains("square")) {
            if (colorDarkeningState === true) {
            e.target.style.backgroundColor = getColor();
            c
            }
            else {
            e.target.style.backgroundColor = getColor();
            }
        }
    }
});

gridContainer.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("square")) {
        if (colorDarkeningState === true) {
            e.target.style.backgroundColor = getColor();
            e.target.style.opacity = 0.1;
        }
        else {
            e.target.style.backgroundColor = getColor();
        }
    }
});

const stopDrawing = () => isDrawing = false;
window.addEventListener("mouseup", stopDrawing);
window.addEventListener("blur", stopDrawing);

blackButton.addEventListener("click", () => {
    drawingColor = "black";
});

rainbowButton.addEventListener("click", () => {
    drawingColor = "rainbow";
});

eraserButton.addEventListener("click", () => {
    drawingColor = "eraser";
}
)

darkeningButton.addEventListener("click", (e) => {
    if (e.button === 0) {
        colorDarkeningState = true;
        console.log(colorDarkeningState)
    }
})

gridButton.addEventListener("click", createGrid);

function createGrid() {
    gridContainer.innerHTML = "";
    let size = Number(prompt("What size grid are we making?"))
    if (size > 100) size = 100;
    const basis = (100 / size) + "%";

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.flexBasis = basis;
        newDiv.style.height = basis; 
        gridContainer.appendChild(newDiv);
    }
}

clearButton.addEventListener("click", clearGrid);
function clearGrid() {
    gridContainer.innerHTML = "";
}