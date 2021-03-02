import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import BaseCard from "./components/ui/BaseCard";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component("base-card", BaseCard)
  .mount("#app");
