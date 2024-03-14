<script setup>
import PinSVG from '/src/pin.svg?component';
import HeartSVG from '/src/heart.svg?component';

const container = ref();
const content = ref();
const homeText = ref();

definePageMeta({
  layout: 'default'
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  gsap.from(homeText.value.children, {
    delay: 0.5,
    duration: 1,
    autoAlpha: 0,
    stagger: 0.25,
    ease: 'back.out(1.7)'
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  console.log("scroll Y: ", scrollY);
  const scrollThreshold = (homeText.value.offsetTop - window.innerHeight) * 4; // Adjust threshold as needed
  console.log("scroll threshold: ", scrollThreshold);
  
  if (scrollY > scrollThreshold) {
    console.log("scroll Y greater");
    gsap.from(heroText.value, {
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: heroText.value,
        start: "top 80%", // Adjust this trigger point as needed
        //end: "bottom 20%", // Adjust this end point as needed
        scrub: true // Optional smoothing effect
      }
    });
  }
};

</script>

<template>
  <main class="Home">
    <div class="Container">
      <Hero image-url="pipes-hero.jpg"/>
      <section ref="homeText" class="HomeContent">
        <h2 class="HomeText">I'm <strong>Julia Sharp</strong>, a freelance creative developer.</h2>
        <div class="HomeAbout">
          <div class="HomeAboutItem alignCenter">
            <PinSVG></PinSVG><p>Southern California</p>
          </div>
          <div class="HomeAboutItem alignCenter">
            <HeartSVG class="HomeAboutItemHeart"></HeartSVG><p>Surfer. Runner. Yogi. Traveler.</p>
          </div>
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