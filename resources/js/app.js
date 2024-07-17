import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
