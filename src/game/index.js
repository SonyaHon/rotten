import Events from 'events';
import DisplayManager from './display-manager';

class Game extends Events {
  constructor() {
    super();
    this.display = new DisplayManager();
  }

  setDisplay(el, options = {}) {
    el.appendChild(this.display.display.getContainer());
    setTimeout(() => {
      this.display.display.setOptions(options);
    }, 1000);
  }

  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$game = this;
  }
}

const game = new Game();
export default game;
