/*jshint esversion: 6 */

/* GLOBAL VARIABLES */


let elementContainer = document.getElementsByClassName("element-hero-container");
let toggledCurrency = document.getElementById("currency-title");
let circleSymbol = document.getElementById("circle-symbol");
let resultCard = document.querySelectorAll(".result-card");
let currencyOption = document.getElementById("currency");
let toggled = document.getElementsByClassName("toggled");
let elementArea = document.getElementById("search-area");
let toolButton = document.getElementById("toggle-tool");
let elementIcon = document.getElementById("crystal");
let pickaxeIcon = document.getElementById("pickaxe");
let userInput = document.querySelector(".userInput");
let btn = document.getElementById("calculate-btn");
let domAETHER = document.getElementById("aether");
let input = document.querySelector(".userInput");
let aether = document.getElementById("aether");
let loader = document.getElementById("loader");
let domUSDT = document.getElementById("usdt");
let domWAX = document.getElementById("wax");
let responseData = {};
let aetherId = "29";
let waxId = "28";
let miningPower;
let prices = {};

const elementSearchBox = document.getElementById("txt-search");
const elementTitle = document.getElementById("element-recent");
const calculate = document.getElementById("calculate-area");
const searchArea = document.getElementById("search-area");
const monthly = document.getElementById("monthly");
const weekly = document.getElementById("weekly");
const daily = document.getElementById("daily");
const WAX = "WAX";
const USDT = "USDT";


// MAIN API FETCHES PRICES EVERY 10 SECONDS
  setInterval(function () {
  fetchPrice(aetherId, `https://wax.alcor.exchange/api/markets/29`),
  fetchPrice(waxId, `https://api.coingecko.com/api/v3/coins/wax`);
}, 10000);

// CALCULATES FIGURES TO DEST
function calculateFigures(dest) {
  const resultsObject = {
    aether: {
      daily: calcDaily(dest),
      weekly: calcWeekly(dest),
      monthly: calcMonthly(dest),
    },
  };
  (resultsObject.wax = {
    // Price of WAX * Daily Aether
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
}
// WRITES TO DOM
function writeToDom(dest, data) {
  dest.innerText = data;
}
// FORMATS NUMBERS
function formatNumbers(num, decimals) {
  if (num % 1 === 0) {
    return num;
  } else {
    return num;
  }
}
// FORMATS NUMBERS V.2
function format(num, fix) {
  var p = num.toFixed(fix).split(".");
  return (
    p[0].split("").reduceRight(function (acc, num, i, orig) {
      if ("-" === num && 0 === i) {
        return num + acc;
      }
      var pos = orig.length - i - 1;
      return num + (pos && !(pos % 3) ? "," : "") + acc;
    }, "") + (p[1] ? "." + p[1] : "")
  );
}
// DRAWS FORMATTED RESULTS TO DOM
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
// CALCULATES DAILY PRICE
function calcDaily(sum1) {
  const result = sum1 * 24;
  return result;
}
// CALCULATES WEEKLY PRICE
function calcWeekly(sum1) {
  const result = sum1 * 168;
  return result;
}
// CALCULATES MONTHLY PRICE
function calcMonthly(sum1) {
  const result = sum1 * 730;
  return result;
}

// FETCHES CURRENCY PRICES
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
      $(btn).addClass("btn-danger");
      $(btn).removeClass("btn-dark");
      $(userInput).attr("placeholder", "Ready!");
      $(userInput).removeAttr("disabled");
      $(loader).addClass("hidden");
    });
}

/* EVENT LISTENERS */

  elementIcon.addEventListener("click", () => {
  elementArea.classList.remove("hidden2");
  calculate.classList.add("hidden");
  $(pickaxeIcon).css("opacity", 0.3);
  $(elementIcon).css("opacity", 1);
});
pickaxeIcon.addEventListener("click", () => {
  elementArea.classList.add("hidden2");
  calculate.classList.remove("hidden");
  $(elementIcon).css("opacity", 0.3);
  $(pickaxeIcon).css("opacity", 1);
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("calculate-btn").click();
  }
});
$(".userInput").keyup(function (event) {
  if (event.keyCode === 13) {
    $("#calculate-btn").click();
    $(resultCard).css("height", "325px");
  }
});
// MINING POWER CALCULATE BUTTON EVENT
$("#calculate-btn").click(function () {
  searchArea.hidden;
  splash.classList.add("hideSplash");
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
// RENDER LIVE PRICE TO DOM
function renderDom(data) {
  if(data.status === 404) {
    domAETHER.innerText = "Offline";
    domAETHER.innerText = "Offline";
  }
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
}
// DRAWS ELEMENTS TO DOM FOR ELEMENTAL TOOL
drawCard = "";
for (i = 0; i < data.length; i++) {
  drawCard += `<div class="value">
      <div class="element-card">
        <img src="${data[i].src}" class="element-image">
        <p class="card-title">
          ${data[i].name}
        </p>
        <p class="card-text ">
          ${data[i].cost}
          <img src="/assets/images/aether.png" class="price-image">
        </p>
      </div>
    </div>`;
  $(".card-element").html(drawCard);
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
