document.querySelectorAll(".interest__check").forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const parent = checkbox.closest('li');
        const children = parent.querySelectorAll('ul.interests_active input.interest__check');
        children.forEach((child) => {
            child.checked = checkbox.checked;
        })
    });
})
