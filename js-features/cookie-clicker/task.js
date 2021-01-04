let cookieImg;
let clickerCount;
let clickerSpeed;
let startTime;
let counter;

function truncated(num, digit = 3) {
    const divider = 10 ** digit;
    return Math.round(num * divider) / divider;
}

function gameInit(params) {
    cookieImg = document.querySelector(params.cookieImg);
    clickerCount = document.querySelector(params.clickerCount);
    clickerSpeed = document.querySelector(params.clickerSpeed);

    startTime = new Date();
    counter = 0;

    cookieImg.addEventListener('click', gameClick);
}

function gameClick() {
    console.log(counter);
    counter += 1;
    const speed = counter / (new Date() - startTime) * 1000;

    clickerCount.textContent = counter;
    clickerSpeed.textContent = truncated(speed);
    cookieImg.classList.toggle('clicker__cookie-second_state')
}

window.addEventListener('load', function () {
    const params = {
        cookieImg: '#cookie',
        clickerCount: '#clickerCount',
        clickerSpeed: '#clickerSpeed',
    };
    gameInit(params);
});
