<script setup>
import JSLogo from '/src/juliasharp.svg?component';
</script>
<template>
  <div class="Logo">
    <JSLogo></JSLogo>
  </div>
</template>

<style lang="scss" scoped>
.Logo {
  position: absolute;
  right: 45px;
  top: 10px;
  @media (min-width: 1024px) {
    width: 195px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 165px;
  }
  @media (max-width: 767px) {
    width: 160px;
    right: 20px;
  }
}

/* .Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3B8070;
} */

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>