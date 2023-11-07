<script setup>
import gsap from 'gsap';

const container = ref();
const content = ref();

// onMounted(() => {
//   gsap.from(content.value.children, {
//     delay: 0.5,
//     duration: 1,
//     y: '+100',
//     autoAlpha: 0,
//     stagger: 0.25,
//     ease: 'back.out(1.7)'
//   });
// });

</script>

<template>
  <main class="Home">
    <Hero />
    <!-- <div class="container containerDefault content" ref="content">
      <h1>Heading Here</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div> -->
  </main>
</template>

<style>
.content {
  margin-top: 100px;
}
p {
  margin-bottom: 20px;
}
</style>