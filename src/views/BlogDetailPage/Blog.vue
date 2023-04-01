<template>
  <div class="col-span-9">
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <div class="flex items-center text-gray-500 text-sm mb-4">
      <div class="flex items-center mr-4">
        <i class="far fa-calendar-alt mr-2"></i>
        <span>{{ post.date }}</span>
      </div>
      <div class="flex items-center">
        <i class="far fa-user mr-2"></i>
        <span>{{ post.author }}</span>
      </div>
    </div>
    <div class="prose max-w-none mb-8" v-html="post.content"></div>
    <div class="flex items-center text-gray-500 text-sm">
      <div class="flex flex-wrap">
        <span v-for="(tag, index) in post.tags" :key="index" class="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
import { ref } from 'vue';

const post = ref({});

onMounted(async () => {
  axios
    .get('/mock/blog/1')
    .then((response) => {
      post.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<style></style>
