<template>
    <div class="game">
      <div class="map-display" ref="mapDisplay"></div>
      <div class="wrapper">
        <div class="stats">
          <div class="header">## Stats ##</div>
        </div>
        <div class="divider"></div>
        <div class="logs">
          <div class="header">## Logs ##</div>
        </div>
      </div>
    </div>
</template>

<script>

import Glyph from '../game/classes/glyph';
import Tile from '../game/classes/base_tile';

export default {
  name: 'app-main',
  data() {
    return {};
  },
  mounted() {
    this.$game.setDisplay(this.$refs.mapDisplay, {
      fontFamily: 'Space Mono',
      forceSquareRatio: true,
      width: 65,
      height: 54,
    });
    this.$game.display.drawTile(new Tile({ x: 10, y: 10 }, new Glyph('@', 'yellow', 'black')));
  },
};
</script>

<style lang="less" scoped>
  .game {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: black;
  }
  .map-display {
    border: 1px solid whitesmoke;
    height: calc(100% - 2px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .wrapper {
    width: calc(100% - 12px);
    padding: 6px;
    height: calc(100% - 14px);
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    border-right: 1px solid whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: whitesmoke;
    font-family: "Josefin Slab",fantasy;
    .header {
      font-weight: bolder;
      display: flex;
      width: 100%;
      height: 1em;
      margin-bottom: 6px;
    }
    .divider {
      width: 95%;
      height: 1px;
      background-color: whitesmoke;
      border-radius: 50%;
      margin-bottom: 6px;
    }
  }
  .stats {
    width: 100%;
    height: 200px;
    display: flex;
  }
  .logs {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
