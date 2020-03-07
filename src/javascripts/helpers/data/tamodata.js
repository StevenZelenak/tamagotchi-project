// initail variable
let full = 100;
let fun = 50;

// gets full variable and passes it out
const getFull = () => full;

// set the full variable
const setFull = (assignedNumber) => {
  full = assignedNumber;
  return full;
};

// gets fun variable and passes it out
const getFun = () => fun;

// set the fun variable
const setFun = (assignedNumber) => {
  fun = assignedNumber;
  return fun;
};


export default {
  getFull,
  setFull,
  getFun,
  setFun,
};
