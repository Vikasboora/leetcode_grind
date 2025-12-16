let nums = [2, 7, 11, 15];
let target = 18;

var solution2 = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let secondNumber = target - nums[i];
    if (map.has(secondNumber)) {
      return [i, map.get(secondNumber)];
    }
    map.set(nums[i], i);
  }
};

console.log(solution2(nums, target));
