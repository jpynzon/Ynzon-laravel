import "./bootstrap";
import router from "./router";
import { createApp } from "vue";
import App from './app.vue';

const app = createApp(App);
app.mount('#app');