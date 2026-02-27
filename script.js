const gridContainer = document.querySelector("#gridContainer")
const button = document.querySelector(".button")

gridContainer.addEventListener("mousedown", draw)

function draw() {
    let isDrawing = false;

    gridContainer.addEventListener("mousedown", (e) => {
        isDrawing = true;

        if (e.target.classList.contains("square")) {
                e.target.style.backgroundColor = "orange";
            }
    })

    gridContainer.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("square")) {
            e.target.style.backgroundColor = "orange";
        }
    });

    window.addEventListener("mouseup", () => {
        isDrawing = false;
    });
}

button.addEventListener("click", createGrid);



function createGrid() {
    gridContainer.innerHTML = "";

    const size = 16;

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        gridContainer.appendChild(newDiv);
    }
};







