const repeatString = function (str, times) {
  if (!times) return "";
  if (times < 0) return "ERROR";

  const mainStr = str;

  for (let i = 1; i < times; i++) {
    str += mainStr;
  }

  return str;
};

// Do not edit below this line
module.exports = repeatString;
