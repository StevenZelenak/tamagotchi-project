import util from '../helpers/util';
import tamodata from '../helpers/data/tamodata';
// checks if full varibale goes over 100 or under 0
const checkStrength = (strengthLevel) => {
  if (strengthLevel > 100) {
    tamodata.setStrength(100);
    return tamodata.getStrength();
  }
  if (strengthLevel < 0) {
    tamodata.setStrength(0);
    return tamodata.getStrength();
  }

  return tamodata.setStrength(strengthLevel);
};

// add 1 to strength if pressed
const runAway = () => {
  let strengthLevel = tamodata.getStrength();
  strengthLevel += 1;
  $('#strength-level').text(checkStrength(strengthLevel));
};

// subtract 10 from strength if pressed
const fight = () => {
  let strengthLevel = tamodata.getStrength();
  strengthLevel -= 10;
  $('#strength-level').text(checkStrength(strengthLevel));
};


// builds out the div
const buildFightSection = () => {
  let domString = '';

  domString += '<h1>Fight</h1>';
  domString += `<h2 id="strength-level">${tamodata.getStrength()}</h2>`;
  domString += '<button id="run-away">Run</button>';
  domString += '<button id="fight-battle">Fight</button>';

  util.printToDom('fight', domString);
  $('#run-away').click(runAway);
  $('#fight-battle').click(fight);
};

// exports the div builder
export default {
  buildFightSection,
};
