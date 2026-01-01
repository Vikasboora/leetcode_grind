let str = 'babad';

function uniqueSubString(s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    let str = '';
    for (let j = 0; j < s.length; j++) {
      str = str + s[j];
      set.add(str);
    }
  }
  return [...set];
}

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let uniqueSubStr = uniqueSubString(str);

// This will return the length of the longest palindromic substring
function solution(arr) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      maxLength = Math.max(maxLength, arr[i].length);
    }
  }
  return maxLength;
}
// This will return the substring of the longest palindromic substring
function solution1(arr) {
  let longpalsubstr = '';
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      if (arr[i].length > longpalsubstr.length) {
        longpalsubstr = arr[i];
      }
    }
  }
  return longpalsubstr;
}

console.log(solution(uniqueSubStr));
console.log(solution1(uniqueSubStr));
