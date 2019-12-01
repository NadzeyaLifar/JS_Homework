var button = document.getElementsByClassName('button')[0];
var section = document.getElementsByClassName('section')[0];

button.addEventListener('click', getInfo, false);

function getInfo() {
    section.innerHTML = '';

    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.send();

    xhr.onload = function() {
	    var statusType = +String(this.status)[0];

        var users = (statusType === 2) ? JSON.parse(this.response).data : showError();

        fillInTabs(users);
    };
}

function fillInTabs(users) {
    for (var i = 0; i < users.length; i++) {
        var value = users[i];
        if (value) {
            section.insertAdjacentHTML('beforeEnd',
                '<input id="' + i + '" type="radio" name="name">' +
                '<label for="' + i + '" class="label">User ' + (i + 1) + '</label>'
                + '<div class="content"></div>');
        }
    }
    var input = section.getElementsByTagName('input')[0];

    input.setAttribute('checked', 'checked');

    var content = section.getElementsByClassName('content');
    for (var j = 0; j < content.length; j++) {
        content[j].innerHTML = '<div class="info">' + '<img src ="' + users[j].avatar + '">'
            + 'First Name: ' + users[j].first_name  + '</br>'
            + 'Last Name: ' + users[j].last_name + '</div>';
    }
}

function showError() {
    section.insertAdjacentHTML('beforeBegin',
        '<span class="error"> Oops! Something went wrong! </span>');
}