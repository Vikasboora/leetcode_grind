let target = 7;
let nums = [2,3,1,2,4,3];

function solution1(nums, target) {
  let left = 0;
  let sum = 0;
  let minlength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum = sum + nums[right];

    while (sum >= target) {
      minlength = Math.min(minlength, right - left + 1);
      sum = sum - nums[left];
      left++;
    }
  }
  return minlength === Infinity ? 0 : minlength;
}

console.log(solution1(nums, target));
