<template>
  <li class="w-full">
    <RouterLink
      class="md:px-4 py-2 text-lg bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline"
      :to="url"
    >
      {{ name }}
    </RouterLink>
  </li>
</template>
<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>
