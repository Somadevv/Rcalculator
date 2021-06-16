let domAETHER = document.getElementById("aether");
let domWAX = document.getElementById("wax");
let domUSDT = document.getElementById("usdt");
let btn = document.getElementById("calculate-btn");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
let loader = document.getElementById("loader");
let input = document.querySelector(".userInput");
let userInput = document.querySelector(".userInput");
let toggled = document.getElementsByClassName("toggled");
let elementContainer = document.getElementsByClassName("element-hero-container");
const searchArea = document.getElementById("search-area")
const calculate = document.getElementById("calculate-area")
const elementSearchBox = document.getElementById("txt-search")
let toolButton = document.getElementById('toggle-tool');
let resultCard = document.querySelectorAll('.result-card')
const elementTitle = document.getElementById("element-recent");
let aether = document.getElementById('aether')
let currencyOption = document.getElementById("currency");
let circleSymbol = document.getElementById('circle-symbol');
let toggledCurrency = document.getElementById('currency-title')
const WAX = "WAX";
const USDT = "USDT";
let aetherId = "29";
let waxId = "28";
let miningPower;
let prices = {};
let tempAetherPrice = 0.00091517;
let responseData = {};


input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("calculate-btn").click();
  }
});
$(".userInput").keyup(function (event) {
  if (event.keyCode === 13) {(
      $("#calculate-btn").click());

      $(resultCard).css('height', '325px')
  }
});
$("#calculate-btn").click(function () {
  searchArea.hidden;
  elementIsClicked = true;
  event.preventDefault();
  document.getElementById("calculate-btn").click();
  $(".hidden").css("display", "block");
  let value = parseInt(input.value, 10);
  var reg = /^\d+$/;

  if (reg.test(value)) {
    let result = calculateFigures(value);
    for (let i = 0; i < toggled.length; i++) {
      toggled[i].innerText = "Daily";
      $(toggled[i]).css("font-size", "1.35rem").css("letter-spacing", "1px");
    }
    writeObjectToDom("aether", result.aether);
    writeObjectToDom("wax", result.wax);
    writeObjectToDom("usdt", result.usdt);
    
  } else {
    console.log("error..", inputValue, value);
  }
});
const calculateFigures = (dest) => {
    const resultsObject = {
      aether: {
        daily: calcDaily(dest),
        weekly: calcWeekly(dest),
        monthly: calcMonthly(dest),
      },
    };
    (resultsObject.wax = {
      // Price of WAX * Daily Aether
    //   daily: resultsObject.aether.daily * tempAetherPrice,
    //   weekly: resultsObject.aether.weekly * tempAetherPrice,
    //  monthly: resultsObject.aether.monthly * tempAetherPrice,
      
      daily: resultsObject.aether.daily * prices.aether,
      weekly: resultsObject.aether.weekly * prices.aether,
      monthly: resultsObject.aether.monthly * prices.aether,
    }),
      (resultsObject.usdt = {
        // Price of WAX * Daily Aether
        daily: resultsObject.wax.daily * prices.wax,
        weekly: resultsObject.wax.weekly * prices.wax,
        monthly: resultsObject.wax.monthly * prices.wax,
      });
  
    return resultsObject;
  };
  
  function writeToDom(dest, data) {
    dest.innerText = data;
  }
  function formatNumbers(num, decimals) {
    if (num % 1 === 0) {
      return num;
    } else {
      return num.toFixed(decimals);
    }
  }
  function format(num, fix) {
    var p = num.toFixed(fix).split(".");
    return p[0].split("").reduceRight(function(acc, num, i, orig) {
        if ("-" === num && 0 === i) {
            return num + acc;
        }
        var pos = orig.length - i - 1
        return  num + (pos && !(pos % 3) ? "," : "") + acc;
    }, "") + (p[1] ? "." + p[1] : "");
  }
  function writeObjectToDom(dest, data) {
    const firstId = `${dest}-0`;
    const secondId = `${dest}-1`;
    const thirdId = `${dest}-2`;
    const firstElement = document.getElementById(firstId);
    const secondElement = document.getElementById(secondId);
    const thirdElement = document.getElementById(thirdId);
  
    firstElement.innerText = format(data.daily, 0);
    secondElement.innerText = format(data.weekly, 0);
    thirdElement.innerText = format(data.monthly, 0);
  }
  
  function calcDaily(sum1) {
    const result = sum1 * 24;
    return result;
  }
  function calcWeekly(sum1) {
    const result = sum1 * 168;
    return result;
  }
  function calcMonthly(sum1) {
    const result = sum1 * 730;
    return result;
  }
  
  function fetchPrice(currencyId, url) {
    const body = {
      method: "GET",
    };
    fetch(url, body)
      .then((res) => res.json())
      .then((data) => {
        responseData[currencyId] = data;
        return data;
      })
      .then((data) => {
        renderDom(data);
        $(btn).removeAttr("disabled");
        $(btn).addClass('btn-danger');
        $(btn).removeClass('btn-dark');
        $(userInput).attr("placeholder", "Ready!");
        $(userInput).removeAttr("disabled");
        $(loader).addClass('hidden');
        // $(elementContainer).addClass('hidden');
  
  
      });
      
  }
  setInterval(function () {
    fetchPrice(aetherId, `https://wax.alcor.exchange/api/markets/29`),
      fetchPrice(waxId, `https://api.coingecko.com/api/v3/coins/wax`);
  }, 10000);
  
  
  // REMOVE THIS, IT'S THE TEMPORARY PRICE
  // domAETHER.innerText = tempAetherPrice;
  
  let usdId = "USD";
  let gbpId = "GBP";
  let eurId = "EUR";
  let cadId = "CAD";
  let audId = "AUD";
  function updateCurrency(val) {
  
    if (val === 'USD'){
      circleSymbol.innerText = '$';
      toggledCurrency.innerText = 'USD'
    } else if(val === 'GBP'){
      circleSymbol.innerText = '£';
      toggledCurrency.innerText = 'GBP'
    }else if(val === 'EUR'){
      circleSymbol.innerText = '€';
      toggledCurrency.innerText = 'EUR'
     }else if(val === 'AUD'){
      circleSymbol.innerText = 'A$';
      toggledCurrency.innerText = 'AUD'
     }else if(val === 'CAD'){
      circleSymbol.innerText = 'C$';
      toggledCurrency.innerText = 'CAD'
     }
  }
  
  const renderDom = (data) => {
    if (data.id === 29) {
      domAETHER.innerText = data.last_price;
      prices.aether = data.last_price;
    }
    if (data.id === "wax") {
      domWAX.innerText = data.market_data.current_price.usd;
      prices.wax = data.market_data.current_price.usd;
    }
    if (data.id === "uniswap-state-dollar") {
      domUSDT.innerText = data.market_data.current_price.usd;
      prices.usdt = data.market_data.current_price.usd;
    }
  };
  drawCard = "";
