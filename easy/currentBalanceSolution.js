function createBankAccount(initialBalance) {
  return (amount) => {
    initialBalance += amount;
    return initialBalance;
  };
}

const test = createBankAccount(25);
console.log(test(2));
console.log(test(3));
console.log(test(4));
console.log(test(5));
console.log(test(-5));
