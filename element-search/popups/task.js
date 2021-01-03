const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add(`modal_active`);

document.querySelectorAll('.modal__close').forEach((el) => {
    el.addEventListener('click', (event) => {
        event.currentTarget.closest('div.modal').classList.remove(`modal_active`);
    })
})

document.querySelector('.show-success').addEventListener('click', () => {
    modalMain.classList.remove(`modal_active`);
    modalSuccess.classList.add(`modal_active`);
})
