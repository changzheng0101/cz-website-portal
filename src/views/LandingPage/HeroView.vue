<template>
  <!-- Hero section -->
  <section id="hero" class="w-full pb-24">
    <BaseSection>
      <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
        <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase">Sign Up Today</span>
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
        >
          The World's assets
          <span class="text-header-gradient">Fastest Growing</span>
          Crypto Web App
        </h1>
        <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
          Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.
          确保正确声明字体是加载字体的重要方面。这是通过使用 font-face
          属性来声明你选择的字体来实现的。在你的Vue项目中，这个声明可以在你的根CSS文件中完成。在进入这个问题之前，我们先来看看Vue应用的结构。
        </p>
        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
          <BaseButton class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
            Get Started
          </BaseButton>
          <BaseButton class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center">
            <span>Download App</span>
          </BaseButton>
        </div>
      </div>
      <div class="hidden sm:block col-span-12 lg:col-span-6">
        <div class="w-full">
          <img data-aos="fade-up" data-aos-once="true" src="../../assets/images/hero-image.webp" class="-mt-4" alt="" />
        </div>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="../../assets/images/pattern/ellipse-1.png"
        class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="../../assets/images/pattern/ellipse-1.png"
        class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="../../assets/images/pattern/ellipse-2.png"
        class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="../../assets/images/pattern/ellipse-3.png"
        class="hidden sm:block absolute bottom-56 right-24 w-6"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="../../assets/images/pattern/star.png"
        class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
      />
    </BaseSection>
  </section>
</template>

<script setup></script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
