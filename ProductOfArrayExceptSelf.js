const numbers = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
  const res = [];

  let startFirst = 1; // left product of the current element
  for (let i = 0; i < nums.length; i++) {
    res.push(startFirst); // all the left element's product of the current element
    startFirst = startFirst * nums[i]; // multiply the current element for next element's all left product
  }

  let startLast = 1; // right product of the current element
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = startLast * res[i]; // all the left elements product of the current element multiply with all the right elements product of the current element
    startLast = startLast * nums[i]; // multiply the current element for next element's all right product
  }
  return res;
};

console.log(productExceptSelf(numbers));
