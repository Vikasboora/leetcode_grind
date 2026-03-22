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



function solution3(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
        let char = s[right];

        if (map.has(char)){
            map.set(char, (map.get(char)+ 1))
        }
        else {
            map.set(char,1);
        }

        while (map.get(char) > 1){
            let leftside = s[left];
            map.set(leftside, map.get(leftside)-1);
            left++;
        }

        maxLength = Math.max(maxLength, right-left+1);
    }
    return maxLength;
}

console.log(solution3(str));
