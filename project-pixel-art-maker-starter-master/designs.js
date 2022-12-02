// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  const table = document.querySelector("table");
  let first = table.firstElementChild;
  while (first) {
    table.removeChild(first);
    first = table.firstElementChild;
  }
  for (i = 0; i < height; i++) {
    const newrow = document.createElement("tr");
    table.appendChild(newrow);
    for (j = 0; j < width; j++) {
      const newcol = document.createElement("td");
      newrow.appendChild(newcol);
    }
  }

  // Your code goes here!
}
document.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
});
document.addEventListener("click", (event) => {
  const box = document.querySelector("td");
  const color = document.getElementById("colorPicker").value;
  box.style.backgroundColor = color;
});
