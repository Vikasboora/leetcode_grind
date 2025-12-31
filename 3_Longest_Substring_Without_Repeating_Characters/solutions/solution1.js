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
    let char = s[right];
    if (obj[char] !== undefined && obj[char] >= left) {
      left = obj[char] + 1;
    }
    obj[char] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(solution1(str));
