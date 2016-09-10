var cells = [];
var size = 10;

window.onload = initiate;

function initiate () {
  var theTable = document.createElement('table');
  for (var i = 0; i < size; i++)
    theTable.appendChild(createRow(i));
  document.body.appendChild(theTable);
  startAnimation();
}

function createRow (j) {
  var newRow = document.createElement('tr');
  for (var i = 0; i < size; i++) {
    cells[(j * size) + i] = document.createElement('td');
    newRow.appendChild(cells[(j * size) + i]);
  }
  return newRow;
}

function startAnimation () {
  setInterval(triggerCell, 10);
}

function triggerCell () {
  cells[Math.floor(Math.random() * size * size)].style.background = 'rgb('
    + Math.floor(Math.random() * 256) + ','
    + Math.floor(Math.random() * 256) + ','
    + Math.floor(Math.random() * 256)
    + ')';
}
