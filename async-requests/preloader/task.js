const items = document.getElementById('items');
const loader = document.getElementById('loader');

let currencies = JSON.parse(localStorage.getItem('currencies')) || [];

const decorateItem = (currency) => {
    return `
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value}</div>
          <div class="item__currency">${currency.Name}</div>`
}

const fillCurrencies = () => {
    items.innerHTML = '';
    currencies.forEach((currency) => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = decorateItem(currency);
        items.appendChild(item);
        loader.classList.remove('loader_active');
    })
}

fillCurrencies();

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        currencies = Object.values(JSON.parse(xhr.responseText).response.Valute);
        fillCurrencies();
        localStorage.setItem('currencies', JSON.stringify(currencies));
    }
}
