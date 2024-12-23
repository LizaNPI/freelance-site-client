<template>
  <div class="flex items-center p-4 bg-secondary rounded-lg shadow-md">
    <!-- Левая часть: Аватар и имя -->
    <div class="flex-shrink-0 mr-4 px-3 flex flex-col items-center border-r-accent border-r">
      <p class="my-3 text-sm font-semibold text-gray-700 text-center">
        {{ username }}
      </p>
      <img
        :src="avatar"
        alt="Аватар пользователя"
        class="h-12 w-12 rounded-full object-cover"
      />
    </div>

    <!-- Правая часть: Отзыв -->
    <div>
      <p class="text-gray-800 text-base">{{ reviewText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserReview',
  props: {
    avatar: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
  },
};
</script>
