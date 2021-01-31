const host = 'http://localhost:8080';
const endpoint = '/api/v1/topic/all';

let url = host + endpoint;
const method = 'GET';

var request = new XMLHttpRequest();
request.open(method, url, true);

let topics = undefined;
let topicDTOs = undefined

request.onload = function() {
    topicDTOs = JSON.parse(this.response);
    console.log('Request status: ' + request.status);
    if (request.status >= 200 && request.status < 400) {
        topics = topicDTOs.map(element => {
            return element.fullName;
        });
        fillDropDown();
    } else {
        alert('Failed to load data');
    }
}

function buildArray() {
    return new Array("one", "two", "three");
}

function fillDropDown() {
    var select = document.getElementById("selectTopic");

    for (var i = 0; i < topics.length; i++) {
        var option = topics[i];
        var el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        select.appendChild(el);
    }
}

request.send();