<template>
  <div class="nav flex-row">
    <div class="inner-nav-div flex-row">
      <div
        v-if="this.pendedPills.length > 0"
        class="cart-nav-div flex-row me-1"
        :class="this.pendedPills.length > 0 ? 'cart-nav-full-div' : ''"
        @click="this.$emit('showCustomerPills')"
      >
        <div class="cart-coun-div bg-danger flex-row">
          <span class="cart-count-span">
            {{ this.pendedPills.length }}
          </span>
        </div>
        <i class="bi bi-cart-check-fill cart-icon flex-row"></i>
      </div>
      <div
        class="cart-nav-div flex-row ms-2"
        :class="this.cartedProductsLength > 0 ? 'cart-nav-full-div' : ''"
        @click="this.$emit('showCustomerCart')"
      >
        <div
          class="cart-coun-div bg-danger flex-row"
          v-if="this.cartedProductsLength > 0"
        >
          <span class="cart-count-span">
            {{ this.cartedProductsLength }}
          </span>
        </div>
        <i class="bi bi-cart3 cart-icon flex-row"></i>
      </div>
      <div class="drop-down-outer-div">
        <div
          @click="this.dropdownItemsOn = !this.dropdownItemsOn"
          class="drop-down-div flex-column"
        >
          <!-- last chane -->
          <div
            class="drop-down-header-div flex-row"
            :class="this.dropdownItemsOn ? 'drop-down-div-downded' : ''"
          >
            <label class="active-item">{{ this.filterValue }}</label>
            <div class="up-down-div flex-column">
              <i
                v-show="this.dropdownItemsOn"
                class="bi bi-chevron-up down-up-icon flx-row"
              ></i>
              <i
                v-show="!this.dropdownItemsOn"
                class="bi bi-chevron-down down-up-icon flex-row"
              ></i>
            </div>
          </div>
          <div
            class="drop-down-items-div flex-column"
            v-show="this.dropdownItemsOn"
          >
            <span
              @click="this.filterProducts"
              class="drop-down-item"
              :class="this.filterValue === 'Men' ? 'active-drop-down-item' : ''"
              id="Men"
              >Men</span
            >
            <span
              @click="this.filterProducts"
              class="drop-down-item"
              :class="
                this.filterValue === 'Women' ? 'active-drop-down-item' : ''
              "
              id="Women"
              >Women</span
            >
            <span
              @click="this.filterProducts"
              class="drop-down-item"
              :class="
                this.filterValue === 'Children' ? 'active-drop-down-item' : ''
              "
              id="Children"
              >Children</span
            >
            <span
              @click="this.filterProducts"
              class="drop-down-item"
              :class="
                this.filterValue === 'Show all' ? 'active-drop-down-item' : ''
              "
              id="Show all"
              >Show all</span
            >
          </div>
        </div>
      </div>
      <button
        class="btn-login"
        :class="this.loggedIn ? 'btn-logout' : ''"
        @click="this.login"
      >
        {{ this.loggedIn ? "Logout" : "login" }}
      </button>
    </div>
  </div>
