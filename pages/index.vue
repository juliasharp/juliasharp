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
    <div class="HomeContainer">
      <Hero image-url="pipes-hero.jpg"/>
      <section class="HomeContent">
        <h2 class="HomeText">I'm <strong>Julia Sharp</strong>, a freelance developer.</h2>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.Home {
  position: relative;
  &Container {
    margin-left: 215px;
    margin-right: 45px;
  }
  &Content {
    margin-top: 80px;
  }
  &Text {
    
  }
}
.content {
  margin-top: 100px;
}
p {
  margin-bottom: 20px;
}
</style>