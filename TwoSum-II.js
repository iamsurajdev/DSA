const numbers = [1, 2, 4, 6];
const target = 8;

var twoSum = function (numbers, target) {
  let leftPointerIndex = 0;
  let rightPointerIndex = numbers.length - 1;

  while (leftPointerIndex < rightPointerIndex) {
    let summedValue = numbers[leftPointerIndex] + numbers[rightPointerIndex];

    if (summedValue == target) {
      return [leftPointerIndex + 1, rightPointerIndex + 1];
    }

    if (summedValue > target) {
      rightPointerIndex = rightPointerIndex - 1;
    } else {
      leftPointerIndex = leftPointerIndex + 1;
    }
  }
};

console.log(twoSum(numbers, target));
