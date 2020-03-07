import util from '../../helpers/util';
import tamodata from '../../helpers/data/tamodata';
// checks if full varibale goes over 100 or under 0
const checkEnergy = (energyLevel) => {
  if (energyLevel > 100) {
    tamodata.setEnergy(100);
    return tamodata.getEnergy();
  }
  if (energyLevel < 0) {
    tamodata.setEnergy(0);
    return tamodata.getEnergy();
  }

  return tamodata.setEnergy(energyLevel);
};

// add 50 to Energy if pressed
const shortNap = () => {
  let energyLevel = tamodata.getEnergy();
  energyLevel += 50;
  $('#energy-level').text(checkEnergy(energyLevel));
};

// add 60 from Energy if pressed
const deepSlumber = () => {
  let energyLevel = tamodata.getEnergy();
  energyLevel += 60;
  $('#energy-level').text(checkEnergy(energyLevel));
};


// builds out the div
const buildSleepSection = () => {
  let domString = '';

  domString += '<h1>Sleep</h1>';
  domString += `<h2 id="energy-level">${tamodata.getEnergy()}</h2>`;
  domString += '<button id="short-nap">Short Nap</button>';
  domString += '<button id="deep-slumber">Deep Slumber</button>';

  util.printToDom('sleep', domString);
  $('#short-nap').click(shortNap);
  $('#deep-slumber').click(deepSlumber);
};

// exports the div builder
export default {
  buildSleepSection,
};
