const grid = document.querySelector(".grid");
let gridValue = document.querySelector(".gridSize");
let gridSize = document.querySelector(".gridSize");

function createDiv (size) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
    }
}