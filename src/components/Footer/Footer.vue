<script setup lang="ts">
import FooterSectionItem from './FooterSectionItem.vue';
</script>

<template>
  <footer class="bg-primary_1">
    <div class="footer-container container mx-auto">
      <div class="footer-content my-10">
        <!-- <div class="footer-sections flex justify-between items-start my-12 border-b-2 pb-10 border-b-primary_3">
          <FooterSectionItem
            :listTitle="'Заказчикам'"
            :listItemsText="['Как разместить заказ', 'Гарантии', 'Безопасная сделка']"
          />
          <FooterSectionItem
            :listTitle="'Фрилансерам'"
            :listItemsText="['Как найти заказы', 'Продвижение']"
          />
          <FooterSectionItem
            :listTitle="'Поддержка'"
            :listItemsText="['Помощь', 'FAQ', 'Контакты']"
          />
        </div> -->
        <p class="underline text-primary_3">&copy; 2024 Freelance Website. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
