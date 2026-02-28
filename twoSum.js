const nums = [1, 2, 4];
const target = 6;

var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};

const res = twoSum(nums, target);

console.log("res >>> ", res);

