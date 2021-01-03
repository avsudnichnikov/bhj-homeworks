let deadCounterOutput;
let lostCounterOutput;
let deadCounter;
let lostCounter;

function gameInit() {
    deadCounterOutput = document.querySelector("#dead");
    lostCounterOutput = document.querySelector("#lost");

    document.querySelectorAll('.hole').forEach((hole) => {
        hole.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains("hole_has-mole")) {
                deadCounter += 1;
                deadCounterOutput.textContent = deadCounter;
            } else {
                lostCounter += 1;
                lostCounterOutput.textContent = lostCounter;
            }
            if (deadCounter === 10) {
                setTimeout(gameFinish, 0, true);
            } else if (lostCounter === 5) {
                setTimeout(gameFinish, 0, false);
            }
        })
    })
    gameStart();
}

function gameStart() {
    deadCounter = 0;
    lostCounter = 0;
    deadCounterOutput.textContent = '0';
    lostCounterOutput.textContent = '0';
}

function gameFinish(victory = false) {
    if (victory) {
        alert("Победа!");
    } else {
        alert("Проигрыш!");
    }
    gameStart();
}

window.addEventListener('load', gameInit);
