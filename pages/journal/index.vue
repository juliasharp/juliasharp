<script setup>
definePageMeta({
  layout: 'default'
});

const quote = ref('');
const heroImg = ref('');

onMounted(() => {
  // Animation for the quote element
  gsap.from(quote.value, {
    duration: 1,
    autoAlpha: 0,
    y: 20, // Vertical movement for smoothness
    ease: 'power3.out',
    scrollTrigger: {
      trigger: quote.value, // Start animation when the quote comes into view
      start: 'top 90%', // Adjust as needed to control when the animation starts
    }
  });

  // Blur animation for the hero image
  const tl = gsap.timeline();
  tl.from(heroImg.value, {
    delay: 0.7,
    filter: 'blur(5px)',
    onComplete: () => {
      heroImg.value.style.filter = 'none';
    }
  });
  tl.to(heroImg.value, {
    duration: 1.5,
    opacity: 1,
    filter: 'blur(0px)',
  });
});

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <main class="Journal">
    <div class="Container">
      <div class="banner-container">
        <img ref="heroImg" class="mikey-kick" src="../../src/mikey-kick.gif"/>
      </div>
    </div>
    <div class="journal-inner">
      <p ref="quote" class="quote">&#x201C;like all good fruit, the balance of life is in the ripe and the ruin&#x201D;</p>
      <span class="name">alt-J</span>
      <div class="photo-grid">
        <img class="swamis-bw" src="../../src/journal-assets/swamis-bw.jpg">
        <img class="nantes-cat" src="../../src/journal-assets/nantes-cat.jpg">
        <img class="me-n-jet-bidart" src="../../src/journal-assets/me-n-jet-bidart.jpg">
        <img class="papi" src="../../src/journal-assets/papi.jpeg">
        <img class="cardiff-roof" src="../../src/journal-assets/cardiff-roof.jpg">
        <img class="jona-levallois" src="../../src/journal-assets/jona-levallois.jpg">
        <img class="will-oregon" src="../../src/journal-assets/will-oregon.jpeg">
        <img class="girls-saladita" src="../../src/journal-assets/girls-saladita.jpg">
        <img class="mom-395" src="../../src/journal-assets/mom-395.jpg">
        <img class="jet-bidart" src="../../src/journal-assets/jet-bidart.jpg">
        <img class="gabe-peace" src="../../src/journal-assets/gabe-peace.gif">
        <img class="jona-portland" src="../../src/journal-assets/jona-portland.jpg">
      </div>
    </div>
    <hr class="footer-divider">
    <p class="copyright">copyright &copy; {{ currentYear }} | julia sharp | all rights reserved.</p>
  </main>
</template>

<style lang="scss" scoped>
.banner-container {
  margin-top: 50px;
  height: calc(100vh - 85px);
  position: relative;
  @media (max-width: 1180px) {
    height: unset;
  }
}

.mikey-kick {
  max-width: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  object-position: center;
  @media (max-width: 1180px) {
    height: auto;
    position: relative;
  }
}

.journal-inner {
  padding: 0 65px;
  margin-top: 120px;
  @media (max-width: 767px) {
    margin-top: 50px;
  }
  @media (max-width: 414px) {
    margin-top: 55px;
    padding: 0 30px;
  }
}

.quote {
  font-family: 'Editorial';
  font-size: 82px;
  line-height: 1.28;
  text-align: center;
  letter-spacing: -0.02em;
  max-width: 1035px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    font-size: 65px;
    max-width: 816px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
  }
}

.name {
  display: block;
  text-align: center;
  font-family: 'Editorial';
  font-size: 36px;
  margin-top: 25px;
  font-style: italic;
  @media (max-width: 767px) {
    font-size: 20px;
  }
}

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  margin-top: 100px;
  @media (max-width: 1280px) {
    margin-top: 75px;
  }
  @media (max-width: 767px) {
    margin-top: 50px;
  }
}

.photo-grid img {
  flex-grow: 0; /* Remove flex-grow to let flex-basis control the size */
  flex-shrink: 0; /* Prevent shrinking of images */
  object-fit: contain;
  position: relative;
}

.swamis-bw {
  width: 58.9vw;
  @media (max-width: 1180px) {
    width: 55vw;
  }
}

.nantes-cat {
  width: 28.2vw;
}

.me-n-jet-bidart {
  width: 33.1vw;
  @media (max-width: 1180px) {
    width: 32vw;
  }
}

.papi {
  width: 53.3vw;
  top: 3vw;
  @media (max-width: 1180px) {
    width: 50vw;
  }
}

.cardiff-roof {
  width: 33vw;
}

.cardiff-roof {
  width: 38.5vw;
  top: 3.5vw;
}

.jona-levallois {
  width: 45.8vw;
  bottom: 7vw;
  @media (max-width: 1180px) {
    width: 42vw;
  }
}

.girls-saladita {
  width: 44.6vw;
  bottom: 4vw;
  @media (max-width: 1180px) {
    width: 38vw;
  }
}

.will-oregon {
  width: 41.3vw;
  bottom: 24vw;
  @media (max-width: 1180px) {
    width: 37vw;
    bottom: 20vw;
  }
}

.mom-395 {
  width: 54.4vw;
  bottom: 17vw;
  @media (max-width: 1180px) {
    width: 48vw;
  }
}

.jet-bidart {
  width: 35.5%;
  bottom: 18vw;
}

.gabe-peace {
  width: 45.2vw;
  bottom: 22vw;
}

.jona-portland {
  width: 44%;
  bottom: 14vw;
}

@media (max-width: 768px) {
  .photo-grid {
    flex-direction: column;
    gap: 0;
  }

  .photo-grid img {
    width: 100%;
    bottom: unset;
    top: unset;
    margin-bottom: 15px;
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