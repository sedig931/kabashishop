<template>
  <div class="customer-pills-overlay-div flex-row" @click="this.closeMe">
    <div class="customer-pills-outer-div flex-row">
      <div v-show="!singlePill" class="customer-pills-headers-div flex-column">
        <div
          v-for="(pill, i) in this.pendedPills"
          :key="i"
          :id="i"
          class="sinle-customer-pill-header text-muted flex-column"
        >
          <div class="date-div">
            <span>2025/12/12</span>
          </div>
          <div class="body-div flex-row">
            <span class="fw-bold">
              {{
                pill.products.reduce(
                  (sum, pro) => sum + Number(pro.price * pro.reqquantity),
                  0
                ) + " SDG"
              }}
            </span>
            <span class="delevnum-span fw-bold">{{ pill.delevnum }}</span>
            <span
              class="pended-span flex-row"
              :class="pill.deleverd ? 'deleverd-span' : ''"
            >
              {{ pill.deleverd ? "deleverd" : "pended" }}
              <i
                v-if="!pill.deleverd"
                class="bi bi-clock-history flex-row ms-1 me-1"
              ></i>
              <i
                v-if="pill.deleverd"
                class="bi bi-house-check-fill flex-row ms-1 me-1"
              ></i>
            </span>
            <button
              @click="this.singlePill = this.pendedPills[i]"
              class="pill-detail-btn border"
            >
              details
            </button>
          </div>
        </div>
      </div>
      <div v-if="this.singlePill" class="single-pill-detail flex-column">
        <div class="back-icon-div flex-row">
          <i
            @click="this.singlePill = null"
            class="bi bi-arrow-left back-icon flex-row mt-1 mb-1"
          ></i>
        </div>
        <CartPill :cart="this.singlePill" />
      </div>
    </div>
  </div>
</template>
<script>
import { getPills, getProduct } from "../../modal/modal.js";
import CartPill from "../CHComponents/cartPill.vue";
export default {
  components: { CartPill },
  data() {
    return {
      pendedPills: [],
      singlePill: null,
      //propreties
    };
  },
  methods: {
    async checkPills() {
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
        this.pendedPills = await getPills(user._id);

        for (let y = 0; y < this.pendedPills.length; y++) {
          let productsInfo = [];
          const singlePill = this.pendedPills[y];
          for (let i = 0; i < singlePill.products.length; i++) {
            productsInfo.push(await getProduct(singlePill.products[i].proID));
            productsInfo[i].reqquantity = singlePill.products[i].quantity;
            // productsInfo[i].color = this.cart.products[i].color;
            // productsInfo[i].size = this.cart.products[i].size;
          }
          singlePill.products = productsInfo;
          singlePill.userName = user.fname;
          singlePill.userEmail = user.email;
          productsInfo = [];
        }
        // console.log(this.pendedPills);
      } catch (err) {
        console.log(err.message);
      }
    },
    closeMe(e) {
      if (e.target.classList.contains("customer-pills-overlay-div")) {
        this.$emit("CloseMe");
      }
    },
  },
  mounted() {
    this.checkPills();
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
.customer-pills-overlay-div {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(3px);
  z-index: 1;
}
.customer-pills-outer-div {
  min-height: 250px;
  max-height: 500px;
  width: 500px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0px 0px 5px 3px rgb(196, 196, 196);
}
.customer-pills-headers-div {
  min-height: 250px;
  max-height: 500px;
  border-radius: inherit;
  width: 100%;
  padding: 5px;
  justify-content: start;

  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
.sinle-customer-pill-header {
  width: 100%;
  font-size: 11px;
  margin: 3px 0 3px 0;
  padding: 2px 4px 2px 4px;
  border-radius: 2px 0 0 2px;
  background-color: aliceblue;
  border-left: 2px solid rgb(128, 155, 236);
}
.date-div {
  flex: 0.3;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2px 0 2px 0;
}
.body-div {
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding: 2px 0 2px 0;
}
.pended-span {
  color: #5591e5;
}
.deleverd-span {
  color: #3ca94b;
}
.pill-detail-btn {
  width: 45px;
  height: 20px;
  font-size: 11px;
  border-radius: 5px;
  background-color: white;
  color: rgb(74, 74, 74);
}
.pill-detail-btn:hover {
  color: white;
  background-image: var(--btnLogin-hover-primary);
}
.single-pill-detail {
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 0;
}
.back-icon-div {
  justify-content: start;
  width: 300px;
  padding: 0px 0 4px 0;
  font-size: 15px;
  border-radius: inherit;
}
.back-icon {
  cursor: pointer;
  color: rgb(74, 74, 74);
}
.back-icon:hover {
  color: #5591e5;
}
</style>