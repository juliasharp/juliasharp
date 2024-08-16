<script setup lang="ts">

const isMobileNavOpen = ref(false);

const onBurgerClick = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
}

const closeMobileMenu = () => {
  isMobileNavOpen.value = false;
}

</script>

<template>
  <header :class="isMobileNavOpen ? 'mobile-nav-open' : ''" class="Header has-transition">
    <Logo />
    <div @click="onBurgerClick" class="Header-burger">
      <Burger :is-open="isMobileNavOpen"/>
    </div>
    <div class="Header-navWrapper">
      <nav class="Header-nav">
        <ul class="Header-navList">
          <li class="Header-navItem">
            <NuxtLink @click="closeMobileMenu" class="Header-navLink" to="/">
              <span class="Header-navLinkText">Home</span>
            </NuxtLink>
          </li>
          <li class="Header-navItem">
            <NuxtLink @click="closeMobileMenu" class="Header-navLink" to="/journal">
              <span class="Header-navLinkText">Journal</span>
            </NuxtLink>
          </li>
          <li class="Header-navItem">
            <NuxtLink @click="closeMobileMenu" class="Header-navLink" to="/contact">
              <span class="Header-navLinkText">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.Header {
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  // display: flex;
  justify-content: space-between;
  padding: 45px 80px 0 0;
  transition: mix-blend-mode .3s cubic-bezier(.25,.46,.45,.94);
  @media (max-width: 1023px) {
    padding: 50px 30px 0;
    align-items: center;
    z-index: 200;
  }
  @media (max-width: 767px) {
    padding: 20px 20px 0;
  }
  &-burger {
    width: 20px;
    height: 16px;
    z-index: 10;
    display: block;
    position: relative;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  &-nav {
    @media (max-width: 1023px) {
      background-color: #004a49;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      pointer-events: none;
      transform: translateY(100%);
    }
    &Wrapper {
      @media (max-width: 1023px) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100vh;
        height: calc(var(--vh, 1vh)*100);
        overflow: hidden;
        transform: translateY(-100%);
      }
    }
    &List {
      @media (max-width: 1023px) {
        height: 100vh;
        margin-top: 22vh;
        margin-top: calc(var(--vh, 1vh)*22);
      }
    }
    &Item {
      @media (max-width: 1023px) {
        text-align: center;
      }
    }
    &Link {
      position: relative;
      display: inline-block;
      text-transform: lowercase;
      padding: 18px 15px 19px 80px;
      letter-spacing: 0.02em;
      color: #000;
      font-size: 25px;
      @media (max-width: 1600px) {
        padding-left: 40px;
      }
      @media (max-width: 1200px) {
        padding-left: 45px;
      }
      @media (max-width: 1023px) {
        padding: 10px;
      }
      &Text {
        display: inline-block;
        transition: transform .5s cubic-bezier(.165,.84,.44,1);
        position: relative;
        @media (max-width: 1023px) {
          color: #FFF;
          font-size: 30px;
        }
      }
    }
  }
  &-logo,
  &-nav,
  &-burger {
    pointer-events: all;
  }
  &-nav,
  &-navWrapper {
    transition: transform .8s cubic-bezier(.165,.84,.44,1);
  }

  &.mobile-nav-open {
    .Header-navWrapper,
    .Header-nav {
      transform: translateY(0);
      transition: transform .8s cubic-bezier(.77,0,.175,1);
    }
    .Header-nav {
      pointer-events: all;
    }
  }
}

.router-link-active .Header-navLinkText:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: #E3C64A;
  bottom: 1px;
  left: 0;
}

</style>