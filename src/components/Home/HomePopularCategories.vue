<script setup lang="ts">
import HomeCategoryItem from './HomeCategoryItem.vue';
</script>

<template>
  <h2 class="text-2xl text-primary_3 font-bold">Популярные категории</h2>
  <div
    id="popular_categories"
    class="flex flex-wrap justify-center gap-6 my-10"
  >
    <HomeCategoryItem
      :categoryType="'💻 Разработка'"
      :categoryListItems="['Веб-разработка', 'Мобильные приложения', 'Десктопные приложения']"
    />
    <HomeCategoryItem
      :categoryType="'🎨 Дизайн'"
      :categoryListItems="['UI/UX', 'Графический дизайн', 'Иллюстрации']"
    />
    <HomeCategoryItem
      :categoryType="'📝 Тексты'"
      :categoryListItems="['Копирайтинг', 'Статьи', 'Переводы']"
    />
  </div>
</template>

