import Vue from 'vue';
import App from './App.vue';
import store from './store';

// Styles assets
import './assets/main.css';
import '../node_modules/modern-css-reset/dist/reset.min.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
