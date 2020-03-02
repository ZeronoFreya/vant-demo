import Vue from "vue";
import "normalize.css/normalize.css";
import "@/assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from 'vue-meta';

import { Button } from "vant";
Vue.use(Button);

// import Button from 'vant/lib/button';
// Vue.use(Button);
// import 'vant/lib/button/style';

Vue.use(VueMeta);

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
