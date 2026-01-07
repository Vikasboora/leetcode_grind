let nums = [-1, 2, 1, -4];
let target = 1;

function solution1(nums, target) {
  let closestSum = Infinity;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
      if (target === sum) {
        return sum;
      } else if (target > sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}

console.log(solution1(nums, target));
