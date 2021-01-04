const book = document.getElementById('book');
const fontSizeButtons = document.querySelectorAll('.font-size');


fontSizeButtons.forEach((fontSizeButton) => {
    fontSizeButton.addEventListener('click', (e) => {
        e.preventDefault();
        book.querySelector('.font-size_active').classList.remove('font-size_active');
        fontSizeButton.classList.add('font-size_active');

        if (fontSizeButton.classList.contains('font-size_small')) {
            book.className = 'book book_fs-small';
        } else if (fontSizeButton.classList.contains('font-size_big')) {
            book.className = 'book book_fs-big';
        } else {
            book.className = 'book';
        }
    });

})
