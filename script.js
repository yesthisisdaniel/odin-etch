const gridContainer = document.querySelector("#gridContainer")
const button = document.querySelector(".button")
const buttonPink = document.querySelector(".buttonPink")

button.addEventListener("click", createGrid);
buttonPink.addEventListener("click", createPinkGrid);

function createGrid() {
    gridContainer.innerHTML = "";

    const size = 16;

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        gridContainer.appendChild(newDiv);
    }
}

function createPinkGrid() {
    gridContainer.innerHTML = "";

    const size = 16;

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("squarePink");
        gridContainer.appendChild(newDiv);
    }
}

