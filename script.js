let data;
let search = document.querySelector("#search-box");
let table = document.querySelector("#table-body");
async function getData() {
    try {
        let respons = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        data = await respons.json();
        console.log(data);
        printData(data);
    } catch (error) {
        console.log(error);
    }
}

 search.addEventListener("input", () => {
            let valu = search.value.trim().toLowerCase();
            current_search(valu, data);
 });
function current_search(valu, data) {
    if (!data) return;
    let filteredData = data.filter((item) => {
        return (
            item.name.toLowerCase().includes(valu) ||
            item.symbol.toLowerCase().includes(valu)
        );
    });

    printData(filteredData);
}

function printData(reqData){
    table.innerHTML="";
    reqData.forEach(items => {
        let price_change_24h = parseFloat(items.price_change_24h).toFixed(2);
        let symbolUpperCase = items.symbol.toUpperCase();

        // Create a new row element
        let tdDataRow = document.createElement('tr');

        // Add content to the row
        tdDataRow.innerHTML = `
            <td>
                <div class="coin-img">
                    <img src="${items.image}" alt="" style="width: 45px; height: 45px" />
                    <div class="coin-name">${items.name}</div>
                </div>
            </td>
            <td>${symbolUpperCase}</td>
            <td>${items.current_price}</td>
            <td>${items.total_volume}</td>
            <td class="percentage_change">${price_change_24h}%</td>
            <td>Mkr Cap: ${items.market_cap}</td>
        `;

        // Select the percentage_change cell within the row
        let tdDataCel = tdDataRow.querySelector('.percentage_change');

        // Set color based on price_change_24h
        if (price_change_24h < 0) {
            tdDataCel.style.color = 'red';
        } else {
            tdDataCel.style.color = 'green';
        }

        // Append the row to the table
        table.appendChild(tdDataRow);
    });
}



function sortMkt(){
    if(!data)return;
    let newData=data.sort((a,b)=>{
          return b.market_cap - a.market_cap;
    })
    printData(newData);
}
function sortPer(){
    if(!data)return;
    let newData=data.sort((a,b)=>{
          return b.price_change_24h - a.price_change_24h;
    })
    printData(newData);
}
getData();