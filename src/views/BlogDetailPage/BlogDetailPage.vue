<template>
  <section class="w-full pb-12">
    <BaseSection>
      <Blog />
      <BlogDetailSideBar />
      <Comment />
    </BaseSection>
  </section>
</template>

<script setup>
import Blog from './Blog.vue';
import Comment from './Comment.vue';
import BlogDetailSideBar from './BlogDetailSideBar.vue';
</script>

<style></style>
