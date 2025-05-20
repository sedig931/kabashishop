<template>
  <div
    class="cart-item-info-div flex-row"
    v-if="this.showCardInfo"
    @click="this.showHideCardInfo"
  >
    <div class="inner-card-item-info-div hidden-item flex-column">
      <div class="item-imgs-div flex-row">
        <div
          class="single-img-div p-2 flex-row"
          v-for="(img, index) in this.cardItem.imgs"
          :key="index"
          v-show="this.activeImgInfo === index"
        >
          <img
            class="single-img"
            :src="`http://localhost:300/uploads/${img}`"
            alt=""
          />
          <div
            class="next-back-img-div flex-row text-muted"
            v-show="this.cardItem.imgs.length > 1"
          >
            <i
              class="bi bi-caret-left icon-left-right flex-row"
              @click="
                this.activeImgInfo > 0
                  ? this.activeImgInfo--
                  : (this.activeImgInfo = this.cardItem.imgs.length - 1)
              "
            >
            </i>
            <i
              class="bi bi-caret-right icon-left-right flex-row"
              @click="
                this.activeImgInfo + 1 < this.cardItem.imgs.length
                  ? this.activeImgInfo++
                  : (this.activeImgInfo = 0)
              "
            ></i>
          </div>
        </div>
      </div>
      <div class="name-disc-div flex-column">
        <span class="product-name-span text-success">{{
          this.cardItem.name
        }}</span>
        <span class="product-disc-span fw-light fst-italic text-muted">{{
          this.cardItem.disc
        }}</span>
        <div class="price-div mt-1 flex-row">
          <span
            v-if="this.cardItem.discount > 0"
            class="item-span item-price-span item-discprice-span ps-2 ms-2 pe-2 me-2"
            :class="
              this.cardItem.discount > 0 ? 'item-discount-price-span' : ''
            "
            >{{ this.cardItem.price - this.cardItem.discount + " SDG" }}</span
          >
          <span
            class="item-span item-price-span ps-2 pe-2 ms-2 me-2"
            :class="this.cardItem.discount > 0 ? 'item-actual-price-span' : ''"
            >{{ this.cardItem.price + " SDG" }}</span
          >
        </div>
        <button
          class="btn-add-to-cart btn-add-to-cart-info mt-2 flex-row"
          :class="this.checkCarted() !== -1 ? 'btn-carted-style' : ''"
          @click="this.addToCart"
        >
          <div v-if="this.checkCarted() === -1" class="flex-row">
            <i class="bi bi-cart3 cart-icon ms-2 me-2 flex-row"></i>
            <span> Add to cart </span>
          </div>
          <div v-if="this.checkCarted() !== -1" class="flex-row">
            <i class="bi bi-cart-fill cart-icon ms-2 me-2 flex-row"></i>
            <span>Carted</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cardItem", "showCardInfo", "cartedProducts"],
  components: {},
  data() {
    return {
      activeImgInfo: 0,
      //propreties
    };
  },
  methods: {
    showHideCardInfo(e) {
      e.target !== document.querySelector(".cart-item-info-div")
        ? null
        : this.$emit("hideShowProductInfo");
    },
    checkCarted() {
      return this.cartedProducts.findIndex(
        (pro) => pro._id === this.cardItem._id
      );
    },
    addToCart() {
      this.$emit("addProductToCart", this.cardItem._id);
    },
  },
  mounted() {
    setTimeout(() => {
      document
        .querySelector(".inner-card-item-info-div")
        .classList.remove("hidden-item");
    }, 5);
  },
};
</script>
<style scoped>
.hidden-item {
  opacity: 0;
  transform: translateY(3rem);
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
.cart-item-info-div {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(3px);
  z-index: 1;
  /* background-color: aqua; */
}
.inner-card-item-info-div {
  /* height: 60%; */
  width: 600px;
  max-height: 800px;
  background-color: rgba(255, 255, 255, 0.9);
  justify-content: space-between;
  /* border: 1px solid white; */
  border-radius: 8px;
  box-shadow: 0px 0px 0.5px 0.5px rgb(196, 196, 196);
  transition: transform 0.5s, opacity 0.5s;
  padding-bottom: 5px;
  margin: 10px;
}
.item-imgs-div {
  flex: 1;
  width: 100%;
  /* background-color: rgb(0, 255, 238); */
}
.single-img-div {
  position: relative;
  width: 100%;
  /* max-height: 500px; */
  /* background-color: rgb(89, 78, 78); */
}
.single-img {
  max-height: 500px;
  /* width: 100%; */
  border-radius: 8px 8px 0 0;
}
.next-back-img-div {
  position: absolute;
  bottom: 10px;
}
.icon-left-right {
  padding: 3px;
  border: 1px solid white;
  border-radius: 50%;
  margin: 0 10px 0 10px;
  padding: 2px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 0.5px 0.5px rgb(221, 221, 221);
}
.name-disc-div {
  flex: 0.3;
  width: 100%;
  /* background-color: red; */
}
.product-name-span,
.product-price-span {
  font-size: 19px;
}
.item-actual-price-span {
  /* background-image: var(--gradient-rGb-primary); */
  background-image: var(--gradient-Rgb-primary);
  text-decoration: line-through;
  border-radius: 7px;
  color: white;
}

.item-discount-price-span {
  color: white;
  border-radius: 7px;
  background-image: var(--gradient-rGb-primary);
}
.product-disc-span {
  width: 100%;
  padding: 3px 5px 3px 5px;
  font-size: 13px;
  text-align: center;
}
.btn-add-to-cart {
  justify-content: space-evenly;
  color: white;
  background-color: rgb(73, 73, 73);
  padding: 4px 12px 4px 12px;
  border: 1px solid rgb(73, 73, 73);
  border-radius: 8px;
  font-size: 15px;
  transition: background-color 0.5s;
}
.btn-add-to-cart:hover {
  background-color: rgb(235, 235, 235);
  color: rgb(73, 73, 73);
}
.btn-carted-style {
  background-image: var(--gradient-rGb-primary);
  border-color: rgb(44, 202, 65);
}
.btn-carted-style:hover {
  background-image: none;
  background-color: rgb(235, 235, 235);
  border-color: rgb(73, 73, 73);
}
.btn-add-to-cart-info {
  width: 170px;
}
@media (min-height: 790px) and (max-height: 1000px) {
  .single-img {
    max-height: 350px;
  }
}
@media (min-height: 660px) and (max-height: 790px) {
  .single-img {
    max-height: 300px;
  }
}
@media (max-height: 660px) {
  .single-img {
    max-height: 250px;
  }
}

@media (min-width: 495px) and (max-width: 610px) {
  .single-img {
    max-height: 350px;
  }
}
@media (max-width: 495px) {
  .single-img {
    max-height: 250px;
  }
}
</style>