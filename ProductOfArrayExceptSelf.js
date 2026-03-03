const numbers = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
  const res = [];

  let startFirst = 1;
  for (let i = 0; i < nums.length; i++) {
    res.push(startFirst);
    startFirst = startFirst * nums[i];
  }

  let startLast = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = startLast * res[i];
    startLast = startLast * nums[i];
  }
  return res;
};

console.log(productExceptSelf(numbers));
