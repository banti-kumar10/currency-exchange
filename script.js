const exchangeRates = {
    USD: {
        EUR: 0.84,
        GBP: 0.75
    },
    EUR: {
        USD: 1.19,
        GBP: 0.89
    },
    GBP: {
        USD: 1.33,
        EUR: 1.12
    }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted amount: ${amount} ${toCurrency}`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `Converted amount: ${convertedAmount} ${toCurrency}`;
}
