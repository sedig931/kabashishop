<template>
  <div class="page-div">
    <div class="outer-top-shape-container-div flex-column">
      <div class="top-shape-container-div flex-row">
        <div class="left-container-div">
          <div class="inner-left-container-div"></div>
        </div>
        <div class="right-container-div"></div>
      </div>
      <div class="bottom-shape-container-div flex-row">
        <div class="left-bottom-shape flex-row">
          <div class="inner-left-bottom-shape"></div>
        </div>
      </div>
    </div>
    <div class="shape-1-contsiner">
      <div class="inner-shape inner-shape-1"></div>
      <div class="inner-shape inner-shape-2"></div>
      <div class="inner-shape inner-shape-3"></div>
    </div>
    <div class="outer-form-div flex-row">
      <div class="form-div flex-row border">
        <LoginForm v-if="this.logining" @switchForms="this.logining = false" />
        <RegisterForm
          v-if="!this.logining"
          @switchForms="this.logining = true"
        />
        <i
          @click="
            this.$router.push({
              name: 'home',
            })
          "
          class="btn-goback bi bi-house-door flex-row"
        ></i>
      </div>
    </div>
    <div class="contacts-div flex-row text-muted">
      <div class="single-contacts-icon-div flex-column">
        <i class="bi contacts-icon contacts-icon bi-facebook m-1 flex-column">
        </i>
        <span class="icon-txt-span">/kbashi</span>
      </div>
      <div class="single-contacts-icon-div flex-column">
        <i class="bi contacts-icon bi-instagram m-1 flex-column"> </i>
        <span class="icon-txt-span">@kbashi</span>
      </div>
      <div class="single-contacts-icon-div flex-column">
        <i class="bi contacts-icon bi-envelope-at-fill m-1 flex-column"> </i>
        <span class="icon-txt-span">kbashi@mail</span>
      </div>
    </div>
    <div class="copy-rights-div flex-row text-muted">
      <div class="devoloper-icon-div flex-row">
        <div class="left-devolover-icon flex-column">
          <div class="top-left-devoloer-icon"></div>
          <div class="bottom-left-devoloer-icon"></div>
        </div>
        <div class="right-devolover-icon flex-column">
          <div
            class="bottom-left-devoloer-icon bottom-right-devoloer-icon"
          ></div>
          <div class="top-left-devoloer-icon top-right-devoloer-icon"></div>
        </div>
      </div>
      <span class="copy-rights-icon-span">&copy;</span>
      <a class="copyrights-span" href="https://sedig931@gmail.com">
        samdtc 2025
      </a>
    </div>
  </div>
