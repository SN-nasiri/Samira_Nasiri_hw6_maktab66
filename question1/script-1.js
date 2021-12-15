//1- Given two strings, find the number of common characters between them.
let count = 0;
function match(s1, s2) {
  for (let index in s1) {
    s2.includes(s1[index]) ? count++ : false;
    s2 = s2.replace(s1[index], '');
  }
  return count
}
console.log(match("aabcc", "adcaa"))