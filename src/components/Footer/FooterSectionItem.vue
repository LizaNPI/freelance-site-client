<template>
  <div class="underline text-primary_3 flex flex-col items-start">
    <p class="text-2xl font-bold">{{ listTitle }}</p>
    <ul class="flex flex-col items-start justify-end">
      <li
        v-for="listItemText of listItemsText"
        class="text-2xl "
      >
        {{ listItemText }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterSectionItem',
  props: {
    listItemsText: {
      type: Array,
    },
    listTitle: {
      type: String,
    },
  },
};
</script>
