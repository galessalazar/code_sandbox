function createMultiplier(factor) {
  return (number) => {
    return number * factor;
  };
}

const test = createMultiplier(3);
console.log(test(2));
console.log(test(3));
console.log(test(4));
console.log(test(5));
