<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'

onMounted(() => {
  useSmoothScroll()
});
</script>

<template>
  <div>
    <div class="Site-scroll">
      <Header />
      <NuxtPage />
    </div>
  </div>
</template>
