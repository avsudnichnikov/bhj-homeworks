const reveals = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    reveals.forEach((reveal) => {
        if (reveal.getBoundingClientRect().top < window.innerHeight && reveal.getBoundingClientRect().top > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    })
});
