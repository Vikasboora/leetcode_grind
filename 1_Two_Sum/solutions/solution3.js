let nums = [2, 7, 11, 15];
let target = 18;

// This case will only work if the nums array is sorted
var solution3 = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right){
        let pointerSum = nums[left] + nums[right];
        if (pointerSum === target){
            return [left, right];
        }
        else if (pointerSum > target){
            right--;
        }
        else {
            left ++
        }
    }
    return [];
};

console.log(solution3(nums, target));
