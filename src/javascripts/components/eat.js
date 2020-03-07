import util from '../helpers/util';
import tamodata from '../helpers/data/tamodata';
// checks if full varibale goes over 100 or under 0
const checkFull = (hunger) => {
  if (hunger > 100) {
    tamodata.setFull(100);
    return tamodata.getFull();
  }
  if (hunger < 0) {
    tamodata.setFull(0);
    return tamodata.getFull();
  }

  return tamodata.setFull(hunger);
};

// add 10 to hunger if pressed
const healthyFood = () => {
  let hungry = tamodata.getFull();
  hungry += 10;
  $('#hunger').text(checkFull(hungry));
};

// subtracts 3 from hunger if pressed
const unhealthyFood = () => {
  let hungry = tamodata.getFull();
  hungry -= 3;
  $('#hunger').text(checkFull(hungry));
};

// builds out the div
const buildEatSection = () => {
  let domString = '';

  domString += '<h1>Eat</h1>';
  domString += `<h2 id=hunger>${tamodata.getFull()}</h2>`;
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
