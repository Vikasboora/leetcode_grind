let nums = [2, 7, 11, 15];
let target = 9;

var solution1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return new Array(i, j);
      }
    }
  }
};

let solutionArray = solution1(nums, target);
console.log(solutionArray);
