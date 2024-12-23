<template>
    <button class="bg-primary_2 rounded-md p-4 my-3 font-bold text-primary_3 text-xl">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
  name: 'AuthFormSignButton',
  props: {
    buttonText: {
      type: String,
    },
  },
};
</script>
