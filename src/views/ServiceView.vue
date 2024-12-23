<template>
  <div class="container mx-auto flex gap-4 my-5">
    <!-- Левая колонка: карусель и описание -->
    <main class="flex-1 bg-gray-100 p-4 rounded-lg shadow">
      <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>

      <Carousel
        :images="images"
        :onSlideChange="handleSlideChange"
        class="mb-6"
      />
      <!-- Описание услуги -->
      <!-- TODO -->
      <!-- <h2 class="text-xl font-semibold mb-4">Описание услуги</h2> -->
      <h2 class="text-xl font-semibold mb-4">{{ description }}</h2>

      <!-- TODO -->
      <!-- <p class="md-4">
        {{ serviceDescription }}
      </p> -->
      <p class="md-4">
        {{ description }}
      </p>

      <div id="reviews" class="my-12">
        <h3 class="text-2xl font-bold my-5">Отзывы</h3>
        <div class="reviews-container">
          <UserReview
            avatar="https://via.placeholder.com/150"
            username="Мария Петрова"
            reviewText="Очень понравился этот продукт. Буду заказывать ещё!"
          />
        </div>
      </div>
    </main>
    <!-- Правая колонка: стоимость и кнопка -->
    <aside
      class="w-1/4 p-10 bg-gray-100 rounded-lg flex flex-col justify-between items-center"
    >
      <ServiceOrder :price="price" :currency="'RUB'" :duration="Math.floor(Math.random() * 30)" />
    </aside>
  </div>
</template>

<script>
import { ref } from 'vue';
import image1 from '../assets/images/ServiceImage1.png';
import image2 from '../assets/images/home_image.png';
import image3 from '../assets/images/auth_page_bg.jpeg';
import Carousel from '../components/UI/Carousel.vue';
import ServiceOrder from '../components/Service/ServiceOrder.vue';
import UserReview from '../components/Service/UserReview.vue';
import axios from 'axios';
const images = ref([image1, image2, image3]);

export default {
  components: { Carousel, ServiceOrder, UserReview },
  data() {
    return {
      images: ref([image1, image2, image3]),
      currentSlide: 0,
      creationDate: '',
      description: '',
      price: 0,
      title: '',
    };
  },
  mounted() {
    this.fetchService(+this.id);
  },
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    async fetchService(serviceId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/services/${serviceId}`
        );
        const { creationDate, description, price, title } = response.data;
        this.creationDate = creationDate;
        this.description = description;
        this.price = price;
        this.title = title;
      } catch (error) {
        console.error('Ошибка при загрузке услуг:', error);
      }
    },
    handleSlideChange(index) {
      this.currentSlide = index;
    },
  },
};
</script>
