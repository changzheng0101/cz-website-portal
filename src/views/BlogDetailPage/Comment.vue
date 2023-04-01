<template>
  <div class="col-span-12 my-8">
    <div class="rounded-lg shadow-md p-4">
      <h3 class="text-lg font-medium mb-4">文章评论</h3>
      <ul class="divide-y divide-gray-200">
        <li class="py-4" v-for="comment in comments" :key="comment.id">
          <div class="flex items-center">
            <div class="h-8 w-8 mr-2 rounded-full bg-gray-400"></div>
            <div>
              <h4 class="text-sm font-medium">{{ comment.username }}</h4>
              <p class="text-xs text-gray-600">{{ comment.time }}</p>
            </div>
          </div>
          <p class="text-sm mt-2">
            {{ comment.content }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios';
const comments = ref([]);

onMounted(() => {
  axios
    .get('/mock/blog/1/comment')
    .then((response) => (comments.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<style></style>
