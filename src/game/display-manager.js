import Events from 'events';
import { Display } from 'rot-js';

class DisplayManager extends Events {
  constructor() {
    super();
    this.display = new Display();
  }

  // should be inherited from classes/BaseTile
  drawTile(tile) {
    this.display.draw(
      tile.position.x,
      tile.position.y,
      tile.glyph.character,
      tile.glyph.color,
      tile.glyph.backgroundColor,
    );
  }
}

export default DisplayManager;
