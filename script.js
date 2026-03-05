const gridContainer = document.querySelector("#gridContainer")
const button = document.querySelector(".button")

gridContainer.addEventListener("mousedown", draw)
gridContainer.addEventListener("mousedown", (e) => {
    e.preventDefault(); 

    if (e.button === 0) {
        isDrawing = true;
        if (e.target.classList.contains("square")) {
            e.target.style.backgroundColor = "orange";
        }
    }
});

let isDrawing = false;
function randColorNum() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`;
}

function draw() {
    gridContainer.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
            isDrawing = true;
            if (e.target.classList.contains("square")) {
                e.target.style.backgroundColor = randomRGB();
            }
        }
    })

    gridContainer.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("square")) {
            e.target.style.backgroundColor = randomRGB();
        }
    });

    const stopDrawing = () => {
        isDrawing = false;
    };

    window.addEventListener("mouseup", stopDrawing);
    window.addEventListener("blur", stopDrawing)
}

button.addEventListener("click", createGrid);

function createGrid() {
    gridContainer.innerHTML = "";

    let size = Number(prompt("What size grid are we making?"))

    if (size > 100) size = 100;

    const basis = (100 / size) + "%";

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");

        newDiv.style.flexBasis = basis;

        gridContainer.appendChild(newDiv);
    }
};







