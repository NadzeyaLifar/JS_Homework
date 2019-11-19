var fieldX = document.getElementById('inputX');
var fieldY = document.getElementById('inputY');
var button = document.getElementById('button');
var div = document.getElementById('div');


function ctrlButton() {
    button.disabled = fieldX.value.trim().length === 0 || fieldY.value.trim().length === 0;
  }
  
  button.addEventListener('click', createChess, false);
  ctrlButton.call(inputX);
  ctrlButton.call(inputY);

function createChess() {
    if (isNaN(fieldX.value) || fieldX.value < 1 || fieldX.value > 10) {
        alert('Поле X - введите числовое значение от 1 до 10');
        inputX.value = '';
    }
    if (isNaN(fieldY.value) || fieldY.value < 1 || fieldY.value > 10) {
        alert('Поле Y - введите числовое значение от 1 до 10');
        inputY.value = '';
    }
    if (div.firstChild !== null) {
        div.firstChild.remove();
    }


var newTable = document.createElement('table');
newTable.className = 'table';

    for (var i = 0; i < fieldY.value; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < fieldX.value; j++) {
            var td = document.createElement('td');
            if (i % 2 === j % 2) {
                td.className = 'black';
            }
            tr.appendChild(td);
        }
        newTable.appendChild(tr);
    }
    div.appendChild(newTable);
    inputX.value = '';
    inputY.value = '';


newTable.onclick = function (event) {
var target = event.target;

    if (target.tagName === 'TD') {
        var tds = document.getElementsByTagName('td');

         for (var z = 0; z < tds.length; z++) {
            tds[z].classList.toggle('black');
            }
        }
    }
}
