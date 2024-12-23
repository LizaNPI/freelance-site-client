import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/index.css';
import { createPinia, defineStore } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(router);

export const useUserStore = defineStore('user', {   
  state: () => ({
    userAuthorized: false, // Состояние авторизации
    userId: null, // ID пользователя
  }),

  actions: {
    setUserAuthorized(status) {
      this.userAuthorized = status;
    },
    setUserId(id) {
      this.userId = id;
    },
  },
});

app.mount('#app');
