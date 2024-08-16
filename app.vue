<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'

onMounted(() => {
  useSmoothScroll()
})
// onMounted(() => {
//   // updateVh();
//   // window.addEventListener('resize', updateVh);
// });

// const updateVh = () => {
//   const vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }
</script>

<template>
  <div>
    <div class="Site-scroll">
      <Header />
      <NuxtPage />
    </div>
  </div>
</template>
