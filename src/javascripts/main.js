import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';

const init = () => {
  eat.buildEatSection();
  play.buildPlaySection();
  fight.buildFightSection();
};

init();
