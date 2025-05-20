<template>
  <div class="allhome-div">
    <Nav
      :cartedProductsLength="this.cartedProducts.length"
      @showCustomerCart="this.toggleCustomerCart"
      @showCustomerPills="toggleCustomerPills"
      @logoutNow="this.logout"
      @filterProducts="this.filterProducts"
      :loggedIn="this.activeUser ? true : false"
    />
    <Section1
      :top10Items="this.top10Items"
      :cartedProducts="this.cartedProducts"
      @addProductToCart="this.addProductToCart"
      @reviewCardProductInfo="this.reviwProductInfo"
    />
    <Section2
      :products="this.products"
      :cartedProducts="this.cartedProducts"
      @addProductToCart="this.addProductToCart"
      @reviewCardProductInfo="this.reviwProductInfo"
    />
    <Section3
      :discProducts="this.discounts"
      :cartedProducts="this.cartedProducts"
      @addProductToCart="this.addProductToCart"
      @reviewCardProductInfo="this.reviwProductInfo"
    />
    <Section4 />
    <CustomerCart
      v-if="this.showCustomerCart"
      :cartedProducts="this.cartedProducts"
      :activeUser="this.activeUser"
      @cartConfirmed="this.cartConfirmed"
      @showCustomerCart="this.showCustomerCart = !this.showCustomerCart"
      @dropItem="this.dropItem"
    />
    <ProductInfo
      v-if="this.showProductInfo"
      :cardItem="this.cardItemInfo"
      :showCardInfo="this.showProductInfo"
      :cartedProducts="this.cartedProducts"
      @hideShowProductInfo="this.showProductInfo = !this.showProductInfo"
      @addProductToCart="this.addProductToCart"
    />
    <Pills
      v-if="this.showCustomerPills"
      @CloseMe="this.showCustomerPills = false"
    />
  </div>
</template>
<script>
// import component files..
import Section1 from "../sections/CHSections/section-1.vue";
import Section2 from "../sections/CHSections/section-2.vue";
import Section3 from "../sections/CHSections/section-3.vue";
import Section4 from "../sections/CHSections/section-4.vue";
import Nav from "../components/CHComponents/nav.vue";
import CustomerCart from "../components/CHComponents/customerCart.vue";
import ProductInfo from "../components/CHComponents/productInfo.vue";
import Pills from "../components/CHComponents/customerPills.vue";
import { getProducts } from "../modal/modal.js";
export default {
  components: {
    Nav,
    CustomerCart,
    Section1,
    Section2,
    Section3,
    Section4,
    ProductInfo,
    Pills,
  },
  data() {
    return {
      //propreties
      activeUser: null,
      showCustomerCart: false,
      showCustomerPills: false,
      showProductInfo: false,
      products: [],
      copyProducts: [],
      filterdProducts: [],
      discounts: [],
      top10Items: [],
      cartedProducts: [],
      cardItemInfo: {},
      // gap gap gap  ---------------&***************-----------------
    };
  },
  methods: {
    toggleCustomerCart() {
      this.showCustomerPills = false;
      this.showCustomerCart = !this.showCustomerCart;
    },
    toggleCustomerPills() {
      this.showCustomerCart = false;
      this.showCustomerPills = !this.showCustomerPills;
    },
    filterProducts(value) {
      if (value === "Show all") {
        this.products = this.copyProducts;
      } else {
        this.filterdProducts = this.copyProducts.filter(
          (product) => product.classi === value.toLowerCase()
        );
        this.products = this.filterdProducts;
      }
      document
        .querySelector(".section-2-div")
        .scrollIntoView({ behavior: "smooth" });
    },
    dropItem(i) {
      this.cartedProducts = this.cartedProducts.filter(
        (item, index) => index !== i
      );
      localStorage.setItem(
        "customer-cart",
        JSON.stringify(this.cartedProducts)
      );
    },
    cartConfirmed() {
      localStorage.setItem("customer-cart", JSON.stringify([]));
      this.cartedProducts = [];
    },
    addProductToCart(proID) {
      if (
        this.cartedProducts.findIndex((product) => product.id === proID) !== -1
      ) {
        //drop item from carted items list
      } else {
        this.cartedProducts.push(
          this.products[this.products.findIndex((pro) => pro._id === proID)]
        );
        const customerCart = JSON.parse(localStorage.getItem("customer-cart"));
        customerCart.push(this.cartedProducts[this.cartedProducts.length - 1]);
        localStorage.setItem("customer-cart", JSON.stringify(customerCart));
      }
    },
    reviwProductInfo(proID) {
      this.cardItemInfo = this.products.find((pro) => pro._id === proID);
      this.showProductInfo = true;
    },
    async initProducts() {
      try {
        this.products = await getProducts();
        this.products.forEach((product, index) => {
          product.reqquantity = "1";
          if (index < 9) this.top10Items.push(product);
          if (product.discount > 0) this.discounts.push(product);
        });
        this.copyProducts = this.products;

        this.initCustomerCart();
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
    initCustomerCart() {
      if (JSON.parse(localStorage.getItem("customer-cart"))) {
        if (JSON.parse(localStorage.getItem("customer-cart")).length > 0) {
          // console.log("customer had a pended cart");
          this.cartedProducts = JSON.parse(
            localStorage.getItem("customer-cart")
          );
        } else {
          // console.log("customer carts empty");
        }
      } else {
        localStorage.setItem("customer-cart", JSON.stringify([]));
        // console.log("not found, added now");
      }
    },
    async initAciveUser() {
      try {
        const user = await fetch("http://localhost:300/login/active/user", {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => data);
        this.activeUser = user;
      } catch (err) {
        console.log(err.message);
      }
    },
    async logout() {
      try {
        await fetch("http://localhost:300/destroy", {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.activeUser = null;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  mounted() {
    // this.initAciveUser();
    this.initProducts();
  },
};
</script>

<style scoped>
</style>