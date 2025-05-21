<template>
  <div class="single-cart-div flex-column">
    <div v-if="!this.imgloaded" class="loading-img-div flex-row">
      <i class="bi bi-file-image file-image-icon flex-row"></i>
    </div>
    <div
      v-show="this.imgloaded"
      class="item-img-div flex-row"
      @mouseenter="this.showViewBtn = true"
      @mouseleave="this.showViewBtn = false"
    >
      <img
        :onload="this.imgloadedfun"
        class="item-img"
        :src="`${this.SERVER_URL}/uploads/${this.cardItem.imgs[0]}`"
        alt=""
      />
      <button
        class="btn-item-reviw"
        v-show="this.showViewBtn"
        @click="reviewCardInfo"
      ></button>
    </div>
    <div class="item-price-det-div m-2 flex-column text-muted">
      <div class="price-div mt-1 flex-row">
        <span
          v-if="this.cardItem.discount > 0"
          class="item-span item-price-span item-discprice-span ps-2 ms-2 pe-2 me-2"
          :class="this.cardItem.discount > 0 ? 'item-discount-price-span' : ''"
          >{{ this.cardItem.price - this.cardItem.discount + " SDG" }}</span
        >
        <span
          class="item-span item-price-span fw-bold ps-2 pe-2 ms-2 me-2"
          :class="this.cardItem.discount > 0 ? 'item-actual-price-span' : ''"
          >{{ this.cardItem.price + " SDG" }}</span
        >
      </div>
      <span class="item-span item-name-span">{{ this.cardItem.name }}</span>
      <button
        class="btn-add-to-cart mt-2 flex-row"
        :class="this.checkCarted() !== -1 ? 'btn-carted-style' : ''"
        @click="this.addToCart"
      >
        <div v-if="this.checkCarted() === -1" class="flex-row">
          <i class="bi bi-cart3 cart-icon ms-1 me-1 flex-row"></i>
          <span class="ms-1 me-1"> Add to cart </span>
        </div>
        <div v-if="this.checkCarted() !== -1" class="flex-row">
          <i class="bi bi-cart-fill cart-icon ms-1 me-1 flex-row"></i>
          <span class="ms-1 me-1">Carted</span>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
// import component files..
export default {
  emits: ["addItemToCart", "showCardInfo"],
  props: ["cardItem", "cartedProducts"],
  components: {},
  data() {
    return {
      // SERVER_URL: "http://localhost:300",
      SERVER_URL: "https://severkbashi.netlify.app/",
      showViewBtn: false,
      showCardInfo: false,
      activeImgInfo: 0,
      imgloaded: false,
      //propreties
    };
  },
  methods: {
    imgloadedfun() {
      this.imgloaded = true;
    },
    reviewCardInfo() {
      this.$emit("showCardInfo", this.cardItem._id);
    },
    addToCart() {
      this.$emit("addItemToCart", this.cardItem._id);
    },
    checkCarted() {
      return this.cartedProducts.findIndex(
        (pro) => pro._id === this.cardItem._id
      );
    },
  },
  mounted() {
    // nothing..
  },
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
.hidden-item {
  opacity: 0;
  transform: translateY(3rem);
}
.loading-img-div {
  width: 450px;
  height: 450px;
  /* width: 100%; */
  border-radius: 7px;
  background-color: rgba(232, 231, 231, 0.4);
}
.file-image-icon {
  font-size: 120px;
  color: rgb(94, 94, 94, 0.6);
}
.item-img-div {
  position: relative;
  max-height: 600px;
  width: 450px;
  border: 1px solid white;
  border-radius: 7px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 4.5px 1.5px rgb(188, 188, 188);
}
.item-img {
  max-height: inherit;
  width: 100%;
  border-radius: inherit;
}
.btn-item-reviw {
  position: absolute;
  /* bottom: 20px; */
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1.5px solid white;
  border: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 8px;
  /* color: rgb(255, 251, 251); */
  /* background-color: rgba(168, 168, 168, 0.5); */
  /* padding: 3px 25px 3px 25px; */
}
.item-price-det-div {
  max-width: 450px;
}
.item-price-span {
  font-size: 18px;
  /* font-weight: bold; */
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
.item-name-span {
  font-size: 16px;
  align-items: center;
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
/* ----------------CARD MEDIAQUERY---------- */
/* ----------------CARD MEDIAQUERY---------- */
/* ----------------CARD MEDIAQUERY---------- */
@media (min-width: 390px) and (max-width: 500px) {
  .item-img-div {
    max-height: 600px;
    width: 350px;
  }
  .loading-img-div {
    height: 300px;
    width: 300px;
  }
}
@media (max-width: 390px) {
  .item-img-div {
    max-height: 600px;
    width: 250px;
  }
  .loading-img-div {
    height: 280px;
    width: 280px;
  }
}
@media (max-width: 500px) {
  .item-price-span {
    font-size: 15px;
    /* font-weight: bold; */
  }
  .btn-add-to-cart {
    font-size: 14px;
  }
}
</style>
