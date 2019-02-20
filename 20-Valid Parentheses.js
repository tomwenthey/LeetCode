// 20. 有效的括号

var isValid = function(s) {
  let arr = [];
  if (s === "") {
    return true;
  }
  arr.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]);
    } else {
      switch (s[i]) {
        case ")":
          if (arr[arr.length - 1] === "(") {
            arr.pop();
          } else {
            return false;
          }
          break;
        case "]":
          if (arr[arr.length - 1] === "[") {
            arr.pop();
          } else {
            return false;
          }
          break;
        case "}":
          if (arr[arr.length - 1] === "{") {
            arr.pop();
          } else {
            return false;
          }
          break;
        default:
          return false;
      }
    }
  }

  if (arr.length) {
    return false;
  } else {
    return true;
  }
};
