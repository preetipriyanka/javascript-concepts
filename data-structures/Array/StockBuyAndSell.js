// Given an array price[] of length N, representing the 
// prices of the stocks on different days, the task is to 
// find the maximum profit possible for buying and selling 
// the stocks on different days using transactions where 
// at most one transaction is allowed.

function maxProfit(prices) {
    let globalProfit = 0;
    let minProfit = Infinity;

    for(let i =0; i<prices.length; i++) {
        if(prices[i] < minProfit) {
            minProfit = prices[i];
        }

        const currentProfit = prices[i] - minProfit;

        if(currentProfit > globalProfit) {
            globalProfit = currentProfit;
        }
    }
    return globalProfit;
}

let prices = [100, 300, 200, 50, 40, 500, 450];
console.log(maxProfit(prices));
