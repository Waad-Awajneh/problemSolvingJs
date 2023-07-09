const isValid = (string) => {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if ("{([".includes(string[i])) stack.push(string[i]);
    if (")}]".includes(string[i])) {
      let x = stack.pop();
      if (!"{([".includes(x)) return false;
    }
  }
  return stack.length != 0 ? false : true;
};
console.log(isValid("()")); //true
console.log(isValid("((()))")); //true
console.log(isValid("({[]})")); //true
console.log(isValid("({}[])")); //true
console.log(isValid("({}[]])")); //false
console.log(isValid("((())")); //false
