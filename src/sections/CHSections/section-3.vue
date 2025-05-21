<template>
  <div class="section section-3 flex-row">
    <div class="section-body flex-row">
      <div
        v-if="this.discProducts.length === 0"
        class="cards-loading-div flex-row"
      >
        <CardLoding :keyss="6" />
        <CardLoding :keyss="7" />
        <CardLoding :keyss="8" />
      </div>
      <div
        class="single-card-div flex-row m-2"
        v-for="(cartItem, i) in this.discProducts"
        :key="i"
        :id="i"
      >
        <Card
          :cardItem="cartItem"
          :cartedProducts="this.cartedProducts"
          @addItemToCart="this.addItemCart"
          @showCardInfo="reviewCardInfo"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "../../components/CHComponents/card.vue";
import CardLoding from "../../components/CHComponents/cardloading.vue";
export default {
  emits: ["reviewCardProductInfo", "addProductToCart"],
  props: ["discProducts", "cartedProducts"],
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

.section-3 {
  height: 100%;
  width: 100%;
  padding: 20px;
}
.cards-loading-div {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
.section-body {
  max-height: 1500px;
  width: 100%;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-evenly;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
</style>