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

<style lang="scss">
.Link {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: currentColor;
    transition: transform .5s cubic-bezier(.77,0,.175,1);
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
}
</style>