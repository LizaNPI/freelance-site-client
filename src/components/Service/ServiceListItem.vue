<template>
  <li
    @click="goToServiceView"
    class="p-4 my-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-secondary"
  >
    <h3 class="text-lg font-bold text-primary_3">{{ title }}</h3>
    <p class="text-primary_3">{{ description }}</p>
    <p class="text-accent font-bold mt-2">Стоимость: {{ formattedPrice }}</p>
  </li>
</template>

<script>
import router from '../../router';

export default {
  name: 'ServiceListItem',
  props: {
    price: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    currency: {
      type: String,
    },
    serviceId: {
      type: Number,
    },
  },
  computed: {
    formattedPrice() {
      const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: this.currency,
        maximumFractionDigits: 0,
      });
      return formatter.format(this.price);
    },
  },
  methods: {
    async goToServiceView() {
      router.push({
        name: 'Service',
        params: {
          id: this.serviceId
        },
      });
    },
  },
};
</script>
