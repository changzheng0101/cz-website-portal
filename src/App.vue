<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <AboutView />
</template>

<script setup>
import AboutView from './views/AboutView.vue';
import { onMounted } from 'vue';
import { getUsers } from '@/api/user';
import axios from 'axios';

onMounted(async () => {
  const result = await getUsers();
  console.log('running in ' + import.meta.env.MODE);
  console.log(import.meta.env);
  const data = await axios.get('/mock/test');
  console.log(data.data);
});
</script>

<style scoped></style>
