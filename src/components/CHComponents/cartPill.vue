    <template>
  <div class="customer-cart-confirmed-outer-div flex-column">
    <div class="customer-cart-confirmed-div flex-column border text-muted">
      <div class="done-icon-div flex-row hidden-item">
        <i class="bi bi-check-circle check-icon flex-row"></i>
        <span class="confirmed-span">confirmed succeccfully</span>
        <span class="confirmed-date-span">12/12/2012</span>
      </div>
      <div class="confirmed-item flex-row">
        <span class="confirmed-pro-name-span">name</span>
        <span class="conrirmed-spans"> color </span>
        <span class="conrirmed-spans"> size </span>
        <span class="conrirmed-spans"> Qt </span>
        <span class="conrirmed-spans"> price </span>
        <span class="conrirmed-spans"> t-price </span>
      </div>
      <div
        class="confirmed-item flex-row"
        v-for="(product, i) in this.cart.products"
        :key="i"
        :id="i"
      >
        <span class="confirmed-pro-name-span"> {{ product.name }} </span>
        <span class="conrirmed-spans">{{
          product.color ? product.color : "-"
        }}</span>
        <span class="conrirmed-spans">{{
          product.size ? product.size : "-"
        }}</span>
        <span class="conrirmed-spans">{{ product.reqquantity }}</span>
        <span class="conrirmed-spans"> {{ product.price }} </span>
        <span class="conrirmed-spans">
          {{ product.price * product.reqquantity }}
        </span>
      </div>
      <div class="conirm-cart-det-div flex-column">
        <div class="line-div"></div>
        <span>
          total amount :
          <span class="fw-bold">
            {{
              this.cart.products.reduce(
                (sum, pro) => sum + Number(pro.price * pro.reqquantity),
                0
              ) + " SDG"
            }}
          </span>
        </span>
        <span>{{ "name : " + this.cart.userName }}</span>
        <span>{{ "email : " + this.cart.userEmail }}</span>
        <span>{{ "_id : " + this.cart.uid }}</span>
        <span>
          delevery num :
          <span class="fw-bold">
            {{ " " + this.cart.delevnum }}
          </span>
        </span>
      </div>
    </div>
    <div class="downlod-pill-div flex-row text-muted border mt-1">
      <button class="download-btn flex-row" @click="this.downloadPill">
        <i class="bi bi-download flex-row ms-2 me-2"></i>
        Download
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cart"],
  components: {},
  data() {
    return {
      //propreties
    };
  },
  methods: {
    downloadPill() {
      console.log("download pill");
    },
  },
  mounted() {
    // this.getProductInf();
    // console.log(this.cart.products);
    setTimeout(() => {
      document.querySelector(".done-icon-div").classList.remove("hidden-item");
    }, 5);
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
  transform: translateY(-1rem);
}
.customer-cart-confirmed-outer-div {
  /* min-height: 250px; */
  /* max-height: 500px; */
  /* width: 500px; */
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 3px rgb(196, 196, 196);
}
.customer-cart-confirmed-div {
  width: 300px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 11px;
  border-radius: 7px;
}
.done-icon-div {
  width: 95%;
  height: 20px;
  padding-left: 3px;
  padding-right: 5px;
  margin: 0 0 2px 0;
  font-size: 10px;
  color: white;
  justify-content: space-between;
  background-image: var(--gradient-rGb-primary);
  border-radius: 10px;
  transition: transform 0.5s, opacity 0.5s;
}
.check-icon {
  font-size: 14px;
}
.confirmed-item {
  width: 90%;
  margin: 1px 0 0px 0;
  justify-content: space-between;
  /* background-color: red; */
}
.confirmed-pro-name-span {
  flex: 1;
}
.conrirmed-spans {
  flex: 0.3;
  text-align: center;
}
.line-div {
  width: 100%;
  height: 1px;
  background-color: rgb(196, 196, 196);
  border-radius: 10px;
}
.conirm-cart-det-div {
  width: 90%;
  align-items: flex-start;
}
.downlod-pill-div {
  width: 100%;
  border-radius: 7px;
}
.download-btn {
  border: none;
  background-color: inherit;
  width: 60%;
  /* justify-content: space-around; */
  padding: 2px;
  font-size: 13px;
  color: rgb(74, 74, 74);
}
.download-btn:hover {
  color: #5591e5;
}
</style>