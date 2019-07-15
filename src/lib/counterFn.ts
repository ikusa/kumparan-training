type CounterNumber = {
  increment: () => void;
  decrement: () => void;
  getCounter: () => void;
};

export default function counterNumber() {
  let counter = 0;
  let increment = () => {
    counter = counter + 1;
  };
  let decrement = () => {
    counter = counter - 1;
  };
  let getCounter = () => {
    return counter;
  };
  return {
    increment,
    decrement,
    getCounter
  };
}
