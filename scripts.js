//Tabs Activator
window.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.calc-switcher');
    tabs.forEach((item) => {
        item.addEventListener('click', function(event){
            if(event.target.classList.contains('switcher_item')){
                for(let elem of item.children){
                    elem.classList.remove('active');
                }
                event.target.classList.add('active');
            }
        });
    });
});

// Inputs Listeners

let entryInput = document.querySelector('#entryInp'),
    outerInp = document.querySelector('#outerInp');
let nowChangeDiv1 = document.querySelector('.now-exchage-1'),
    nowChangeDiv2 = document.querySelector('.now-exchage-2'),
    leftSide = document.querySelector('.left-side'),
    rightSide = document.querySelector('.right-side');


entryInput.addEventListener('input', () => {
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js', true);
    // xhr.send();
    // xhr.addEventListener('readystatechange', function(){
    //     if(xhr.readyState === 4 && xhr.status == 200){
    //         let data = JSON.parse(xhr.response);
    //         let nowCurrency = nowExchange(rightSide);
    //         if(nowCurrency == 'RUR'){
    //             outerInp.value = (entryInput.value);
    //         } else {
    //             outerInp.value = (entryInput.value / data.Valute[nowCurrency].Value).toFixed(5);
    //         }
    //     } else {
    //         outerInp.value = "Something Went Wrong";
    //     }
    // });
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                                                .then(response => {
                                                    return response.json();
                                                })
                                                .then(data => {
                                                    let nowCurrency = nowExchange(rightSide);
                                                    outerInp.value = (entryInput.value / data.Valute[nowCurrency].Value).toFixed(5);
                                                })
                                                .catch(error => {
                                                    console.log(error);
                                                    outerInp.value = "Something Went Wrong";
                                                });

    function nowExchange(sideDiv){
        return sideDiv.querySelector('.active').dataset.currency;
    }
    
});




