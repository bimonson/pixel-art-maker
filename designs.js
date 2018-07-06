// Select color input
let color = document.querySelector('#colorPicker');
// Select size input
let rows = document.querySelector('#inputHeight');
let columns = document.querySelector('#inputWidth');
// When size is submitted by the user, call makeGrid()
const canvas = document.querySelector('#pixelCanvas');
// let gridReset = canvas.firstElementChild;

document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
	e.preventDefault();

	makeGrid();
});

function fillTableCellColor() {
	this.style.backgroundColor = color.value;
};

function makeGrid() {
	canvas.innerHTML = "";

	for (let r = 0; r < rows.value; r++) {
	  const newRow = document.createElement('tr');
	  canvas.appendChild(newRow);
	  for (let c = 0; c < columns.value; c++) {
		const newColumn = document.createElement('td');
		newColumn.onclick = fillTableCellColor;
		newRow.appendChild(newColumn);
	  }
	}
}
