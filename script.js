const gridContainer = document.querySelector("#gridContainer")
const button = document.querySelector(".button")

button.addEventListener("click", createGrid);

function createGrid() {
    gridContainer.innerHTML = "";

    const size = 16;

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        gridContainer.appendChild(newDiv);
    }
}

