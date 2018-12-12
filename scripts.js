// ================
// Tabs Listeners
// ================
let tabs = document.querySelectorAll('.calc-switcher'),
    nowChangeDiv1 = document.querySelector('.now-exchage-1'),
    nowChangeDiv2 = document.querySelector('.now-exchage-2'),
    url = 'https://www.cbr-xml-daily.ru/daily_json.js';

//Tabs Activator and Set Now Exchange
window.addEventListener('DOMContentLoaded', () => {
    // Tabs Activator
    tabs.forEach((item) => {
        item.addEventListener('click', function (event) {
            if (event.target.classList.contains('switcher_item')) {
                for (let elem of item.children) {
                    elem.classList.remove('active');
                }
                event.target.classList.add('active');
            }
        });
    });

    //Set Now Exchange
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let usdCurrency = data.Valute.USD.Value;
            nowChangeDiv1.innerHTML = `1 RUR = ${(1 / usdCurrency).toFixed(4)} USD`;
            nowChangeDiv2.innerHTML = `1 USD = ${usdCurrency.toFixed(4)} RUR`;
        })
        .catch(error => {
            console.log(error);
            nowChangeDiv1.innerHTML = `Error: ${error.message}`;
            nowChangeDiv2.innerHTML = `Error: ${error.message}`;
        });
});

// ================
// Inputs Listeners
// ================
let entryInput = document.querySelector('#entryInp'),
    outerInp = document.querySelector('#outerInp');
let leftSide = document.querySelector('.left-side'),
    rightSide = document.querySelector('.right-side');

entryInput.addEventListener('input', () => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let rightCurrency = nowExchange(rightSide),
                leftCurrency = nowExchange(leftSide);
            if (leftCurrency === 'RUR') {
                outerInp.value = (entryInput.value / data.Valute[rightCurrency].Value).toFixed(5);
            } else {
                outerInp.value = (entryInput.value *
                    (data.Valute[leftCurrency].Value / data.Valute[rightCurrency].Value))
                    .toFixed(5);
            }
        })
        .catch(error => {
            console.log(error);
            outerInp.value = "Something Went Wrong";
        });

    function nowExchange(sideDiv) {
        return sideDiv.querySelector('.active').dataset.currency;
    }
});




