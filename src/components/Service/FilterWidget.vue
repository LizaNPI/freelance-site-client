<template>
  <div class="filter-category p-4 bg-gray-100 rounded-md shadow-md">
    <h3 class="text-lg font-semibold text-gray-700 mb-2">Фильтр по категориям</h3>
    <select 
      v-model="currentFilter" 
      class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
      <option value="">Все категории</option>
      <option
        v-for="{ name, displayName } in categories"
        :key="name"
        :value="name"
      >
        {{ displayName }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CategoryFilter',
  data() {
    return {
      currentFilter: '',
    };
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    onChangeFilter: {
      type: Function,
    },
  },
  watch: {
    currentFilter(newValue) {
      this.onChangeFilter(newValue);
    },
  },
};
</script>

<style scoped>
.filter-category {
  margin: 1em 0;
}
</style>