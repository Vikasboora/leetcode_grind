let nums = [2, 7, 11, 15];
let target = 18;

// Solution Using Map
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

// Solution Using Object
var solution_2 = function (nums, target) {
  const object = {};
  for (let i = 0; i < nums.length; i++) {
    let secondNumber = target - nums[i];
    if (object.hasOwnProperty(secondNumber)) {
      return [i, object[secondNumber]];
    }
    object[nums[i]] = i;
  }
};

console.log(solution_2(nums, target));
