import '../styles/main.scss';
import eat from './components/Eat/eat';
import play from './components/Play/play';
import fight from './components/Fight/fight';
import sleep from './components/Sleep/sleep';

const init = () => {
  eat.buildEatSection();
  play.buildPlaySection();
  fight.buildFightSection();
  sleep.buildSleepSection();
};

init();
