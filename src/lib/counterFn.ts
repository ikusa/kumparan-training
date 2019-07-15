type CounterNumber = {
  increment: () => void;
  decrement: () => void;
  getCounter: () => void;
};
function counterNumber() {
  let counter = 0;
  let increment = () => {
    counter = counter + 1;
  };
  let decrement = () => {
    counter = counter - 1;
  };
  let getCounter = () => {
    console.log(counter);
  };
  return {
    increment,
    decrement,
    getCounter,
    resetCounter: () => {}
  };
}

let counterCall = counterNumber();
let { increment, decrement, getCounter } = counterCall;

increment();
getCounter();
increment();
getCounter();
decrement();
getCounter();
