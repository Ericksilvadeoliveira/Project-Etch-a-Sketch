const container = document.querySelector('.container');
let rows = document.getElementsByClassName('row');
let cells = document.getElementsByClassName('cell');

function createGrid() {
    createRows(16);
    createCollums(16);
}

//Criar linha 
function createRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        const row = document.createElement('div');
        container.appendChild(row).className('row');
    };
}

function createCollums(cellNum) {
    for (c = 0; c < cellNum; c++);
    const newCell = document.createElement('div');
    conta
}