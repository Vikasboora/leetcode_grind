let str = 'abcabcbb';

// abcabcbb
// bbbb
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
  let set = new Set();
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let str = '';
    for (let j = i; j < s.length; j++) {
      str = str + s[j];
      set.add(str);
    }
  }
  let arr = [...set];
  for (let i = 0;i < arr.length;i++){
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  console.log(max)
}

solution1(str);
