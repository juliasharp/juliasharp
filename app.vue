<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll';

useHead({
  title: 'Julia Sharp',
  meta: [
    { name: 'description', content: 'Julia Sharp | Portfolio' }
  ],
})

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
