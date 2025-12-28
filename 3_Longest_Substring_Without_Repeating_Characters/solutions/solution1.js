let str = 'abcabcbb';

function allSubString(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let str = '';
    for (let j = i; j < s.length; j++) {
      str = str + s[j];
      result.push(str);
    }
  }
  console.log(result);
}

function uniqueSubStrint(s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    let str = '';
    for (let j = i; j < s.length; j++) {
      str = str + s[j];
      set.add(str);
    }
  }
  console.log([...set]);
}

// allSubString(str);
// uniqueSubStrint(str);

function solution1(s) {
  let obj = {};
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (obj[s[right]] !== undefined && obj[s[right]] >= left) {
      left = obj[s[right]] + 1;
    }
    obj[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(solution1(str));
