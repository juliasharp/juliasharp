<script setup>
//import gsap from 'gsap'
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: {
    type: String,
    default: ''
  },
  heroText: {
    type: String,
    default: 'hello'
  }
});

const heroImg = ref();

// onMounted(() => {
//   gsap.from(heroImg.value, {
//     delay: 0.5,
//     filter: 'blur(10px)',
//   });
// })
</script>

<template>
  <section class="Hero alignCenter">
    <div class="HeroContainer posAbsolute posFit">
      <div ref="heroImg" class="HeroContainerInner">
        <img class="HeroImage posAbsolute posFit" :src="imageUrl">
        <h1 class="HeroText posAbsolute posAbsoluteCenter marydale">{{ heroText }}</h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.Hero {
  position: relative;
  height: calc((var(--vh, 1vh)*100) - 45px);
  &Image {
    padding-top: 45px;
    object-fit: cover;
    @media (max-width: 767px) {
      padding-top: 20px;
    }
  }
  &Text {
    font-size: 42px;
    color: #FFFFFF;
  }
}
</style>