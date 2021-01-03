const output = document.querySelector('#timer');
let newLocation = "https://netology.ru";
const interval = 123;

const start = new Date();

function countdown(){
    function addInsignZero(number, digitCount = 2) {
        let string = `${number}`;
        if (string.length < digitCount) {
            string = '0' + addInsignZero(string, digitCount - 1);
        }
        return string;
    }

    let time = interval - Math.trunc((new Date() - start) / 1000);

    if (time < 0) {
        time = 0;
    }

    const seconds = time % 60;
    const minutes = ((time - seconds) / 60) % 60;
    const hours = Math.trunc(time / 3600);

    output.textContent = addInsignZero(hours) + ':' + addInsignZero(minutes) + ':' + addInsignZero(seconds);

    if (time > 0) {
        setTimeout(countdown, 1000);
    } else {
        setTimeout(finish, 0);
    }
}

function finish() {
    alert('Вы победили в конкурсе!');
    window.location = newLocation;
}

countdown(interval);
