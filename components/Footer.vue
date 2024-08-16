<script setup lang="ts">
const name = ref('');
const email = ref('');
const message = ref('');

const focusedField = ref({
  name: false,
  email: false,
  message: false
});

const disabled = computed(() => {
  return !name.value || !email.value || !message.value;
});

function onFocus(fieldName: string) {
  console.log("focus");
  focusedField.value[fieldName] = true;
}

  function onBlur(fieldName: string) {
    if (!eval(fieldName).value) {
      focusedField.value[fieldName] = false;
    }
  }

watch([name, email, message], ([newName, newEmail, newMessage]) => {
  console.log('Name:', newName);
  console.log('Email:', newEmail);
  console.log('Message:', newMessage);
});

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <div id="footer">
    <div class="footer-inner">
      <div class="footer-left">
        <h2>hit me up.</h2>
      </div>
      <form action="https://formspree.io/f/mzzpvdyd" method="POST" class="contact-form">
        <div class="contact-form__inner">
          <div class="contact-form__body">
            <div class="form-input__field">
              <input
                type="text"
                label="Name"
                name="name"
                spellcheck="false"
                required="true"
                class="form-input"
                v-model="name"
                @focus="onFocus('name')"
                @blur="onBlur('name')"
              />
              <label :class="{ focused: focusedField.name || name }" for="name" class="form-label">name</label>
            </div>
            <div class="form-input__field">
              <input
                type="text"
                label="Email"
                name="email"
                spellcheck="false"
                required="true"
                class="form-input"
                v-model="email"
                @focus="onFocus('email')"
                @blur="onBlur('email')"
              />
              <label :class="{ focused: focusedField.email || email }" for="email" class="form-label">email</label>
            </div>
            <div class="form-input__field">
              <input
                type="text"
                label="Message"
                name="message"
                required="true"
                spellcheck="false"
                class="form-input"
                v-model="message"
                @focus="onFocus('message')"
                @blur="onBlur('message')"
              />
              <label :class="{ focused: focusedField.message || message }" for="message" class="form-label">message</label>
            </div>
          </div>
          <div class="contact-form__footer">
            <div class="contact-form-button-container">
              <button class="contact-form-button" :disabled="disabled">
                <div class="button">send
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <hr class="footer-divider">
    <p class="copyright">copyright &copy; {{ currentYear }} | julia sharp | all rights reserved.</p>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  height: 100vh;
  background: #315565;
}

.footer-inner {
  display: flex;
  height: 100%;
  padding: 0 25px;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 20px;
  }
}

.footer-left {
  display: flex;
  align-items: flex-end;
  flex-basis: 50%;
  padding-bottom: 38px;
  @media (max-width: 1000px) {
    padding-bottom: 5px;
  }
  h2 {
    font-family: 'Editorial';
    color: #FFFFFF;
    font-size: 120px;
    @media (max-width: 1180px) {
      font-size: 95px;
    }
    @media (max-width: 767px) {
      font-size: 65px;
    }
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
  color: #FFFFFF;
  font-size: 15px;
}

.contact-form {
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 80px;
  padding-right: 50px;
  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
  &-button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 15px;
    margin-top: 30px;
    border: 2px solid white;
    color: white;
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
      background: transparent;
      color: rgb(240, 240, 238);
      border-color: rgb(240, 240, 238);
    }
    &:not([disabled]):hover {
      background: white;
      .button {
        color: #315565;
      }
    }
  }
}

.form-input__field {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 1.6em;
  letter-spacing: -0.01em;
  text-transform: none;
  font-weight: normal;
  color: rgb(0, 0, 0);
  margin-bottom: calc(13.57px + 0.446828vw)
}

input {
  padding-left: 0px;
  padding-right: 0px;
  border-top: 0px rgb(240, 240, 238);
  border-left: 0px rgb(240, 240, 238);
  border-right: 0px rgb(240, 240, 238);
  width: 100%;
  height: 50px;
  background: transparent;
  color: rgb(240, 240, 238);
  border-bottom-color: rgb(240, 240, 238);
  @media (min-width: 1024px) {
    padding-top: calc(13.43px + 0.178731vw);
  }
  &:focus-visible {
    outline: none;
  }
}

label {
  position: absolute;
  padding: 0px 0px 8px;
  left: 0px;
  margin-left: 0px;
  height: auto;
  bottom: 0px;
  top: auto;
  font-weight: 600;
  color: rgb(240, 240, 238);
  opacity: 0.5;
  &.focused {
    opacity: 1;
    transform: translate3d(0px, -18px, 0px) scale(0.75);
    color: rgb(240, 240, 238);
  }
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0px;
  width: 100%;
  min-width: 48px;
  border-radius: 50%;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  font-size: 16px;
  color: #FFFFFF;
}
</style>