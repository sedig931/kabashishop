<template>
  <div
    @click="this.hideCustomerCart"
    class="customer-cart-overlay-div flex-row"
  >
    <div
      v-if="!this.showCartPill && this.cartedProducts.length > 0"
      class="customer-cart-outer-div flex-column"
    >
      <div class="customer-cart-items-div flex-column">
        <div
          v-for="(product, i) in this.cartedProducts"
          :key="i"
          :id="i"
          class="customer-cart-item flex-row"
        >
          <i
            @click="this.dropItem(i)"
            v-if="this.makeMeShow(i)"
            class="bi bi-trash3 flex-row trash-icon"
          ></i>
          <div
            class="single-customer-cart-item text-muted fw-light flex-row"
            :id="i"
            @click="this.showTrashIcon"
          >
            <img
              class="cci-pic-img ms-1"
              :src="`${this.SERVER_URL}/uploads/${product.imgs[0]}`"
            />
            <span class="cci-name-span"> {{ product.name }} </span>
            <div class="cci-quantity-div">
              <input
                class="dec-amount text-muted p-1"
                :id="product._id"
                type="number"
                :value="product.reqquantity"
                @change="this.decReqquantity"
              />
            </div>
            <span class="cci-price-span me-1"> {{ product.price }} </span>
            <span class="cci-price-span me-1">
              {{ product.price * product.reqquantity }}
            </span>
          </div>
        </div>
      </div>
      <div class="cancel-total-confirm-div flex-row">
        <button
          @click="this.$emit('cartConfirmed')"
          class="btn-cancel btn-cancel-confirm"
        >
          Cancel All
        </button>
        <span class="total-price-span fw-bold">{{
          this.cartedProducts.reduce(
            (sum, pro) => sum + Number(pro.price * pro.reqquantity),
            0
          ) + " SDG"
        }}</span>
        <button
          @click="this.confirmPressedLocal"
          class="btn-confirm btn-cancel-confirm"
        >
          Submit
        </button>
      </div>
    </div>
    <CartPill v-if="this.showCartPill" :cart="this.cart" />
    <div
      v-if="
        (!this.showCartPill && this.cartedProducts.length < 1) ||
        (this.cartedProducts.length < 1 && !this.showCartPill)
      "
      class="customer-cart-outer-div empty-cart-div flex-column text-muted"
    >
      <i class="bi bi-cart3 empty-cart-icon flex-row"></i>
      <span class="empty-cart-span"> your cart is empty </span>
    </div>
  </div>
