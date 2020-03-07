import util from '../helpers/util';
import tamodata from '../helpers/data/tamodata';
// checks if full varibale goes over 100 or under 0
const checkFun = (funLevel) => {
  if (funLevel > 100) {
    tamodata.setFun(100);
    return tamodata.getFun();
  }
  if (funLevel < 0) {
    tamodata.setFun(0);
    return tamodata.getFun();
  }

  return tamodata.setFun(funLevel);
};

// add 50 to Fun if pressed
const superFun = () => {
  let funLevel = tamodata.getFun();
  funLevel += 50;
  $('#fun-level').text(checkFun(funLevel));
};

// add 2 to fun if pressed
const slightlyFun = () => {
  let funLevel = tamodata.getFun();
  funLevel += 2;
  $('#fun-level').text(checkFun(funLevel));
};

// builds out the div
const buildPlaySection = () => {
  let domString = '';

  domString += '<h1>Play</h1>';
  domString += `<h2 id=fun-level>${tamodata.getFun()}</h2>`;
  domString += '<button id="super-fun">Super Fun</button>';
  domString += '<button id="slightly-fun">Slightly Fun</button>';

  util.printToDom('play', domString);
  $('#super-fun').click(superFun);
  $('#slightly-fun').click(slightlyFun);
};

// exports the div builder
export default {
  buildPlaySection,
};
