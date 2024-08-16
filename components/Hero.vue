<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    default: ''
  },
  heroText: {
    type: String,
    default: ''
  }
});

const heroImg = ref();

onMounted(() => {
  const tl = gsap.timeline();
  tl.from(heroImg.value, {
    delay: 0.7,
    filter: 'blur(5px)',
    onComplete: () => {
      heroImg.value.style.filter = 'none';
    }
  });
  tl.to(heroImg.value, {
    duration: 1.5,
    opacity: 1,
    filter: 'blur(0px)',
  });
});
</script>

<template>
  <section class="Hero alignCenter">
    <div class="HeroContainer posAbsolute posFit">
      <div class="HeroContainerInner">
        <img ref="heroImg" class="HeroImage posAbsolute posFit" :src="imageUrl">
        <h1 v-if="heroText" class="HeroText posAbsolute posAbsoluteCenter marydale">{{ heroText }}</h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.Hero {
  position: relative;
  height: calc((var(--vh, 1vh)*100) - 50px);
  &Image {
    padding-top: 50px;
    object-fit: cover;
  }
  &Text {
    font-size: 42px;
    color: #FFFFFF;
  }
}
</style>