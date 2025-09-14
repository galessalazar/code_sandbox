function makeCounter(start) {
  let current = start;
  return {
    incrementing() {
      current += 1;
      return current;
    },
  };
}

const counter = makeCounter(1);
counter.incrementing();
console.log(counter.incrementing());
console.log(counter.incrementing());
