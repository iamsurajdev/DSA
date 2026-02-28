const nums = [1, 2, 4];
const target = 6;

var twoSum = function(nums, target) {
    const map = new Map(); // initiating hash map

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // checking the remaining value of target

        if (map.has(complement)) { // checking is the hashmap has the remaining value or not
            return [map.get(complement), i]; // return the remaining value index & current index
        }

        map.set(nums[i], i); // setting the current value with the index
    }
};

const res = twoSum(nums, target);

console.log("res >>> ", res);

