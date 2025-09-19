function storeSecret(secret) {
  return (password) => {
    if (secret === password) {
      return true;
    } else {
      return false;
    }
  };
}

const test = storeSecret("string");
console.log(test("password"));
console.log(test("1"));
console.log(test("string"));
