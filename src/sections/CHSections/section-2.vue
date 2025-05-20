<template>
  <div class="section section-2-div">
    <div class="background-shape-div flex-row">
      <div class="left-bs-div flex-row">
        <div class="outer-inner-left-div flex-row">
          <div class="inner-left-div"></div>
        </div>
        <div class="inner-right-div">
          <div class="top-right-div flex-row">
            <div class="top3-right-div"></div>
          </div>
        </div>
      </div>
      <div class="right-bs-div"></div>
    </div>
    <div class="section-body flex-column">
      <div class="allcard-container-div flex-row">
        <div
          v-if="this.products.length === 0"
          class="cards-loading-div flex-row"
        >
          <CardLoding :keyss="3" />
          <CardLoding :keyss="4" />
          <CardLoding :keyss="5" />
        </div>
        <div
          class="single-card-outer-div flex-row"
          v-for="(item, i) in this.products"
          :key="i"
          :id="i"
        >
          <Card
            :cardItem="item"
            :cartedProducts="this.cartedProducts"
            @addItemToCart="this.addItemCart"
            @showCardInfo="reviewCardInfo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "../../components/CHComponents/card.vue";
import CardLoding from "../../components/CHComponents/cardloading.vue";
export default {
  emits: ["addProductToCart", "reviewCardProductInfo"],
  props: ["products", "cartedProducts"],
  components: { Card, CardLoding },
  data() {
    return {
      //propreties
    };
  },
  methods: {
    addItemCart(proID) {
      this.$emit("addProductToCart", proID);
    },
    reviewCardInfo(proID) {
      this.$emit("reviewCardProductInfo", proID);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.section {
  position: relative;
  height: 100vh;
  width: 100%;
}
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
.background-shape-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background-color: rgb(29, 188, 188); */
  z-index: 0;
}
.right-bs-div {
  flex: 1;
  height: 100%;
  /* background-color: antiquewhite; */
}
.left-bs-div {
  height: 100%;
  flex: 0.46;
  background-image: var(--gradient-back-sec2-aaw);
  border-radius: 0 35% 0 0;
  justify-content: end;
  align-items: flex-end;
}
.outer-inner-left-div {
  flex: 1;
  height: 50%;
  background-color: white;
}
.inner-left-div {
  height: 100%;
  width: 100%;
  background-image: var(--gradient-back-sec2-qwww);
  border-radius: 0 0 64% 33%;
}
.inner-right-div {
  position: relative;
  flex: 1;
  height: 50%;
  background-color: white;
  border-radius: 43% 0 0 0;
}
.top-right-div {
  position: absolute;
  right: 0;
  top: -30%;
  height: 30%;
  width: 68%;
  justify-content: end;
  background-color: white;
}
.top3-right-div {
  flex: 1;
  height: 100%;
  border-radius: 0 0 90% 0;
  background-image: var(--gradient-back-sec2-alkj);
}
/* --------------SECTION BODY STYLE------------------- */
/* --------------SECTION BODY STYLE------------------- */
/* --------------SECTION BODY STYLE------------------- */
.section-body {
  height: 100%;
  width: 100%;
  align-items: flex-end;
  padding: 10px 0 10px 0;
  z-index: 1;
}
.cards-loading-div {
  width: 95%;
  height: 100%;
  padding: 30px 5px 30px 5px;

  justify-content: start;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.allcard-container-div {
  /* height: 60%; */
  width: 95%;
  padding: 30px 5px 30px 5px;
  border: 2px solid rgb(241, 241, 241);
  border-right: none;
  border-radius: 8px 0 0 8px;
  box-shadow: 0px 0px 2px 2px rgb(199, 199, 199);
  backdrop-filter: blur(1px);
  justify-content: start;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.single-card-outer-div {
  margin: 5px 10px 0 10px;
}
</style>