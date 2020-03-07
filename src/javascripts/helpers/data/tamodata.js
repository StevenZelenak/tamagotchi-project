// initail variable
let full = 100;
let fun = 50;
let strength = 100;
let energy = 50;

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

// gets strength variable and passes it out
const getStrength = () => strength;

// set the strength variable
const setStrength = (assignedNumber) => {
  strength = assignedNumber;
  return strength;
};

// gets strength variable and passes it out
const getEnergy = () => energy;

// set the strength variable
const setEnergy = (assignedNumber) => {
  energy = assignedNumber;
  return energy;
};

export default {
  getFull,
  setFull,
  getFun,
  setFun,
  getStrength,
  setStrength,
  getEnergy,
  setEnergy,
};
