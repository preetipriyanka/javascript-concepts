const myMoney = {
    quarters: 4,
    dimes: 10,
    pennies: 15
  }
  
  for(const coin of myMoney) {
    console.log(`${coin}: ${myMoney[coin]}`)
  }