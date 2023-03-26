<template>
  <div>
    <img :src="`./src/assets/images/partner/${img}`" class="sm:w-1/2 lg:w-72 mx-auto" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
  },
};
</script>
