function createCounter(init) {
  let currentNumber = init;
  return {
    increment() {
      currentNumber += 1;
      return currentNumber;
    },
    decrement() {
      currentNumber -= 1;
      return currentNumber;
    },
    reset() {
      currentNumber = init;
      return currentNumber;
    },
  };
}
const count = createCounter(5);
console.log(count.increment());
console.log(count.decrement());
console.log(count.reset());
