import Vue from 'vue';
import Game from './game';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/fonts/uifont/stylesheet.css';
import './assets/fonts/mapfont/stylesheet.css';

Vue.config.productionTip = false;
Vue.use(Game);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
