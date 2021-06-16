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