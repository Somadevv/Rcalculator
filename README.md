# Rcalculator

Rcalculator is a tool created to help users easily calculate their mining power based on the NFT crypto project [RPLANET](https://rplanet.io)

Before this was created, there was no easy way to calculate your earnings per day/week/month, so I created this handy tool to do all of the work for you!

# Table of contents

## Table of Contents
* [User Experience Design (UX)](#User-Experience-Design)
    * [The Strategy Plane](#The-Strategy-Plane)
        * [Site Goals](#Site-Goals)
        * [User stories](#User-Stories)

# User Experience Design

## The Strategy Plane

The world of NFTs (Non fungible tokens) are increasingly becoming more and more popular by the day, they're the hottest topic in the crypto world right now! As a follower of the [RPLANET](https://rplanet.io) project, I found it very tedious to have to manually calculate my earnings, that's where **Rcalculator** comes in.

**Rcalculator** was created for [RPLANET](https://rplanet.io) users. The aim is to provide users with an easy to use tool that will calculate and display how much their **AEHTER** per hour is earning them and convert it into other currencies such as **WAX** & **USDT**.

## Site goals
* Give users an easy to use calculation tool for their **AETHER** mining power
* Help users keep track of their crypto earnings
* Help users easily see the price of elements in other currency formats

## User stories
* As a user, I want the main purpose of the site to be clear so that I immediately know what the is intended for upon entering.
* As a user, I want the website to be responsive so that I can use other devices and have no issues
* As a user I want to be able to navigate around the website with ease so that I can view content/manipulate content
* As a user I want to be able to search and filter elements 
* As a user I want to be able to see a live price feed of the currencies 

## Wireframes

#### Splashscreen

<img src="assets/images/readme/wireframes/splash_desktop.png" alt="aether" width="250" height="200"/>
<img src="assets/images/readme/wireframes/splash_tablet.png" alt="aether" width="150" height="200"/>
<img src="assets/images/readme/wireframes/splash_mobile.png" alt="aether" width="100" height="200"/>

### Homepage

<img src="assets/images/readme/wireframes/homepage_desktop.png" alt="aether" width="250" height="200"/>
<img src="assets/images/readme/wireframes/homepage_tablet.png" alt="aether" width="170" height="200"/>
<img src="assets/images/readme/wireframes/homepage_mobile.png" alt="aether" width="100" height="200"/>



## **Currencies**

| <img src="assets/images/aether.png" alt="aether" width="50" height="50"/> | <img src="assets/images/wax.png" alt="aether" width="50" height="50"/> | <img src="assets/images/usdt.png" alt="aether" width="50" height="50"/> |
| :---: |  :---:  |  :---: |
| **AETHER** | **WAX** | **USDT** |
 


# Features

#### Existing features
* **Live price feed**
    * A live price feed of both currencies used in throughout the web application, this displays both the **AEHTER** & **WAX** live prices updated every 10 seconds. The live price of Aether is taken from [Alcor Exchange](https://wax.alcor.exchange/trade/aether-e.rplanet_wax-eosio.token) using the [Alcor API](https://docs.alcor.exchange/developers-api). The live price of Wax is taken from the [Coingekko](https://www.coingecko.com/en/coins/wax) using the [Coingekko API](https://www.coingecko.com/en/api#explore-api)
    <img src="assets/images/readme/liveprices.png" alt="mining power" width="500" height="100"/>



* **Tool selection**
    * A feature to allow users to easily change from the mining power calculator tool, to the elements tool.
    <img src="assets/images/readme/toolselector.png" alt="mining power" width="500" height="125"/>


* **Mining tool**
    * A feature to allow users to calculate their **AETHER, WAX, USD** earnings which follows an algorithm based on the live prices.
    <img src="assets/images/readme/miningpower_result.png" alt="mining power" width="500" height="200"/>



* **Elements tool**
    * A feature to allow users to search any existing element found on
    [RPLANET](https://rplanet.io/all_elements) and see the cost of that element from **AETHER** > **WAX** > **USD**
<img src="assets/images/readme/elements.png" alt="mining power" width="500" height="200"/>

#### Features Left to Implement
* **WAX Sign-in**
    * Allows users to login directly to their WAX account to pull their data automatically
* **Tool Automation**
    * Retrieve data from user account and base tool algorithms on user data

# Testing

#### Validator Tests

* **HTML**
    * No errors were returned when passing the **index.html** file through the official [W3C validator](https://validator.w3.org)
* **CSS**
    * All of the following files were passed through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator)

        * **main.css**

        <img src="assets/images/readme/MAIN_results.png" alt="mining power" width="500" height="200"/>

        <br><br>

        * **splash.css**

        <img src="assets/images/readme/SPLASH_result.png" alt="mining power" width="500" height="200"/>

        <br><br>
        
        * **typewriter.css**

        <img src="assets/images/readme/TYPEWRITER_results.png" alt="mining power" width="500" height="200"/>


        