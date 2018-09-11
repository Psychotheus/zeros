module.exports = function getZerosCount(number) {
  // your implementation
  //K=[N /(5^1)] +  [N /(5^2)] + [N /(5^3)] +...........+  [N /(5^n)]
  let zeroCount = 0;
  let pow = 1;
  let K = 0;

  do {
    K = Math.trunc(number / Math.pow(5, pow));
    zeroCount += K;
    pow++;
  } while (K > 1)

  return zeroCount;
}
