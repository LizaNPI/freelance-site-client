<script setup>
import axios from 'axios';
import ServiceListItem from '../components/Service/ServiceListItem.vue';
import { ref } from 'vue';
</script>

<template>
  <div class="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-5">
    <!-- Верхняя часть: Аватар и имя -->
    <div class="flex items-center mb-6">
      <!-- Аватар -->
      <img
        :src="avatar"
        alt="Аватар"
        class="h-20 w-20 rounded-full object-cover mr-4"
      />
      <!-- Имя и специализация -->
      <div>
        <h1 class="text-2xl font-bold text-primary_3">{{ username }}</h1>
      </div>
    </div>

    <!-- О себе -->
    <section class="mb-6">
      <h2 class="text-2xl font-semibold text-primary_3 mb-2">О себе</h2>
      <p class="text-gray-700">{{ profileInfo }}</p>
    </section>

    <!-- Предоставляемые услуги -->
    <section class="mb-6">
      <h2 class="text-xl font-semibold text-primary_3 mb-2">Услуги</h2>
      <ul>
        <ServiceListItem
          v-for="{ title, description, price, serviceId } of services"
          :key="serviceId"
          :title="title"
          :description="description"
          :price="price"
          :currency="'RUB'"
          :serviceId="serviceId"
        />
      </ul>
    </section>

    <!-- Форма для добавления услуги -->
    <section class="mt-10">
      <h2 class="text-xl font-semibold text-primary_3 mb-2">
        Добавить новую услугу
      </h2>
      <form
        @submit.prevent="addService"
        class="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4"
      >
        <input
          v-model="newService.title"
          type="text"
          placeholder="Название услуги"
          class="p-2 border border-gray-300 rounded"
        />
        <textarea
          v-model="newService.description"
          placeholder="Описание услуги"
          class="p-2 border border-gray-300 rounded"
        ></textarea>
        <input
          v-model.number="newService.price"
          type="number"
          placeholder="Стоимость"
          class="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Создать услугу
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      username: '',
      profileInfo: '',
      avatar: ref('https://via.placeholder.com/150'),
      services: [],
      editing: false,
      newService: {
        title: 'Тестирование',
        description: 'Тестируем нетестируемое',
        price: 99999,
      },
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${+userId}`
        );
        const { username, profileInfo, services } = response.data;
        this.username = username;
        this.profileInfo = profileInfo;
        this.services = services;
      } catch (error) {
        console.error('Ошибка при загрузке пользователя:', error);
      }
    },
    async addService() {
      try {
        const response = await axios.post('http://localhost:3000/services', {
          title: this.newService.title,
          description: this.newService.description,
          price: this.newService.price,
          providerId: Number(localStorage.getItem('userId')),
        });

        // Добавляем созданную услугу в список
        this.services.push(response.data); // Добавляем только что созданную услугу

        // Очищаем форму
        this.newService = {
          title: '',
          description: '',
          price: null,
        };

        alert('Услуга успешно создана!');
      } catch (error) {
        console.error('Ошибка при создании услуги:', error);
      }
    },
    async updateProfile(userId) {
      try {
        const response = await axios.put(
          `http://localhost:3000/users/${+userId}`,
          {
            username: updatedProfile.value.username,
            profileInfo: updatedProfile.value.profileInfo,
          }
        );

        // Обновляем данные профиля
        username.value = response.data.username;
        profileInfo.value = response.data.profileInfo;

        alert('Профиль успешно обновлён!');
        editing.value = false; // Завершаем редактирование
      } catch (error) {
        console.error('Ошибка при обновлении профиля:', error);
        alert('Не удалось обновить профиль.');
      }
    },
  },
  mounted() {
    this.fetchUser(localStorage.getItem('userId'));
  },
};
</script>
