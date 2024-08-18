<script>
import IlySVG from '/src/love.svg?component';
</script>

<template>
  <main class="Contact">
    <div class="Container">
      <Hero image-url="julia-contact.JPG" hero-text="salut !"/>
      <section class="ContactContent">
        <p>Hey ! Welcome to my little pocket of the internet. Whatever it is that brought you here, I hope you stay a minute. I created this space to bring some of my favorite things to life. To offer a glimpse into my world, perhaps. Although my career tethers me to a computer screen, I try to get outside and play as much as I can. I've learned to appreciate the beauty of travel and long stays away from home at a young age. Since then, I've sought out adventure and new experiences any chance I get. I've been fortunate to witness many of the wonders of California over the past 11 years -- it's hard to get enough. </p>
        <p>I don't live my life by any philosophy per se, but I believe it's important to stay attuned to what brings you joy. It's easy to get lost in our hyper-connected culture of self-betterment and comparison. I try to remind myself that most of that stuff doesn't matter. Spend time doing the things that light you up. You might learn something new. Gain a new perspective along the way.</p>
        <p>As I build my company and my brand, I'm slowly accepting new web projects that align with my personal values. If you're interested in working together or having a chat, give me a shout.</p>
        <IlySVG />
      </section>
    </div>
    <Footer />
  </main>
</template>

<style lang="scss">
.Contact {
  &Content {
    margin: 80px 0;
    font-size: 28px;
    line-height: 1.5;
    @media (max-width: 767px) {
      font-size: 18px;
      margin: 50px 0;
    }
    p {
      margin-bottom: 25px;
    }
  }
}
</style>