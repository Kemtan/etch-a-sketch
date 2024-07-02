const container = document.querySelector(".container");
const containerSize = 960

function createGrid(gridSize = 16){
    for(let rowCol = 1; rowCol <= gridSize ** 2; rowCol++){
        const gridCell = document.createElement('div');
        gridCell.style.width = `${(containerSize / gridSize)}px`;
        gridCell.style.height = `${(containerSize / gridSize)}px`;
        gridCell.classList.add("box");
        gridCell.addEventListener('mouseover', changeGridColor);
        container.appendChild(gridCell);
    }
}
createGrid();

let resetButton = document.querySelector(".resetBtn");
resetButton.addEventListener('click', handleResetButton);

function changeGridColor(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function handleResetButton(e){
    let gridNumber = +prompt("Enter the grid size you want:", 16);
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    createGrid(gridNumber);
}