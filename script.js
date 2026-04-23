const rate = 17;

// cambiar precios
function updatePrices(currency){

  const prices = document.querySelectorAll("[data-mxn]");

  prices.forEach(price => {

    const mxn = price.getAttribute("data-mxn");

    if(currency === "USD"){
      price.innerText = "$ " + (mxn / rate).toFixed(2) + " USD";
    }else{
      price.innerText = "$ " + mxn + " MXN";
    }

  });

}

// cuando carga la página
window.addEventListener("DOMContentLoaded", () => {

  const currencySelect = document.getElementById("currency");

  let savedCurrency = localStorage.getItem("currency") || "MXN";

  updatePrices(savedCurrency);

  if(currencySelect){

    currencySelect.value = savedCurrency;

    currencySelect.addEventListener("change", function(){

      const newCurrency = this.value;

      localStorage.setItem("currency", newCurrency);

      updatePrices(newCurrency);

    });

  }

});