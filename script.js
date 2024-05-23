const grid = document.querySelector("#grid");
const numberOfSquares = 16;

for (let rowNumber = 0; rowNumber < numberOfSquares; rowNumber++) {
    //for every row we need to add 16 squares (columns)
    const row = document.createElement("div");
    for (let columnNumber = 0; columnNumber < numberOfSquares; columnNumber++){
        const column = document.createElement("div");
        row.appendChild(column);
    }
    grid.appendChild(row);
}