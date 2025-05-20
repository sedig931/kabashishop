<template>
  <div class="section flex-row">
    <div class="background-nice-div flex-column">
      <div class="main-top-background-div flex-column">
        <div class="top-back-div"></div>
        <div class="bottom-back-div flex-row">
          <div class="inner-bottom-back-div"></div>
        </div>
      </div>
      <div class="main-down-background-div flex-row">
        <div class="inner-down-back-div flex-row">
          <div class="left-right-rect-div left-rect-div">
            <div class="inner-left-rect-div"></div>
          </div>
          <div class="left-right-rect-div right-rect-div flex-row">
            <div class="inner-right-rect-div"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-body section1-body">
      <span class="top10-span m-2">{{ " " }}</span>
      <div class="cards-loading-div flex-row" v-if="this.top10Items.length < 1">
        <CardLoading :keyss="0" />
        <CardLoading :keyss="1" />
        <CardLoading :keyss="2" />
      </div>
      <div class="items-container-div flex-row">
        <div
          v-for="(item, i) in this.top10Items"
          :key="i"
          :id="i"
          class="item-div flex-row"
          :class="`cart-item-${i}`"
          v-show="this.show3ofTop10(i)"
        >
          <Card
            :cardItem="item"
            @addItemToCart="this.addItemCart"
            :cartedProducts="this.cartedProducts"
            @showCardInfo="reviewCardInfo"
          />
        </div>
      </div>
      <div class="mobile-items-container-div flex-column">
        <div
          v-for="(item, i) in this.top10Items"
          :key="i"
          :id="i"
          class="mobile-item-div flex-row"
          :class="`mobilecart-item-${i}`"
          v-show="this.show3ofTop10(i)"
        >
          <MobileCard
            :cardItem="item"
            @addItemToCart="this.addItemCart"
            :cartedProducts="this.cartedProducts"
            @showCardInfo="reviewCardInfo"
          />
        </div>
      </div>
      <div class="dots-div mt-2 flex-row" v-show="this.top10Items.length > 0">
        <div
          v-for="(dot, i) in new Array(3)"
          :key="i"
          class="single-dot"
          :class="i === this.activeDot ? 'active-dot' : ''"
          @click="this.showCarts(i)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
// import component files..
import Nav from "../../components/CHComponents/nav.vue";
import Card from "../../components/CHComponents/card.vue";
import CardLoading from "../../components/CHComponents/cardloading.vue";
import MobileCard from "../../components/CHComponents/mobileCard.vue";
export default {
  emits: ["addProductToCart", "reviewCardProductInfo"],
  props: ["cartedProducts", "top10Items"],
  components: {
    Nav,
    Card,
    CardLoading,
    MobileCard,
  },
  data() {
    return {
      activeDot: 1,
      //propreties
    };
  },
  methods: {
    show3ofTop10(i) {
      if (i < 3) {
        return this.activeDot == 0 ? true : false;
      } else if (i > 2 && i < 6) {
        return this.activeDot == 1 ? true : false;
      } else {
        return this.activeDot == 2 ? true : false;
      }
    },
    showCarts(index) {
      if (index === this.activeDot) return;
      this.activeDot = index;
      this.slowCartShow(index, "mobile");
      this.slowCartShow(index, "");
      // console.log(document.querySelector(`.cart-item-${8}`));
    },
    slowCartShow(groupIndex, mobile) {
      if (groupIndex === 0) {
        for (let r = 0; r < 3; r++) {
          const radn = Math.floor(Math.random() * 3);
          document
            .querySelector(`.${mobile}cart-item-${r}`)
            .classList.add(`card-hidden-${radn}`);
          setTimeout(() => {
            document
              .querySelector(`.${mobile}cart-item-${r}`)
              .classList.remove(`card-hidden-${radn}`);
          }, 5);
        }
      } else if (groupIndex === 1) {
        for (let r = 3; r < 6; r++) {
          const radn = Math.floor(Math.random() * 3);
          document
            .querySelector(`.${mobile}cart-item-${r}`)
            .classList.add(`card-hidden-${radn}`);
          setTimeout(() => {
            document
              .querySelector(`.${mobile}cart-item-${r}`)
              .classList.remove(`card-hidden-${radn}`);
          }, 5);
        }
      } else {
        for (let r = 6; r < 9; r++) {
          const radn = Math.floor(Math.random() * 3);
          document
            .querySelector(`.${mobile}cart-item-${r}`)
            .classList.add(`card-hidden-${radn}`);
          setTimeout(() => {
            document
              .querySelector(`.${mobile}cart-item-${r}`)
              .classList.remove(`card-hidden-${radn}`);
          }, 5);
        }
      }
    },
    addItemCart(proID) {
      this.$emit("addProductToCart", proID);
    },
    reviewCardInfo(proID) {
      this.$emit("reviewCardProductInfo", proID);
    },
    setProductSize(proID, size) {
      // go to home page and edit product size..
    },
    setProductColor(proID, color) {
      // go to home page and edit product color..
    },
  },
  mounted() {
    if (this.top10Items.length > 0) this.showCarts(0);
  },
};
</script>

