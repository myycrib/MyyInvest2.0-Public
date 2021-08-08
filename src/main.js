import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import { store } from "./store/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./scss/app.scss";
import "./assets/admin/styles/base.css";
import helpers from "./utils/helper";
import '@morioh/v-quill-editor/dist/editor.css';
import Editor from '@morioh/v-quill-editor'
// global register
Vue.use(Editor);

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import TheAdminLayout from "./layouts/TheAdminLayout.vue";
Vue.component("TheAdminLayout", TheAdminLayout);

import VueMeta from "vue-meta";

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

// Vue.use(VueMeta, {
//   // optional pluginOptions
//   refreshOnceOnNavigation: true
// });

// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

Vue.prototype.$Bus = new Vue();

// Vue.use(VueTelInput);

const plugin = {
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  }
};

// Vue.use(plugin);
Vue.use(VueMeta, IconsPlugin, VueTelInput, plugin);

Vue.config.productionTip = false;

store.dispatch('attemptLogin', localStorage.getItem('myyinvest-token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
})
