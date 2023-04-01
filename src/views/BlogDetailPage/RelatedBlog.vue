<template>
  <div class="bg-white p-4 shadow-md">
    <h3 class="text-lg font-medium mb-4">Related Articles</h3>
    <ul>
      <li class="mb-3" v-for="blog in relatedBlogs" :key="blog.id">
        <a href="#" class="text-blue-500 hover:underline">
          <div class="flex items-center">
            <div class="h-8 w-8 mr-2 rounded-full bg-gray-400"></div>
            <div>
              <h4 class="text-sm font-medium">{{ blog.title }}</h4>
              <p class="text-xs text-gray-600">{{ blog.date }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios';

const relatedBlogs = ref([]);

onMounted(() => {
  axios
    .get('/mock/blog/1/related')
    .then((response) => {
      console.log(response.data);
      relatedBlogs.value = response.data;
    })
    .catch((error) => console.log(error));
});
</script>

<style></style>
