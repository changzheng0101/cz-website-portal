<template>
  <!-- Getting started section -->
  <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
    <div class="w-full py-16 flex flex-col items-center">
      <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">Get started in just a few minutes</h2>
      <div
        data-aos="fade-up"
        class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
      >
        <LandingStep v-for="step in steps" :key="step.title" :step="step" />
        <img
          src="../../assets/images/getting-started/arrow.png"
          class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
          alt=""
        />
        <img
          src="../../assets/images/getting-started/arrow.png"
          class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import LandingStep from '../../components/landing/Step.vue';
const steps = [
  {
    img: 'sign-up.png',
    title: 'Sign Up',
    description: 'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
  },
  {
    img: 'fund.png',
    title: 'Fund',
    description: 'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
  },
  {
    img: 'buy-crypto.png',
    title: 'Buy Crypto',
    description: 'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere',
  },
];
</script>

<style></style>
