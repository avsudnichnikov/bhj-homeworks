const pollField = document.querySelector('.poll');
const pollTitle = pollField.querySelector('#poll__title');
const pollAnswers = pollField.querySelector('#poll__answers');

function truncated(num, digit = 2) {
    const divider = 10 ** digit;
    return Math.round(num * divider) / divider;
}

function answerPoll(vote) {
    return function (event) {
        event.preventDefault();
        const id = event.currentTarget.dataset.id;
        const xhr = new XMLHttpRequest;
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`vote=${vote}&answer=${id}`);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                fillStat(JSON.parse(xhr.responseText));
            }
        }
    }
}

function fillPole(response) {
    pollTitle.innerText = response.data.title;
    response.data.answers.forEach((answer, id) => {
        pollAnswers.innerHTML += `<button class="poll__answer" data-id="${id}">${answer}</button>`;
    })
    pollAnswers.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', answerPoll(response.id));
    })
}

function fillStat(response) {
    pollAnswers.innerHTML = '';
    let sum = 0;
    response.stat.forEach((item) => sum += item.votes);
    response.stat.forEach((item) => {
        pollAnswers.innerHTML += `<div>${item.answer} <b>${truncated(item.votes / sum * 100)}%</b></div>`;
    })
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        fillPole(JSON.parse(xhr.responseText));
    }
}
