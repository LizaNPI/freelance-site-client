<template>
  <h3 class="text-primary_1 text-2xl my-2">{{ listTitle }}</h3>
  <ul class="list-disc">
    <li v-for="(text, idx) of listItemsText" :key="idx" class="">
      {{ text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeListInfo',
  props: {
    listTitle: {
      type: String,
    },
    listItemsText: {
      type: Array,
    },
  },
};
</script>
