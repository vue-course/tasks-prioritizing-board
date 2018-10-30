import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// import firebase from 'firebase';
// import 'firebase/firestore'

// import { config } from './conf';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