</template>
<script>
import LoginForm from "../components/CHComponents/forms/loginform.vue";
import RegisterForm from "../components/CHComponents/forms/registrationform.vue";
export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      logining: true,
      //propreties
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-div {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.outer-top-shape-container-div {
  position: absolute;
  left: 0;
  top: 0;
  width: 40%;
  height: 80%;
}
.top-shape-container-div {
  flex: 1;
  width: 100%;
  background-image: var(--gradient-backleft-topright-login);
}
.left-container-div {
  flex: 1;
  height: 100%;
  background-color: white;
  /* background-color: blanchedalmond; */
}
.inner-left-container-div {
  height: 100%;
  width: 100%;
  border-radius: 0 0 55% 0;
  background-image: var(--gradient-backleft-top-login);
}
.right-container-div {
  flex: 1;
  height: 100%;
  background-color: white;
  border-radius: 48% 0 0 0;
}
.bottom-shape-container-div {
  flex: 0.3;
  width: 100%;
  justify-content: start;
}
.left-bottom-shape {
  flex: 0.5;
  height: 100%;
  background-image: var(--gradient-backleft-bottom-right-login);
}
.inner-left-bottom-shape {
  height: 100%;
  width: 100%;
  border-radius: 53% 0 0 0;
  background-color: white;
}
.shape-1-contsiner {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 40%;
  width: 30%;
  background-image: var(--gradient-backright-login);
  border-radius: 100% 0 0 0;
  z-index: 0;
}
.inner-shape {
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 100% 0 0 0;
}
.inner-shape-1 {
  height: 85%;
  width: 85%;
  background-color: white;
  z-index: 1;
}
.inner-shape-2 {
  height: 80%;
  width: 80%;
  background-image: var(--gradient-backright-bottom-login);
  z-index: 2;
}
.inner-shape-3 {
  height: 58%;
  width: 58%;
  /* background-color: white; */
  z-index: 3;
}
/* --------------***************------------------- */
/* --------------***************------------------- */
/* --------------***************------------------- */
/* --------------***************------------------- */
.contacts-div {
  position: relative;
  flex: 0.7;
  height: 100%;
  /* background-color: aqua; */
  z-index: 1;
}
.single-contacts-icon-div {
  margin: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  /* color: rgb(74, 74, 74); */
  transition: background-color 0.8s;
}
.single-contacts-icon-div:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(102, 102, 102);
}
.contacts-icon {
  font-size: 30px;
}
.icon-txt-span {
  font-size: 14px;
}
.copy-rights-div {
  position: absolute;
  bottom: 0;
  margin-bottom: 2px;
  /* background-color: red; */
}
.devoloper-icon-div {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  /* change background-color as you want */
  background-color: rgb(94, 94, 94);
}
.top-left-devoloer-icon,
.top-right-devoloer-icon {
  height: 7px;
  width: 2px;
  /* change background-color as you want */
  background-color: rgb(255, 255, 255);
  border-radius: 0px 5px 0px 5px;
}
.top-right-devoloer-icon {
  margin-left: 1px;
}
.bottom-left-devoloer-icon,
.bottom-right-devoloper-icon {
  width: 2px;
  height: 2px;
  margin-top: 1px;
  margin-bottom: 1.5px;
  margin-left: 1px;
  border-radius: 50%;
  /* background-color: rgb(255, 255, 255); */
  background-color: rgb(255, 255, 255);
}
.bottom-right-devoloer-icon {
  margin-bottom: 1px;
  margin-top: 1.5px;
}
.copy-rights-icon-span {
  font-size: 12px;
  margin-left: 2px;
  margin-right: 2px;
}
.copyrights-span {
  font-size: 10px;
  text-decoration: none;
  color: rgb(94, 94, 94);
}
.outer-form-div {
  flex: 1;
  height: 100%;
}
.form-div {
  position: relative;
  min-height: 200px;
  width: 100%;
  max-width: 500px;
  margin: 0 20px 0 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 3.5px 1.5px rgb(227, 227, 227);
  z-index: 1;
}

.btn-goback {
  position: absolute;
  bottom: -65px;
  padding: 5px;
  border-radius: 5px;
  font-size: 23px;
  cursor: pointer;
  color: rgb(102, 102, 102);
  transition: background-color 0.8s;
}
.btn-goback:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(102, 102, 102);
  /* background-image: var(--gradient-btnLogin-primary); */
  /* background-image: var(--gradient-backright-login); */
}
@media (min-width: 950px) {
  .form-div {
    width: 100%;
    margin: 0 20px 0 20px;
  }
}
@media (max-width: 850px) {
  .page-div {
    flex-direction: column;
  }
  .outer-form-div {
    flex: 1;
    width: 100%;
  }
  .form-div {
    width: 80%;
    margin: 0 20px 0 20px;
    min-height: 250px;
  }
  .contacts-div {
    flex: 0.3;
    width: 100%;
  }
  .single-contacts-icon-div {
    margin: 10px;
    padding: 3px;
  }
  .contacts-icon {
    font-size: 20px;
  }
  .icon-txt-span {
    font-size: 9px;
  }
  .btn-goback {
    bottom: -50px;
    padding: 4px;
    font-size: 20px;
  }
}

@media (min-width: 1000px) {
  .outer-top-shape-container-div {
    width: 60%;
    height: 80%;
  }
}

@media (min-width: 650px) and (max-width: 1000px) {
  .outer-top-shape-container-div {
    width: 80%;
    height: 80%;
  }
}
@media (max-width: 650px) {
  .outer-top-shape-container-div {
    width: 90%;
    height: 60%;
  }
}
@media (max-width: 410px) {
  .devoloper-icon-div {
    height: 14px;
    width: 14px;
  }
  .top-left-devoloer-icon,
  .top-right-devoloer-icon {
    height: 5px;
    width: 2px;
  }
}
</style>