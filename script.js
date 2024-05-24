const grid = document.querySelector("#grid");
let rows = 25;
let columns = 25;

function createGrid(row, column) {
    grid.innerHTML = ''; // Clear existing grid
    const numberOfSquares = row * column;
    const flex = 100 / row;

    for (let i = 0; i < numberOfSquares; i++) {
        const cell = document.createElement("div");
        cell.className = "grid-cell";
        grid.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            cell.style.background = "lightblue";
        })
        cell.addEventListener('click', () => {
            cell.style.background = "peachpuff";
        })
    }
}
    
createGrid(rows, columns);

const adjustGridBtn = document.querySelector("#adjust-grid");
adjustGridBtn.addEventListener('click', () => {
    const newRow = prompt("Enter a new number of rows:");
    const newColumn = prompt("Enter a new number of columns:");
    createGrid(newRow, newColumn);
});
