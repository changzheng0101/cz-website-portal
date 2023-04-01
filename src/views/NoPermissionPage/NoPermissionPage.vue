<template>
  <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span class="sr-only">Error</span>
          403
        </h2>
        <p class="text-2xl font-semibold md:text-3xl">抱歉，您没有权限访问....</p>
        <p class="mt-4 mb-8 dark:text-gray-400">莫急莫急，小问题，再逛逛别的东西吧~ god bless your code！</p>
        <RouterLink to="/home" v-slot="{ navigate }">
          <BaseButton
            rel="noopener noreferrer"
            @click="navigate"
            class="px-8 py-3 font-semibold rounded bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white dark:bg-violet-400 dark:text-gray-900"
          >
            返回主页
          </BaseButton>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
