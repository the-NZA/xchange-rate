    // ==================
    // OLD XMLHttpRequest
    // ==================
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
    // Stay here before realise script