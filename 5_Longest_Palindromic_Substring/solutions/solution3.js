let str = 'bancana';

function solution3(s) {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  // Helper function to expand around a center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // When loop exits, left & right are 1 step beyond the palindrome
    return right - left - 1; // palindrome length
  }

  for (let i = 0; i < s.length; i++) {
    // Odd length palindrome (center at i)
    let len1 = expandAroundCenter(i, i);

    // Even length palindrome (center between i and i+1)
    let len2 = expandAroundCenter(i, i + 1);

    let currMax = Math.max(len1, len2);

    if (currMax > maxLength) {
      maxLength = currMax;

      // Compute the new start index
      start = i - Math.floor((currMax - 1) / 2);
      console.log(i);
    }
  }

  return s.substring(start, start + maxLength);
}

console.log(solution3(str));
