import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VModal from "vue-js-modal/dist/index.nocss.js";
import "vue-js-modal/dist/styles.css";
Vue.use(VModal, { dynamicDefault: { draggable: false, resizable: true } });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
