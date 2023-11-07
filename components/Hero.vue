<template>
  <div class="Hero">
    <div class="HeroContainer">
      <div ref="heroImg" class="HeroContainerInner">
        <img class="HeroImage posAbsoluteCenter" src="~/public/pipes-hero.jpg" style="padding-top:34%;">
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
const heroImg = ref();

onMounted(() => {
  gsap.from(heroImg.value, {
    delay: 0.5,
    filter: 'blur(10px)',
  });
})
</script>