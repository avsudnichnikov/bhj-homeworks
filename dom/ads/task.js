document.querySelectorAll('.rotator').forEach((container) => {
    const rotatorCases = container.querySelectorAll('.rotator__case');
    const activeRotatorCase = Array.from(rotatorCases).indexOf(container.querySelector('.rotator__case_active'));

    function changeRotator(index) {
        const timeout = rotatorCases[index].dataset.speed || 1000;
        const nextIndex = (index < rotatorCases.length - 1) ? index + 1 : 0;
        rotatorCases[index].style.color = rotatorCases[index].dataset.color || 'black';
        setTimeout(() => {
            rotatorCases[nextIndex].classList.add('rotator__case_active');
            rotatorCases[index].classList.remove('rotator__case_active');
            changeRotator(nextIndex);
        }, timeout);
    }

    changeRotator(activeRotatorCase);
})
