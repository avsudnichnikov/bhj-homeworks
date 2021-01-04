document.querySelectorAll('.dropdown').forEach((dropdown) => {
    const dropdownValue = dropdown.querySelector(".dropdown__value");
    const dropdownList = dropdown.querySelector(".dropdown__list");

    dropdownValue.addEventListener("click", function () {
        dropdownList.classList.toggle("dropdown__list_active");
    });

    dropdown.querySelectorAll(".dropdown__link").forEach((link) => {
        link.addEventListener("click", function (event) {
            dropdownValue.textContent = link.textContent;
            dropdownList.classList.remove("dropdown__list_active");
            event.preventDefault();
        });
    })
})
