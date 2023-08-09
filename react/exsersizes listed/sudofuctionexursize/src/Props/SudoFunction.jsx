function SudoFunction() {
  let current;
  let previus;
  let pritedValue;

  function next() {
    if (typeof current != "number") {
      current = 1;
      previus = 0;
      return console.log(current);
    } else {
      pritedValue = current + previus;
      previus = current;
      current = pritedValue;
      return console.log(pritedValue);
    }
  }
  return { next };
}

export default SudoFunction;
