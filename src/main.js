import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqUWsHKFI5GfXd3u1_6v4b761qrDASJCg",
  authDomain: "portforio-d9c04.firebaseapp.com",
  projectId: "portforio-d9c04",
  storageBucket: "portforio-d9c04.appspot.com",
  messagingSenderId: "937225013149",
  appId: "1:937225013149:web:608c6256a434cb9ccdd174",
  measurementId: "G-6YDTGZ4RQX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);




new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
