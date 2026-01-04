let par = '{([])}';

function solution1(s) {
  let stack = [];
  let map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let last = stack.pop();
      if (map.get(last) !== s[i]) return false;
    }
  }

  return stack.length === 0;
}

console.log(solution1(par));
