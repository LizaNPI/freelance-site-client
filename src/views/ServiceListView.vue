<script setup>
import axios from 'axios';
import FilterWidget from '../components/Service/FilterWidget.vue';
import ServiceListItem from '../components/Service/ServiceListItem.vue';
</script>

<template>
  <div class="container mx-auto">
    <FilterWidget :categories="categories" :onChangeFilter="fetchServices" />

    <ul>
      <ServiceListItem
        v-for="{ title, description, price, serviceId } of services"
        :title="title"
        :description="description"
        :price="price"
        :currency="'RUB'"
        :serviceId="serviceId"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServiceListView',
  setup() {},
  data() {
    return {
      services: [],
      categories: [],
    };
  },
  mounted() {
    this.fetchServices(); // Загрузка данных при монтировании компонента
    this.fetchCategories();
  },
  methods: {
    async fetchServices(filter = '') {
      try {
        const response = await axios.get(
          `http://localhost:3000/services?filter=${filter}`
        );
        this.services = response.data; // Обновление списка услуг
        console.log('response.data SERVICES :>> ', response.data);
      } catch (error) {
        console.error('Ошибка при загрузке услуг:', error);
      }
    },
    async fetchCategories() {
      try {
        // Пример запроса к API для получения категорий
        const response = await axios.get(`http://localhost:3000/categories`);
        this.categories = await response.data;
      } catch (error) {
        console.error('Ошибка:', error);
      }
    },
  },
  props: {
    category: {
      type: String,
      default: null,
    },
  },
};
</script>
