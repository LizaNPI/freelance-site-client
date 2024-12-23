<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
import HeaderNav from './HeaderNav.vue';
</script>

<template>
  <header class="sticky top-0 bg-primary_1 py-6 px-6 shadow-bottom-only z-50">
    <div class="container mx-auto flex items-center">
      <h1 class="flex-1 font-bold text-2xl text-white">FREELANCE</h1>
      <HeaderNav />
      <div class="cart">
        <ShoppingCartIcon class="w-6 h-6 text-white cursor-pointer" />
      </div>
      <button
        class="text-primary_3 font-bold bg-primary_2 rounded-md px-2 ml-5"
      >
        <router-link to="/auth">Войти</router-link>
      </button>
    </div>
  </header>
</template>

<style>
nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      userAuthorized: false,
    };
  },
  mounted() {
    this.userAuthorized = localStorage.userAuthorized;
  },
  methods: {
    logout() {
      localStorage.removeItem('userAuthorized');
    },
  },
};
</script>
