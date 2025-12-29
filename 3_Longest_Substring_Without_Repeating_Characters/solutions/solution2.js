let str = 'bbbb';

function solution2(s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }
    map.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(solution2(str));
