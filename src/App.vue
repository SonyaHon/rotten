<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
  body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    user-select: none;
  }
  #app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
