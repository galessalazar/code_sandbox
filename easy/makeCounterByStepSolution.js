function makeCounterBy(step) {
  let counter = step;
  return () => {
    counter += step;
    return counter;
  };
}
const test = makeCounterBy(2);

console.log(test());
console.log(test());
console.log(test());
console.log(test());
