module.exports = function reverse (n) {
  if (n < 0) {
    n = Math.abs(n);
  let result = '';
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return Number(result);
}
}

