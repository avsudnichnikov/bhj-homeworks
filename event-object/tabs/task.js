document.querySelectorAll('.tabs').forEach((container) => {
    const tabItems = container.querySelectorAll('.tab');
    const tabContentItems = container.querySelectorAll('.tab__content');

    let activeTabIndex = Array.from(tabItems).indexOf(container.querySelector('.tab.tab_active'));

    tabItems.forEach((tab, currentTabIndex) => {
        tab.addEventListener('click', (event) => {
            tabItems[activeTabIndex].classList.remove('tab_active');
            tabContentItems[activeTabIndex].classList.remove('tab__content_active');
            tab.classList.add('tab_active');
            tabContentItems[currentTabIndex].classList.add('tab__content_active');
            activeTabIndex = currentTabIndex;
        })
    })
})
