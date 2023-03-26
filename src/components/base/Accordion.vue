<template>
  <li class="relative border-b-2 border-gray-200">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="font-medium">{{ accordion.title }}</span>
        <ChevronUpIcon v-if="selected" :size="20" />
        <ChevronDownIcon v-else :size="20" />
      </div>
    </button>

    <transition name="slide">
      <div v-if="selected" class="relative overflow-hidden transition-all duration-700" style="">
        <div class="py-2">
          <p class="text-sm text-gray-700 tracking-wide leading-relaxed">
            {{ accordion.description }}
          </p>
        </div>
      </div>
    </transition>
  </li>
</template>
<script>
// 手风琴组件
export default {
  name: 'BaseAccordion',
  props: {
    accordion: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
};
</script>
<style scoped>
/* fix this strange animation */
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 120px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