</template>
<script>
// import component files..
import { getPills, SERVER_URL } from "../../modal/modal.js";
export default {
  props: ["cartedProductsLength", "loggedIn"],
  components: {},
  data() {
    return {
      dropdownItemsOn: false,
      filterValue: "Show all",
      pendedPills: [],
      //propreties
    };
  },
  methods: {
    filterProducts(e) {
      this.filterValue = e.target.id;
      this.$emit("filterProducts", this.filterValue);
    },
    login() {
      if (this.loggedIn) {
        this.$emit("logoutNow");
      } else {
        this.$router.push({
          name: "loginCustomer",
        });
      }
    },
    async checkPills() {
      try {
        const user = await fetch(`${SERVER_URL}/login/active/user`, {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => data);
        this.pendedPills = await getPills(user._id);
      } catch (err) {
        console.log(err.message);
      }
    },
    checkPillsLocal() {
      if (JSON.parse(localStorage.getItem("localactiveuser"))) {
        if (
          JSON.parse(localStorage.getItem("localactiveuser")).carts.length > 0
        ) {
          this.pendedPills = JSON.parse(
            localStorage.getItem("localactiveuser")
          ).carts;
        }
      }
    },
  },
  mounted() {
    // this.checkPills();
    this.checkPillsLocal();
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
.nav {
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  color: rgb(62, 62, 62);
  z-index: 2;
}
.inner-nav-div {
  height: 40px;
  width: 60%;
  justify-content: space-evenly;
}
.cart-nav-div {
  position: relative;
  /* height: 40px; */
  height: 100%;
  width: 40px;
  border-radius: 50%;
  border: 2px solid rgb(73, 73, 73);
  color: rgb(73, 73, 73);
  background-color: rgb(235, 235, 235);
  cursor: pointer;
  transition: background-color 0.5s;
}
.cart-nav-div:hover {
  background-color: rgb(73, 73, 73);
  color: white;
}
.cart-nav-full-div {
  background-color: rgb(73, 73, 73);
  color: white;
}
.cart-nav-full-div:hover {
  background-color: rgb(235, 235, 235);
  color: rgb(73, 73, 73);
}
.cart-icon {
  font-size: 25px;
}
.drop-down-outer-div {
  position: relative;
  flex: 1;
  height: 100%;
  max-width: 300px;
  margin: 0 10px 0 10px;
}
.drop-down-div {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background-color: rgb(235, 235, 235);
  border-radius: 9px;
  border: 2px solid rgb(73, 73, 73);
  color: rgb(73, 73, 73);
  /* justify-content: start; */
  padding: 0 10px 0 10px;
}
.drop-down-header-div {
  /* min-height: 100%; */
  width: 100%;
}
.drop-down-div-downded {
  padding-top: 5px;
}
.drop-down-items-div {
  width: 100%;
  align-items: flex-start;
}

.down-up-icon {
  font-size: 17px;
  font-weight: bolder;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: rgb(20, 20, 20);
}
.up-down-div {
  height: 100%;
}
.active-item {
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
}
.drop-down-item {
  font-size: 15px;
  padding: 3px 0 3px 0;
  cursor: pointer;
}
.drop-down-item:hover {
  font-weight: bold;
}
.active-drop-down-item {
  font-weight: bold;
}
.btn-login {
  /* height: 39px; */
  height: 100%;
  width: 80px;
  border: 2px solid rgb(73, 73, 73);
  border-radius: 7px;
  color: rgb(73, 73, 73);
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(235, 235, 235);
  cursor: pointer;
  transition: background-color 0.5s;
  outline: none;
}
.btn-login:hover {
  background-color: rgb(73, 73, 73);
  color: white;
}
.btn-logout {
  background-color: rgb(73, 73, 73);
  color: rgb(235, 235, 235);
}
.btn-logout:hover {
  color: rgb(73, 73, 73);
  background-color: white;
}
/* -----------cart count------------- */
.cart-coun-div {
  position: absolute;
  top: -5px;
  right: -5px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  text-align: center;
  font-size: 9px;
  color: white;
  border: 0.5px solid white;
  box-shadow: 0px 0px 0.5px 0.5px rgb(185, 185, 185);
}
@media (min-width: 550px) and (max-width: 800px) {
  .inner-nav-div {
    width: 70%;
  }
}
@media (min-width: 400px) and (max-width: 550px) {
  .inner-nav-div {
    width: 80%;
    height: 35px;
  }
  .cart-nav-div {
    width: 35px;
  }
  .cart-icon {
    font-size: 23px;
  }
  .down-up-icon {
    font-size: 16px;
  }

  .active-item {
    font-size: 14px;
  }

  .drop-down-item {
    font-size: 14px;
  }
  .btn-login {
    font-size: 14px;
  }
}
@media (max-width: 400px) {
  .inner-nav-div {
    width: 85%;
    height: 30px;
  }
  .cart-nav-div {
    width: 30px;
  }
  .cart-icon {
    font-size: 21px;
  }
  .down-up-icon {
    font-size: 14px;
  }

  .active-item {
    font-size: 13px;
  }

  .drop-down-item {
    font-size: 13px;
  }
  .btn-login {
    font-size: 13px;
  }
}
</style>