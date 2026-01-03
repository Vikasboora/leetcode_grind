let digits = '2347';

function solution1(digit) {
  if (digit.length === 0) {
    return [];
  }
  let map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);

  let result = [];

  function backtrack(index, path) {
    if (index === digit.length) {
      result.push(path);
      return;
    }
    let letter = map.get(digit[index]);
    for (let ch = 0; ch < letter.length; ch++) {
      backtrack(index + 1, path + letter[ch]);
    }
  }

  backtrack(0, '');
  return result;
}

console.log(solution1(digits));
