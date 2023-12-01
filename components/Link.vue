<script lang="ts">
const props = defineProps({
  linkText: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
});
</script>

<template>
  <NuxtLink :to="to" class="Link">
    <span class="LinkText">{{ linkText }}</span>
  </NuxtLink>
</template>