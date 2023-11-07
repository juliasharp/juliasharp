<script setup lang="ts">
onMounted(() => {
  updateVh();
  window.addEventListener('resize', updateVh);
});

const updateVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
</script>

<template>
  <div>
    <div class="Site-scroll">
      <Header />
      <NuxtPage />
      <!-- <Footer /> -->
    </div>
  </div>
</template>