for (i = 0; i < elements.length; i++) {
  drawCard +=
    `<div class="value">
      <div class="element-card">
        <img src="${elements[i].src}" class="element-image">
        <p class="card-title">
          ${elements[i].name}
        </p>
        <p class="card-text ">
          ${elements[i].cost}
          <img src="/assets/images/aether.png" class="price-image">
        </p>
      </div>
    </div>`;
  $(".card-element").html(drawCard);

  /* SEEKER FUNCTION */
  if (!RegExp.escape) {
    RegExp.escape = function (s) {
      return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    };
  }

  jQuery(function () {
    var $rows = $(".values");
    $("#seeker").keyup(function () {
      var regex = new RegExp(
        RegExp.escape($.trim(this.value).replace(/\s+/g, " ")),
        "i"
      );
      $rows
        .hide()
        .filter(function () {
          var text = $(this)
            .children(".value-name")
            .text()
            .replace(/\s+/g, " ");
          return regex.test(text);
        })
        .show();
    });
  });
}


elementIcon = document.getElementById('crystal');
const pickaxeIcon = document.getElementById('pickaxe');
const elementArea = document.getElementById('search-area');
elementIcon.addEventListener('click', () => {

    elementArea.classList.remove('hidden2');
    calculate.classList.add('hidden')
    $(pickaxeIcon).css('opacity', .3)
    $(elementIcon).css('opacity', 1)
  

})
pickaxeIcon.addEventListener('click', () => {
  elementArea.classList.add('hidden2');

    calculate.classList.remove('hidden')
    $(elementIcon).css('opacity', .3)
    $(pickaxeIcon).css('opacity', 1)
})

// DROPDOWN BOX 
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  