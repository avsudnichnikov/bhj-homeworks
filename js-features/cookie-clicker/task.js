let cookieImg;
let clickerCount;
let clickerSpeed;
let startTime;
let counter;
let cookieState;
let cookieImgMinHeight;
let cookieImgMaxHeight;

function truncated(num, digit = 3) {
    const divider = 10 ** digit;
    return Math.round(num * divider) / divider;
}

function gameInit(params) {
    cookieImg = document.querySelector(params.cookieImg);
    clickerCount = document.querySelector(params.clickerCount);
    clickerSpeed = document.querySelector(params.clickerSpeed);

    cookieImgMinHeight = params.cookieImgMinHeight || 150;
    cookieImgMaxHeight = params.cookieImgMaxHeight || 200;

    cookieImg.width = cookieImgMinHeight;

    startTime = new Date();
    counter = 0;
    cookieState = 0;

    cookieImg.addEventListener('click', gameClick);
}

function gameClick() {
    console.log(counter);
    counter += 1;
    const speed = counter / (new Date() - startTime) * 1000;

    clickerCount.textContent = counter;
    clickerSpeed.textContent = truncated(speed);

    if (cookieState) {
        cookieImg.width = cookieImgMinHeight;
        cookieState = 0;
    } else {
        cookieImg.width = cookieImgMaxHeight;
        cookieState = 1;
    }
}

window.addEventListener('load', function () {
    const params = {
        cookieImg: '#cookie',
        clickerCount: '#clickerCount',
        clickerSpeed: '#clickerSpeed',
        cookieImgMinHeight: 150,
        cookieImgMaxHeight: 200,
    };
    gameInit(params);
});
