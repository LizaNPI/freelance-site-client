<script setup>
import axios from 'axios';
import AuthFormInput from './AuthFormInput.vue';
import AuthFormSignButton from './AuthFormSignButton.vue';
import router from '../../../router';
</script>

<template>
  <form @submit.prevent="onFormSubmit" class="flex flex-col w-1/3">
    <AuthFormInput
      v-model="username"
      placeholder="Имя пользователя..."
      :type="'input'"
    />
    <AuthFormInput
      v-model="password"
      placeholder="Пароль ..."
      :type="'password'"
    />
    <AuthFormSignButton button-text="Авторизоваться" />
  </form>
</template>

<script>

export default {
  name: 'AuthForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async onFormSubmit() {
      try {
        console.log('😚', {
          username: this.username,
          password: this.password,
        });
        // Пример запроса к API для получения категорий
        const response = await axios.post('http://localhost:3000/users/auth', {
          username: this.username,
          password: this.password,
        });

        const userId = response.data.user.userId

        console.log('response.data  USASAS:>> ', response.data);

        if (response.data.ok) {
          localStorage.setItem('userAuthorized', true);
          localStorage.setItem('userId', userId);
          router.push({ name: 'Profile' });
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
    },
  },
};
</script>
