var addButton = document.getElementsByClassName('button')[0],
    table = document.getElementsByTagName('table')[0];

addButton.onclick = function() {
    table.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>');
};

table.onclick = function(event) {
var target = event.target,
    cellArr = document.getElementsByTagName('td');
    for (var i = 0; i < (cellArr.length - 1); i++) { 
        if (target === cellArr[i]) {
        var cellContent = cellArr[i].textContent;

        var enterText = cellArr[i];
        enterText.innerHTML = '<input type = "text">';

        var input = document.getElementsByTagName('input')[0];

        input.focus();

        input.value = cellContent;

        input.onblur = function(event) {
            enterText.innerHTML = event.target.value;
        };

        input.onkeydown = function(event) {
            if (event.keyCode === 13) {
                input.blur();
                }
            };
        }
    }
};