<script setup lang="ts">
const props = defineProps({
  linkText: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <NuxtLink :to="link" class="Link">
    <span class="LinkText">{{ linkText }}</span>
  </NuxtLink>
</template>