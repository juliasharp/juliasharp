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
        <img class="HeroImage posAbsolute posFit" :src="imageUrl" style="padding-top:45px;">
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
    object-fit: cover;
  }
  &Text {
    font-size: 42px;
    color: #FFFFFF;
  }
}
</style>