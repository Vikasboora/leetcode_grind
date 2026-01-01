let str = 'babad';

function longestPalindromeSubstring(s) {
  let maxLength = 0;
  let longest = '';

  // Helper: check if a string is palindrome
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  // Generate all substrings
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      // substring from i to j
      let sub = s.substring(i, j + 1);

      // check palindrome
      if (isPalindrome(sub)) {
        if (sub.length > maxLength) {
          maxLength = sub.length;
          longest = sub;
        }
      }
    }
  }

  return longest;
}

console.log(longestPalindromeSubstring(str));
