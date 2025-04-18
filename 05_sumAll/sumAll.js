const sumAll = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (`${num1}`.includes(".") || `${num2}`.includes(".")) return "ERROR";

  let startRange = num1 > num2 ? num2 : num1;
  let endRange = startRange === num1 ? num2 : num1;

  let sum = num1 + num2;

  for (let i = startRange + 1; i < endRange; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
