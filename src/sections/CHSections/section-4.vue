<template>
  <div class="section section-4 flex-column">
    <div class="back-shape-footer-div flex-column">
      <div class="top-bsf-div"></div>
      <div class="down-bsf-div flex-row">
        <div class="inner-down-bsf-div"></div>
      </div>
    </div>
    <div class="section-body body-footer-span text-muted">
      <div class="footer-bodys-divs contacts-div flex-column">
        <span class="fw-bold header-footer-span mb-2">contacts</span>
        <span class="fw-light">
          <i class="bi bi-telephone-fill ms-1 me-1 fex-row"></i>
          +249912345678
        </span>
        <span class="fw-light m-1">
          <i class="bi bi-envelope-at-fill ms-1 me-1 fex-row"></i>
          kabashi@mail.com
        </span>
        <span class="fw-light">
          <i class="bi bi-geo-alt-fill ms-1 me-1 fex-row"></i>
          khartoum-sudan
        </span>
      </div>
      <div class="footer-bodys-divs about-div flex-column">
        <span class="fw-bold header-footer-span mb-2">about</span>
        <span class="fw-light">
          this showd be a very long text and have alot of words and caracters
        </span>
        <span class="fw-light">
          caracters yah !, this showd be a very long text and have alot of words
        </span>
        <span class="fw-light">
          caracters yah !, this showd be a very long text and have alot of words
        </span>
      </div>
      <div class="footer-bodys-divs privacy-policy-div flex-column">
        <span class="fw-bold header-footer-span mb-2">privacy policy</span>
        <span class="fw-light"> this showd be a single pricavy </span>
        <span class="fw-light m-1"> this showd be a single pricavy </span>
        <span class="fw-light"> this showd be a single pricavy </span>
        <span class="like-anchor fw-light m-1"> show more </span>
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
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
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
.section-4 {
  width: 100%;
  height: 40vh;
}
.back-shape-footer-div {
  flex: 0.3;
  width: 100%;
  background-image: var(--gradient-back-top2-footer);
}
.top-bsf-div {
  flex: 1;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 0 0 0 85%;
}

.down-bsf-div {
  flex: 1;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
.inner-down-bsf-div {
  height: 100%;
  width: 100%;
  background-image: var(--gradient-back-top-footer);
  border-radius: 0 35% 0 0;
}
.section-body {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 16px;
  background-image: var(--gradient-back-footer);
}
.header-footer-span {
  font-size: 16px;
}
.body-footer-span {
  font-size: 13px;
  text-align: center;
}
.footer-bodys-divs {
  flex: 0.3;
  max-width: 350px;
}
.like-anchor {
  color: rgba(0, 0, 255, 0.7);
  cursor: pointer;
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
  /* background-color: rgb(255, 255, 25); */
  background-image: var(--gradient-back-footer);
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
  background-image: var(--gradient-back-footer);
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
@media (max-width: 700px) {
  .header-footer-span {
    font-size: 14px;
  }
  .body-footer-span {
    font-size: 11.5px;
  }
}
@media (max-width: 410px) {
  .section-body {
    flex-direction: column;
    align-items: center;
    padding-top: 0px;
  }
  .section-4 {
    height: 55vh;
  }
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