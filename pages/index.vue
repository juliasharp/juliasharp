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
              <li><CustomLink link="https://designcampla.com/" link-text="Design Camp" /> | 2023</li>
              <li><CustomLink link="https://designingincolor.com/" link-text="Designing in Color" />  | 2021</li>
              <li><CustomLink link="https://www.mmstaged.com/" link-text="Maison Moderne" /> | 2018</li>
            </ul>
          </div>
          <div class="HomeContact">
            <h4>Contact</h4>
            <p>You can find me on <CustomLink link="https://www.linkedin.com/in/julia-sharp/" link-text="linkedin"/> and <CustomLink link="https://github.com/juliasharp" link-text="github"/>.</p>
            <p> Or email me <a class="Link" href="mailto:juliasharp96@gmail.com">here</a>.</p>
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
    h4 {
      font-variation-settings: 'wght' 700;
    }
    ul {
      font-size: 25px;
      li {
        margin-bottom: 5px;
        a {
          font-variation-settings: "wght" 500;
        }
      }
    }
  }
  &Contact {
    h4 {
      font-variation-settings: 'wght' 700;
    }
    p {
      font-size: 25px;
      margin-bottom: 5px;
    }
  }
}
</style>