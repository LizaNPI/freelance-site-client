<template>
  <input
    :type="type"
    class="p-4 my-3 rounded-md"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'AuthFormInput',
  props: {
    placeholder: {
      type: String,
    },
    type: {
      type: String
    }
  },
};
</script>
