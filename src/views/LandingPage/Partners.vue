<template>
  <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
    <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
      <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Trusted Partners Worldwide</h3>
      <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p>
      <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
        <LandingPartnerImage v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']" :key="img" :img="img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import LandingPartnerImage from '../../components/landing/PartnerImage.vue';
</script>

<style></style>
