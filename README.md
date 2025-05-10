# 🚀 Coin Tracker – Crypto Market Data Project

## 🔗 Live Demo
[Click Here to View the Project](https://stalwart-faun-6cfc72.netlify.app/)

## 🎨 Design Reference
[Figma Design](https://www.figma.com/file/KakMh6wbYt0kgeUpp6HoPZ/Untitled?node-id=0%3A1&t=MOtLKh9GMDGIKHJw-1)

---

## 📌 Overview

**Coin Tracker** is a web application that fetches real-time cryptocurrency market data using the [CoinGecko API](https://www.coingecko.com/en/api). The data is displayed in a dynamic table format, with features like **search** and **sorting** based on market cap and percentage change. The project demonstrates the use of promises with both `.then` and `async/await`.

---

## 🔥 Features

- Fetch cryptocurrency data using both `.then` and `async/await`
- Display coin information: name, symbol, image, current price, market cap, and volume
- Implement search by coin name or symbol
- Enable sorting by market cap and 24-hour percentage change
- Responsive table layout for clean presentation
- Live demo deployed online

---

## ⚙️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- CoinGecko Public API

---

## 📡 API Used
### Endpoint:
`https://api.coingecko.com/api/v3/coins/markets`


### Parameters:
- vs_currency=usd
- order=market_cap_desc
- per_page=10
- page=1
- sparkline=false

---

## 🛠 Functionality Overview

- **Data Fetching**: Implemented using both `.then()` and `async/await`
- **Table Rendering**: Dynamically generates rows with coin data
- **Search**: Filters results based on input (by name or symbol)
- **Sorting**:
  - Sort by market cap
  - Sort by 24h percentage change

---


