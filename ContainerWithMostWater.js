const data = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let leftWall = 0;
  let rightWall = height.length - 1;

  let maxArea = 0;

  while (leftWall < rightWall) {
    const newArea =
      (rightWall - leftWall) * Math.min(height[leftWall], height[rightWall]);

    if (maxArea < newArea) {
      maxArea = newArea;
    }

    if (height[leftWall] < height[rightWall]) {
      leftWall = leftWall + 1;
    } else {
      rightWall = rightWall - 1;
    }
  }

  return maxArea;
};

console.log(maxArea(data));
