const listOfPrices = [7, 1, 5, 3, 6, 4, 10, 50];

var maxProfit = function (prices) {
  let smallestNum = Infinity;
  let maxProfit = 0;

  for (const i of prices) {
    if (i < smallestNum) {
      smallestNum = i;
    } else {
      maxProfit = Math.max(maxProfit, i - smallestNum);
    }
  }
  return maxProfit;
};

console.log(maxProfit(listOfPrices));
