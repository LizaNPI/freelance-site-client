import { defineStore } from 'pinia';

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
