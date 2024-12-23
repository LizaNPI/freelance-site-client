<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
</script>


<template>
  <div class="relative overflow-hidden rounded-lg shadow-lg">
    <!-- Слайды -->
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Слайд"
        class="w-full h-64 object-contain flex-shrink-0"
      />
    </div>

    <!-- Кнопки управления -->
    <button
      @click="prev"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100 transition"
    >
      <ChevronLeftIcon class="h-6 w-6" />
      <!-- <ChevronLeftIcon -->
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100 transition"
    >
      <ChevronRightIcon class="h-6 w-6" />
    </button>
  </div>
</template>

<script>
// import { ChevronLeftIcon } from '@heroicons/vue/16/solid';

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    onSlideChange: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.notifySlideChange();
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.notifySlideChange();
    },
    notifySlideChange() {
      if (this.onSlideChange) {
        this.onSlideChange(this.currentIndex);
      }
    },
  },
};
</script>
