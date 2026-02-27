const gridContainer = document.querySelector("#gridContainer")
const button = document.querySelector(".button")

gridContainer.addEventListener("mousedown", draw)

function draw() {
    let isDrawing = false;
    gridContainer.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
            isDrawing = true;
            if (e.target.classList.contains("square")) {
                e.target.style.backgroundColor = "orange";
            }
        }
    })

    gridContainer.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("square")) {
            e.target.style.backgroundColor = "orange";
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

    const size = 16;

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        gridContainer.appendChild(newDiv);
    }
};







