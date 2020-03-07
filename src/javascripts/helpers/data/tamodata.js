// initail variable
let full = 100;

// get variable and passes it out
const getFull = () => full;

// set the full variable
const setFull = (assignedNumber) => {
  full = assignedNumber;
  return full;
};


export default {
  getFull,
  setFull,
};
