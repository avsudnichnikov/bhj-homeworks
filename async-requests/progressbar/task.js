const progress = document.querySelector('#progress');
const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onloadstart = function() {
        progress.value = 0.3;
    };
    xhr.upload.onprogress = function() {
        progress.value = 0.7;
    };
    xhr.upload.onload = function() {
        progress.value = 1;
    };
    xhr.upload.onerror = function() {
        progress.value = 0;
        console.error('Произошла ошибка при загрузке данных!');
    };
    xhr.send(formData);
});
