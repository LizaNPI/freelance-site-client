<script setup>
import { ClockIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div
    class="flex flex-col items-center rounded-md bg-secondary p-10 w-fit shadow-bottom-only"
  >
    <p class="text-2xl font-bold mb-8 text-accent">
      {{ formattedPrice }}
    </p>
    <p class="text-primary_3 font-bold mb-8">
      <span class="flex">
        <ClockIcon class="h-6 w-6 text-gray-500 mr-2"/>

        <span>{{ duration }} {{ formattedDayWord }} на выполнение</span>
      </span>
    </p>
    <button
      class="bg-primary_2 text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition-all"
    >
      Заказать
    </button>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
    },
    currency: {
      type: String,
      validator: (value) => ['RUB', 'USD', 'EUR'].includes(value),
    },
    duration: {
        type: Number
    }
  },
  computed: {
    // Форматирование цены
    formattedPrice() {
      const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: this.currency,
        maximumFractionDigits: 0,
      });
      return formatter.format(this.price);
    },
    // Форматирование срока выполнения
    formattedDayWord() {
      const cases = [2, 0, 1, 1, 1, 2];
      const titles = ['день', 'дня', 'дней'];
      return titles[
        this.duration % 100 > 4 && this.duration % 100 < 20
          ? 2
          : cases[this.duration % 10 < 5 ? this.duration % 10 : 5]
      ];
    },
  },
};
</script>
