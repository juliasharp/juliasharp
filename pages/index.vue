<script setup>
import PinSVG from '/src/pin.svg?component';
import HeartSVG from '/src/heart.svg?component';

const homeText = ref();
const homeProjects = ref();
const homeContact = ref();

definePageMeta({
  layout: 'default'
})

onMounted(() => {
  gsap.from(homeText.value.children, {
    delay: 0.3, // Start a bit sooner
    duration: 0.8, // Shorten the duration for quickness
    autoAlpha: 0,
    y: 20, // Add a slight vertical movement for smoothness
    stagger: 0.5, // Faster stagger for a more fluid entrance
    ease: 'power3.out' // Smoother easing function
  });

  gsap.from([homeProjects.value.querySelector('h4'), homeContact.value.querySelector('h4')], {
    delay: 0.3, // Slightly later to allow HomeText to finish
    duration: 0.8,
    autoAlpha: 0,
    y: 20,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: homeProjects.value, // Start animation when HomeProjects comes into view
      start: 'top 100%', // Adjust as needed to control when the animation starts
    }
  });

  // Animation for HomeProjects ul and HomeContact div together
  gsap.from([homeProjects.value.querySelector('ul'), homeContact.value.querySelector('div')], {
    delay: 0.75, // Slightly delayed to align with the h4 elements' animation
    duration: 0.8,
    autoAlpha: 0,
    y: 20,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: homeProjects.value, // Start animation when HomeProjects comes into view
      start: 'top 100%', // Adjust as needed to control when the animation starts
    }
  });

  handleScroll();
});


const handleScroll = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.animate',
      start: 'top bottom',
      end: '+=100',
      ease: "power1.inOut"
    }
  });

  tl.to('.animate', {
    y: -40,
    autoAlpha: 1,
    duration: 0.6
  });
};


const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <main class="Home">
    <div class="Container">
      <Hero hero-text="howdy" image-url="pipes-hero.jpg"/>
      <section class="HomeContent">
        <div class="HomeContentTop animate">
          <h2 ref="homeText" class="HomeText">I'm <strong>Julia Sharp</strong>, a freelance creative developer.</h2>
          <div class="HomeAbout">
            <div class="HomeAboutItem alignCenter">
              <PinSVG></PinSVG><p>Southern California</p>
            </div>
            <div class="HomeAboutItem alignCenter">
              <HeartSVG class="HomeAboutItemHeart"></HeartSVG><p>Surfer. Runner. Yogi. Traveler.</p>
            </div>
          </div>
        </div>
        <div class="HomeInfo flex animate">
          <div ref="homeProjects" class="HomeProjects">
            <h4>Projects</h4>
            <ul>
              <li><CustomLink link="https://data-witches.com" link-text="Data Witches" /> | 2025</li>
              <li><CustomLink link="https://just.design" link-text="JUST Design" /> | 2024</li>
              <li><CustomLink link="https://designcampla.com/" link-text="Design Camp" /> | 2023</li>
              <li><CustomLink link="https://designingincolor.com/" link-text="Designing in Color" />  | 2021</li>
              <li><CustomLink link="https://www.mmstaged.com/" link-text="Maison Moderne" /> | 2018</li>
            </ul>
          </div>
          <div ref="homeContact" class="HomeContact">
            <h4>Contact</h4>
            <div>
              <p>You can find me on <CustomLink link="https://www.linkedin.com/in/julia-sharp/" link-text="linkedin"/> and <CustomLink link="https://github.com/juliasharp" link-text="github"/>.</p>
              <p> Or email me <a class="Link" href="mailto:julia@juliasharp.co">here</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <hr class="footer-divider">
    <p class="copyright">copyright &copy; {{ currentYear }} | julia sharp | all rights reserved.</p>
  </main>
</template>

<style lang="scss">
.Home {
  position: relative;
  &Content {
    margin-top: 120px;
    font-size: 36px;
    @media (max-width: 767px) {
      font-size: 24px;
    }
    &Top {
      //transition: transform 0.65s cubic-bezier(0.44, 0.24, 0.16, 1) 0s, opacity 0.65s cubic-bezier(0.44, 0.24, 0.16, 1) 0s;
      opacity: 0;
      visibility: hidden;
    }
  }
  &Text {
    strong {
      font-variation-settings: 'wght' 500;
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
    padding-bottom: 90px;
    @media (max-width: 767px) {
      display: block;
    }
  }
  &Projects {
    @media (min-width: 768px){
      margin-right: 200px;
    }
    h4 {
      font-variation-settings: 'wght' 500;
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
      font-variation-settings: 'wght' 500;
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

.footer-divider {
  position: absolute;
  bottom: 38px;
  left: 25px;
  width: calc(100% - 50px);
  border-width: 0.5px;
}

.copyright {
  position: absolute;
  bottom: 12px;
  left: 25px;
  color: #000;
  font-size: 15px;
}
</style>