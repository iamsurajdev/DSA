const data = [1, 2, 3];
const target = 3;

var subarraySum = function (nums, k) {
  const map = { 0: 1 };
  let prefixSum = 0;
  let count = 0;

  for (let num of nums) {
    prefixSum = prefixSum + num;

    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }

    map[prefixSum] = (map[prefixSum] || 0) + 1;
  }

  return count;
};

console.log(subarraySum(data, target));
