<template>
  <div class="category_item bg-secondary rounded-xl shadow-bottom-only w-80">
    <div
      class="category_content flex flex-col justify-center text-secondary_1 px-10 py-10 text-xl"
    >
      <p class="text-2xl font-bold text-primary_4 mb-3">{{ categoryType }}</p>
      <ul class="list-disc">
        <li v-for="catrgoryItemText of categoryListItems" class="">
            {{ catrgoryItemText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCategoryItem',
  props: {
    categoryType: {
      type: String,
    },
    categoryListItems: {
      type: Array,
    },
  },
};
</script>