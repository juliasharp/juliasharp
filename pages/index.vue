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
    <div class="Container">
      <Hero image-url="pipes-hero.jpg"/>
      <section class="HomeContent">
        <h2 class="HomeText">I'm <strong>Julia Sharp</strong>, a freelance creative developer.</h2>
        <div class="HomeAbout">
          <p>Southern California</p>
          <p>Surfer. Runner. Yogi. Traveler.</p>
        </div>
        <div class="HomeInfo flex">
          <div class="HomeProjects">
            <h4>Projects</h4>
            <ul>
              <li><strong><NuxtLink class="Link" to="https://designcampla.com/" target="_blank">Design Camp</NuxtLink></strong> 2023</li>
              <li><strong><NuxtLink class="Link" to="https://designingincolor.com/" target="_blank">Designing in Color</NuxtLink></strong> 2021</li>
              <li><strong><NuxtLink class="Link" to="https://www.mmstaged.com/" target="_blank">Maison Moderne</NuxtLink></strong> 2018</li>
            </ul>
          </div>
          <div class="HomeContact">
            <h4>Contact</h4>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.Home {
  position: relative;
  &Content {
    margin-top: 80px;
    font-size: 36px;
  }
  &Text {
    strong {
      font-variation-settings: 'wght' 700;
    }
  }
  &About {
    margin-top: 55px;
    margin-bottom: 40px;
    p {
      margin-left: 55px;
      &:last-of-type {
        margin-top: 45px;
      }
    }
  }
  &Info {
    display: flex;
    margin-top: 100px;
  }
  &Projects {
    margin-right: 200px;
  }
}
.content {
  margin-top: 100px;
}
p {
  margin-bottom: 20px;
}
</style>