function limit(fn, n) {
  let counter = 0;
  return () => {
    if (counter < n) {
      counter++;
      return fn();
    } else {
      return null;
    }
  };
}
function smile() {
  return "eww";
}

const test = limit(smile, 6);
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
