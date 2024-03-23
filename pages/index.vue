<script setup>
import PinSVG from '/src/pin.svg?component';
import HeartSVG from '/src/heart.svg?component';

const container = ref();
const content = ref();
const homeText = ref();

const animateElement = ref([]);

definePageMeta({
  layout: 'default'
})

onMounted(() => {
  handleScroll()

  // gsap.from(homeText.value.children, {
  //   delay: 0.5,
  //   duration: 1,
  //   autoAlpha: 0,
  //   stagger: 0.25,
  //   ease: 'back.out(1.7)'
  // });
});

const handleScroll = (animateElement) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.animate',
      start: 'top bottom',
      end: '+=100',
      // scrub: true,
      markers: true,
      toggleActions: 'play pause reverse complete',
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut"
    }
  })

  tl.to('.animate', {
    y: -40,
    autoAlpha: 1,
    duration: 0.6
  });
};

onUnmounted(() => {
  animateElement.value.forEach(handleScroll);
});

</script>

<template>
  <main class="Home">
    <div class="Container">
      <Hero image-url="pipes-hero.jpg"/>
      <section ref="homeText" class="HomeContent">
        <div ref="animateElement" class="HomeContentTop">
          <h2 class="HomeText">I'm <strong>Julia Sharp</strong>, a freelance creative developer.</h2>
          <div class="HomeAbout">
            <div class="HomeAboutItem alignCenter">
              <PinSVG></PinSVG><p>Southern California</p>
            </div>
            <div class="HomeAboutItem alignCenter">
              <HeartSVG class="HomeAboutItemHeart"></HeartSVG><p>Surfer. Runner. Yogi. Traveler.</p>
            </div>
          </div>
        </div>
        <div ref="animateElement" class="HomeInfo flex">
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
    margin-top: 120px;
    font-size: 36px;
    &Top {
      //transition: transform 0.65s cubic-bezier(0.44, 0.24, 0.16, 1) 0s, opacity 0.65s cubic-bezier(0.44, 0.24, 0.16, 1) 0s;
      opacity: 0;
      visibility: hidden;
    }
  }
  &Text {
    strong {
      font-variation-settings: 'wght' 700;
    }
  }
  &About {
    margin-top: 55px;
    margin-bottom: 40px;
    &Item {
      margin-top: 45px;
      p {
        margin-left: 30px;
      }
      &Heart {
        position: relative;
        bottom: 4px;
      }
    }
  }
  &Info {
    display: flex;
    margin-top: 75px;
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
  &SVG {
    width: 20px;
    height: 20px;
  }
}
</style>