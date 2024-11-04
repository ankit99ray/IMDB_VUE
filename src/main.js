import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router.js';
import store from './store/index.js';
import 'vuetify/styles';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});
app.use(store);
app.use(router);
app.use(vuetify);

app.mount('#app');
