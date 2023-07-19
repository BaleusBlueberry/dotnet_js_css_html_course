function PutCounter(inputNumber: number) {
  let privateCounter = inputNumber;

  return function IncreceCounter() {
    privateCounter += 1;
    return console.log(privateCounter);
  };
}

export default PutCounter;
