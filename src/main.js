import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure to import your router configuration

const app = createApp(App);
app.use(router); // Make sure to use the router

app.mount('#app');

