class BaseTile {
  constructor(position, glyph) {
    this.position = position;
    this.glyph = glyph;
  }

  set(position, glyph) {
    this.position = position;
    this.glyph = glyph;
  }

  setPosition(position) {
    this.position = position;
  }

  setGlyph(glyph) {
    this.glyph = glyph;
  }
}

export default BaseTile;
