// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizePicker = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");
makeGrid(10, 10); //defualt window

sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  //every time a user wants to submit a new submission,delete the previous boxes
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
  //get the height and width of the boxes that user wants to build
  const height = document.querySelector("#inputHeight").value;
  const width = document.querySelector("#inputWidth").value;
  //after a user clicks the submit button, start the function makeGrid
  makeGrid(height, width);
});

function makeGrid(height, width) {
  //Put inputs in the function as variables.
  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);

    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.style.backgroundColor = "white";
      //if a user clicks a box, the event listner begins to work for that box and changes the color using the value of the tag:colorpicker
      cell.addEventListener("click", function (event) {
        event.preventDefault();
        const color = document.querySelector("#colorPicker");
        cell.style.backgroundColor = color.value;
      });
    }
  }

  // Your code goes here!
}
