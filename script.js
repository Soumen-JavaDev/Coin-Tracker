let data;
let apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
let table = document.querySelector("#table-body");
let search = document.querySelector("#search-box");

async function getData() {
    try {
        let response = await fetch(apiURL);
        data = await response.json();
        printData(data);
    } catch (error) {
        console.log(error);
    }
}

// Search Function
search.addEventListener("input", () => {
    let value = search.value.trim().toLowerCase();
    if (!data) return;

    let filteredData = data.filter(item => 
        item.name.toLowerCase().includes(value) ||
        item.symbol.toLowerCase().includes(value)
    );

    printData(filteredData);
});

// Render Data
function printData(reqData) {
    table.innerHTML = "";
    reqData.forEach(items => {
        let price_change_24h = parseFloat(items.price_change_24h).toFixed(2);
        let symbolUpperCase = items.symbol.toUpperCase();

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="coin-img">
                    <img src="${items.image}" alt="${items.name}" style="width: 45px; height: 45px" />
                    <div class="coin-name">${items.id}</div>
                </div>
            </td>
            <td>${symbolUpperCase}</td>
            <td>${items.current_price}</td>
            <td>${items.total_volume}</td>
            <td class="percentage_change">${price_change_24h}%</td>
            <td>Mkr Cap: ${items.market_cap}</td>
        `;

        let percentCell = tr.querySelector(".percentage_change");
        percentCell.style.color = price_change_24h < 0 ? "red" : "green";

        table.appendChild(tr);
    });
}

// Sorting Functions
function sortMkt() {
    if (!data) return;
    let newData = data.slice().sort((a, b) => b.market_cap - a.market_cap);
    printData(newData);
}

function sortPer() {
    if (!data) return;
    let newData = data.slice().sort((a, b) => b.price_change_24h - a.price_change_24h);
    printData(newData);
}

// Initialize
getData();
