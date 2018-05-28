import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {createRouter} from './router/router.js'

export function createApp() {
  const router = createRouter();

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });

  return { app, router };
}

//new Vue({
//  el: '#app',
//  render: h => h(App)
//})
