const nums = [1, 2, 3, 7, 2];

var containsDuplicate = function (nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);
  }
  return false;
};

console.log("Result >> ", containsDuplicate(nums));