<style scoped>
.section {
  position: relative;
  min-height: 100vh;
  width: 100%;
}
.card-hidden-0 {
  opacity: 0;
  transform: translateY(-7rem);
}
.card-hidden-1 {
  opacity: 0;
  transform: translateY(-10rem);
}
.card-hidden-2 {
  opacity: 0;
  transform: translateY(-13rem);
}
.card-hidden {
  opacity: 0;
  transform: translateY(-8rem);
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
.background-nice-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
}
.main-top-background-div {
  flex: 2;
  width: 100%;
  align-items: flex-end;
}
.top-back-div {
  flex: 1;
  width: 100%;
  background-image: var(--gradient-back-primary);
  border-radius: 0 0 0 50%;
}
.bottom-back-div {
  flex: 1;
  width: 100%;
  background-image: var(--gradient-back);
}
.inner-bottom-back-div {
  height: 100%;
  width: 100%;
  border-radius: 0 31% 0 0;
  background-color: white;
}

.main-down-background-div {
  flex: 1;
  justify-content: start;
  align-items: flex-end;
  width: 100%;
}
.inner-down-back-div {
  flex: 0.3;
  height: 70%;
  /* transform: translateX(-120px); */
}
.left-right-rect-div {
  height: 100%;
}
.left-rect-div {
  flex: 0.5;
  background-image: var(--gradient-back-bottom);
  /* big sizs */
  /* border-radius: 45% 49% 0 0; */

  border-radius: 65% 49% 0 0;
}
.right-rect-div {
  flex: 1;
  background-image: var(--gradient-back-bottom-primary);
}
.inner-right-rect-div {
  width: 100%;
  height: 100%;
  border-radius: 0 0 0 58%;
  background-color: white;
}
/* ------------------------------------------------------ */
/* ------------------------------------------------------ */
/* ------------------------------------------------------ */
.section-body {
  /* min-height: 860px; */
  min-height: 95vh;
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  /* background-color: aqua; */
  z-index: 1;
}
.top10-span {
  font-size: 50px;
  width: 50px;
  height: 80px;
  font-weight: bold;
  color: white;
}
.cards-loading-div {
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.items-container-div {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.mobile-items-container-div {
  display: none;
  flex: 0.5;
  width: 100%;
  justify-content: space-evenly;
  /* flex-wrap: wrap; */
}

.item-div {
  padding: 0 10px 15px 10px;
  transition: transform 1.3s, opacity 1.8s;
}
.mobile-item-div {
  padding: 0 10px 15px 10px;
  transition: transform 1.3s, opacity 1.8s;
}

.single-dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 0 5px 0 5px;
  background-color: rgb(227, 227, 227);
  cursor: pointer;
  box-shadow: 0px 0px 0.5px 0.5px rgb(196, 196, 196);
}
.active-dot {
  background-color: rgb(157, 157, 157);
}
@media (max-width: 500px) {
  .mobile-items-container-div {
    display: flex;
  }
  .items-container-div {
    display: none;
  }
  .single-dot {
    height: 15px;
    width: 15px;
    margin: 0 7px 0 7px;
    border-radius: 3px;
  }
}
</style>