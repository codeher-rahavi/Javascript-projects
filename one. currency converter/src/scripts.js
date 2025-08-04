let api= `https://v6.exchangerate-api.com/v6/41fe11c7f1383efaca90fedd/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//create dropdown from the currencies array

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});
//repeate the same thing for the other dropdown
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});
//setting defaut values
fromDropDown.value = "USD";
toDropDown.value = "INR";
let convertCurrency =() => {
    //create Reference
    const amount = document.querySelector('#amount').value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if(amount.length !=0){
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                console.log(convertedAmount);
                result.innerHTML=`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    }
    else{
        alert("please fill the amount");
    }

};

document.querySelector("#convert-button").addEventListener("click",convertCurrency);
window.addEventListener("load",convertCurrency);
