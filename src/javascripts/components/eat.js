import util from '../helpers/util';

// initail variable
let full = 100;

// get variable and passes it out
const getFull = () => {
  return full;
};

// set the full variable
const setFull = (assignedNumber) => {
  full = assignedNumber;
  return full;
};

// checks if full varibale goes over 100 or under 0
const checkFull = (something) => {
  if (something > 100) {
    something = 100;
    return something;
  }
  if (something < 0) {
    something = 0;
    return something;
  }

  return something;
};

// add 10 to hunger if pressed
const healthyFood = () => {
  let hungry = getFull();
  hungry += 10;
  setFull(checkFull(hungry));
  buildEatSection();
};

// subtracts 3 from hunger if pressed
const unhealthyFood = () => {
  let hungry = getFull();
  hungry -= 3;
  setFull(checkFull(hungry));
  buildEatSection();
};

// builds out the div
const buildEatSection = () => {

  let domString = '';

  domString += '<h1>Eat</h1>';
  domString += `<h2>${getFull()}</h2>`;
  domString += '<button id="healthy-food">Healthy Food</button>';
  domString += '<button id="unhealthy-food">Unhealthy Food</button>';

  util.printToDom('eat', domString);
  $('#healthy-food').click(healthyFood);
  $('#unhealthy-food').click(unhealthyFood);
};

// exports the div builder
export default {
  buildEatSection,
};
