// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizePicker = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");
makeGrid(10, 10);
sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
  const height = document.querySelector("#inputHeight").value;
  const width = document.querySelector("#inputWidth").value;
  makeGrid(height, width);
});

function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);

    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.style.backgroundColor = "white";
      cell.addEventListener("click", function (event) {
        event.preventDefault();
        const color = document.querySelector("#colorPicker");
        cell.style.backgroundColor = color.value;
      });
    }
  }

  // Your code goes here!
}
