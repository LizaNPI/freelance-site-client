<script setup>
import authBgImage from '../assets/images/auth_page_bg.jpeg';
import AuthForm from '../components/Auth/AuthForm/AuthForm.vue';
</script>

<template>
  <div
    class="h-screen bg-left bg-black/50 transition-all duration-500 flex items-center justify-center relative overflow-hidden"
    :style="{
      backgroundImage: `url(${authBgImage})`,
      backgroundBlendMode: 'overlay',
    }"
  >
    <div class="container mx-auto">
      <div class="auth-form-content flex flex-col items-center mb-20">
        <h2 class="text-white text-3xl font-bold mb-4">Авторизация на сайте</h2>
        <AuthForm />
      </div>
    </div>
  </div>
</template>
