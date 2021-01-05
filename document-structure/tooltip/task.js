const body = document.querySelector('body');

const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
body.appendChild(tooltip);

document.querySelectorAll('a.has-tooltip').forEach((link) => {
    link.addEventListener('click', (event) => {
        function bodyClick() {
            tooltip.classList.remove('tooltip_active');
        }

        tooltip.innerText = link.getAttribute('title');
        tooltip.style.top = Number(link.getBoundingClientRect().bottom) + 'px';
        tooltip.style.left = link.getBoundingClientRect().left + 'px';

        if(!tooltip.classList.contains('tooltip_active')){
            tooltip.classList.add('tooltip_active');
            body.addEventListener('click', bodyClick, {once: true});
        }

        event.preventDefault();
        event.stopPropagation();
    })
})

