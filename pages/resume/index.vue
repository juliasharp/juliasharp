<template>
  <main class="Resume">
    <div class="Container">
      <Hero image-url="resume-img.jpg" hero-text="resume / cv"/>
    </div>
    <div class="resume-inner">
      <h2>Work Experience</h2>
      <div class="work-experience">
        <div class="flex work-info">
          <h3 class="company">Salesforce</h3>
          <p>May 2022 - Sep 2024</p>
        </div>
        <p class="role">CX / Software Engineer</p>
        <div class="description">
          <p>Championed creating and publishing 18 reusable design system components in VueJS, fostering a collaborative en- vironment. Contributed to the front-end development of a new internal seller solution, utilizing VueJS frameworks like single-spa and NuxtJS.
          </p>
          <p>Delivered demo experiences for top accounts, showcasing customer journeys across Salesforce products. Collaborated closely with Design, Account Teams, and Solution Engineers to ensure on-brand messaging and a seamless custom- er experience.</p>
        </div>
      </div>
      <div class="work-experience">
        <div class="flex work-info">
          <h3 class="company">1Point21 Interactive</h3>
          <p>Jan 2020 - Apr 2022</p>
        </div>
        <p class="role">Jr. Web Developer</p>
        <div class="description">
          <p>Built and designed user-friendly web experiences by translating Photoshop and Adobe XD screen designs into func- tional applications leveraging CSS and PHP. Collaborated with developers and graphic designers for a seamless and visually appealing user experience.</p>
        </div>
      </div>
      <div class="work-experience">
        <div class="flex work-info">
          <h3 class="company">Yardi Systems Inc.</h3>
          <p>Jan 2019 - Dec 2019</p>
        </div>
        <p class="role">Associate Technical Account Manager</p>
      </div>
      <div class="certifications">
        <h2>Certifications</h2>
        <div class="cert flex">
          <p><span>Salesforce</span> Certified AI Associate</p>
          <p>Apr 2024</p>
        </div>
        <div class="cert flex">
          <p><span>Salesforce</span> Certified Platform App Builder</p>
          <p>Jan 2023</p>
        </div>
        <div class="cert flex">
          <p><span>Salesforce</span> Certified Administrator</p>
          <p>Apr 2022</p>
        </div>
        <div class="cert flex">
          <p><span>Udemy</span> Unit Testing</p>
          <p>Apr 2024</p>
        </div>
      </div>
    </div>
    <hr class="footer-divider">
    <p class="copyright">copyright &copy; {{ currentYear }} | julia sharp | all rights reserved.</p>
  </main>
</template>

<style lang="scss" scoped>
.resume-inner {
  max-width: 1000px;
  margin: 120px auto;
  padding: 0 50px;
  @media (max-width: 600px) {
    margin: 60px auto;
  }
  h2 {
    font-family: 'Editorial';
    font-size: 42px;
    padding-bottom: 30px;
    @media (max-width: 600px) {
      font-size: 32px;
    }
  }
}

.work-experience {
  margin-bottom: 40px;
}

.company {
  font-variation-settings: "wght" 600;
  margin-bottom: 0px;
  margin-top: 0;
}

.work-info {
  margin-bottom: 10px;
}

.role {
  font-style: italic;
  font-variation-settings: "wght" 400;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: block;
  }
}

.description {
  margin-top: 20px;
}

.description p {
  margin-bottom: 20px;
}

.certifications {
  margin-top: 100px;
}

.cert {
  margin-bottom: 10px;
}

.cert span {
  font-weight: 700
}
</style>