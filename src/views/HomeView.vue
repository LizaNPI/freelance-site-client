<script setup lang="ts">
import HomeListInfo from '../components/Home/HomeListInfo.vue';
import HomePopularCategories from '../components/Home/HomePopularCategories.vue';
</script>

<template>
  <div class="container mx-auto flex flex-col items-center justify-center overflow-x-hidden">
    <img
      src="../assets/images/home_image.png"
      alt="home_image"
      class="w-2/3 h-auto rounded-lg shadow-md mb-4 mt-4"
    />
    <h1 class="text-2xl font-bold text-center text-primary_1 my-4">
      Найдите лучших специалистов для вашего проекта
    </h1>
    <p class="w-2/3 text-center text-xl">
      <span class="text-primary_1">Фриланс</span> - это платформа, где
      талантливые фрилансеры и амбициозные клиенты находят друг друга. Мы
      создаем пространство для успешного сотрудничества и реализации ваших идей.
    </p>
    <div class="home_info w-2/3 mt-10 mb-14 flex justify-between">
      <div class="customerInfo">
        <HomeListInfo
          :listTitle="'Для заказчиков'"
          :listItemsText="[
            'Доступ к обширной базе квалифицированных фрилансеров',
            'Удобная система поиска и фильтрации специалистов',
            'Гарантия качества выполненных работ',
            'Безопасная система оплаты',
          ]"
        />
      </div>
      <div class="freelancerInfo">
        <HomeListInfo
          :listTitle="'Для фрилансеров'"
          :listItemsText="[
            'Широкий выбор проектов в различных областях',
            'Возможность работать с клиентами со всего мира',
            'Простая система получения оплаты',
            'Инструменты для повышения вашего рейтинга',
          ]"
        />
      </div>
    </div>
    <HomePopularCategories />
  </div>
</template>