</template>
<script>
import CartPill from "./cartPill.vue";
import { getProduct, addPill } from "../../modal/modal.js";
export default {
  props: ["cartedProducts", "activeUser"],
  components: { CartPill },
  data() {
    return {
      // SERVER_URL: "http://localhost:300",
      SERVER_URL: "https://severkbashi.netlify.app/",
      cart: { products: [] },
      showCartPill: false,
      showSingleTrash: null,
      currentSingleItem: null,

      //propreties
    };
  },
  methods: {
    dropItem(id) {
      this.showSingleTrash = null;
      this.$emit("dropItem", id);
    },
    makeMeShow(id) {
      if (this.showSingleTrash === String(id)) return true;
    },
    showTrashIcon(e) {
      if (
        e.target.classList.contains("cci-quantity-div") ||
        e.target.classList.contains("dec-amount")
      ) {
        return;
      } else {
        this.currentSingleItem = e.currentTarget.id;
        this.showSingleTrash = e.currentTarget.id;
        e.currentTarget.classList.add("hidden-item");
        setTimeout(() => {
          document
            .querySelectorAll(".single-customer-cart-item")
            .forEach((el) => el.classList.remove("hidden-item"));
        }, 150);
      }
    },
    decReqquantity(e) {
      if (e.target.value <= "0") {
        e.target.value = "1";
        return;
      }
      this.cartedProducts.find((pro) => pro._id === e.target.id).reqquantity =
        e.target.value;
      localStorage.setItem(
        "customer-cart",
        JSON.stringify(this.cartedProducts)
      );
    },
    async confirmPressed() {
      try {
        if (this.activeUser && this.cartedProducts.length > 0) {
          const newCart = {};
          newCart.customerID = this.activeUser._id;
          newCart.products = this.cartedProducts.map((pro) => {
            return {
              proID: pro._id,
              quantity: pro.reqquantity,
              // color:pro.color,
              // size:pro.size
            };
          });
          newCart.uid = String(
            Math.floor(new Date().valueOf() * Math.random())
          );
          newCart.delevnum = Math.floor(Math.random() * 90) + 10;

          this.cart = await addPill(newCart);
          // console.log(this.cart);
          const productsInfo = [];
          for (let i = 0; i < this.cart.products.length; i++) {
            productsInfo.push(await getProduct(this.cart.products[i].proID));
            productsInfo[i].reqquantity = this.cart.products[i].quantity;
            // productsInfo[i].color = this.cart.products[i].color;
            // productsInfo[i].size = this.cart.products[i].size;
          }
          this.cart.products = productsInfo;
          this.cart.userName = this.activeUser.fname;
          this.cart.userEmail = this.activeUser.email;
          // this.cart._id = "123";
          this.showCartPill = true;
          this.$emit("cartConfirmed");
        } else {
          if (this.cartedProducts.length > 0) {
            // console.log("no user, go to login page..");
            this.$router.push({
              name: "loginCustomer",
              // params: { id: this.customer._id, lngname: this.lng.name },
            });
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    confirmPressedLocal() {
      if (this.activeUser && this.cartedProducts.length > 0) {
        const newCart = {};
        newCart.customerID = this.activeUser._id;
        newCart.products = this.cartedProducts;
        newCart.uid = String(Math.floor(new Date().valueOf() * Math.random()));
        newCart.delevnum = Math.floor(Math.random() * 90) + 10;

        newCart.userName = this.activeUser.fname;
        newCart.userEmail = this.activeUser.email;
        // this.cart._id = "123";
        this.cart = newCart;
        this.showCartPill = true;
        const customerCarts = JSON.parse(
          localStorage.getItem("localactiveuser")
        ).carts;
        customerCarts.push(this.cart);
        localStorage.setItem(
          "localactiveuser",
          JSON.stringify({
            _id: this.activeUser._id,
            fname: this.activeUser.fname,
            email: this.activeUser.email,
            carts: customerCarts,
          })
        );

        this.$emit("cartConfirmed");
      } else {
        if (this.cartedProducts.length > 0) {
          // console.log("no user, go to login page..");
          this.$router.push({
            name: "loginCustomer",
            // params: { id: this.customer._id, lngname: this.lng.name },
          });
        }
      }
    },
    hideCustomerCart(e) {
      if (e.target === document.querySelector(".customer-cart-overlay-div"))
        this.$emit("showCustomerCart");
    },
  },
  mounted() {
    // Math.floor(new Date().valueOf() * Math.random());
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
  /* opacity: 0; */
  transform: translateX(0.5rem);
}
.customer-cart-overlay-div {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(3px);
  z-index: 1;
}
.customer-cart-outer-div {
  min-height: 250px;
  max-height: 500px;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 3px rgb(196, 196, 196);
}
.customer-cart-items-div {
  /* height: 445px; */
  justify-content: start;
  width: 90%;
  border-radius: 0 0 8px 8px;
  background-color: rgb(226, 226, 226, 0.5);

  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
.customer-cart-item {
  width: 100%;
  cursor: pointer;
  padding: 3px 0 3px 0;
}
.customer-cart-item:hover {
  background-color: rgba(184, 184, 184, 0.2);
}
.single-customer-cart-item {
  flex: 1;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
  transition: transform 0.5s, opacity 0s;
  /* background-color: rgb(179, 179, 179); */
}
.trash-icon {
  flex: 0.01;
  font-size: 14px;
  color: #ea5e4c;
  padding: 0 2px 0 5px;
}
.trash-icon:hover {
  font-size: 15px;
}
.cci-pic-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.dec-amount {
  width: 40px;
  height: 25px;
  font-size: 13px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}
.dec-amount:focus {
  border: 1px solid rgba(10, 101, 212, 0.8);
}
.total-price-span {
  font-size: 15px;
}
.cancel-total-confirm-div {
  width: 90%;
  /* background-color: rgb(192, 41, 129); */
  padding: 10px 0 10px 0;
  justify-content: space-between;
}
.btn-cancel-confirm {
  padding: 3px 0px 5px 0px;
  width: 120px;
  border: 1px solid;
  border-radius: 8px;
  color: white;
  font-size: 15px;
}
.btn-cancel {
  background-image: var(--gradient-Rgb-primary);
}
.btn-confirm {
  background-image: var(--gradient-rGb-primary);
}
.btn-cancel:hover {
  background-image: none;
  background-color: #de3c27;
}
.btn-confirm:hover {
  background-image: none;
  background-color: #1ca51a;
}
.empty-cart-div {
  justify-content: center;
}
.empty-cart-span {
  font-size: 12px;
}
.empty-cart-icon {
  font-size: 70px;
  margin-bottom: 10px;
}
/* ----------------screens----------------- */
/* ----------------screens----------------- */
/* ----------------screens----------------- */
/* ----------------screens----------------- */
@media (max-width: 550px) {
  .customer-cart-outer-div {
    width: 100%;
  }
  .customer-cart-overlay-div {
    padding: 0 15px 0 15px;
  }
  .btn-cancel-confirm {
    font-size: 13px;
    width: 90px;
  }
  .total-price-span {
    font-size: 14px;
  }
  .single-customer-cart-item {
    font-size: 13px;
  }
  .dec-amount {
    height: 22px;
  }
  .cci-pic-img {
    height: 43px;
  }
}
</style>