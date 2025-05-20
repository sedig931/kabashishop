<template>
  <form
    v-if="!this.verfing"
    @submit.prevent="this.registerUser"
    class="register-form flex-column p-3"
  >
    <div class="lbl-input-div">
      <div class="single-lbl-input-div">
        <label class="lbl-formElement flex-row text-muted" for="nameInput">
          <span class="lbl-span">User Name</span>
          <span class="double-dot-span">:</span>
        </label>
        <input
          v-model="this.newUser.name"
          class="txtInput-formElement text-muted"
          name="nameInput"
          type="text"
          placeholder="enter simple name"
          required
        />
      </div>
      <div class="single-lbl-input-div">
        <label class="lbl-formElement flex-row text-muted" for="nameInput">
          <span class="lbl-span">Full Name</span>
          <span class="double-dot-span">:</span>
        </label>
        <input
          v-model="this.newUser.fname"
          class="txtInput-formElement text-muted"
          name="nameInput"
          type="text"
          placeholder="enter full name"
          required
        />
      </div>
      <div class="single-lbl-input-div">
        <label class="lbl-formElement flex-row text-muted" for="nameInput">
          <span class="lbl-span">Phone Number</span>
          <span class="double-dot-span">:</span>
        </label>
        <input
          v-model="this.newUser.phone"
          class="txtInput-formElement text-muted"
          name="nameInput"
          type="text"
          placeholder="your phone number"
          required
        />
      </div>
      <div class="single-lbl-input-div">
        <label class="lbl-formElement flex-row text-muted" for="nameInput">
          <span class="lbl-span">Email</span>
          <span class="double-dot-span">:</span>
        </label>
        <input
          v-model="this.newUser.email"
          class="txtInput-formElement text-muted"
          :class="this.wrongEmail ? 'red-input-border' : ''"
          @change="this.wrongEmail = false"
          name="nameInput"
          type="email"
          placeholder="your email"
          required
        />
      </div>
      <div class="single-lbl-input-div">
        <label class="lbl-formElement flex-row text-muted" for="nameInput">
          <span class="lbl-span">password</span>
          <span class="double-dot-span">:</span>
        </label>
        <input
          v-model="this.newUser.password"
          class="txtInput-formElement text-muted"
          :class="this.passwordIsSame ? '' : 'red-input-border'"
          name="nameInput"
          type="password"
          @change="this.passwordIsSame = true"
          placeholder="password"
          required
        />
      </div>
      <div class="single-lbl-input-div">
        <label class="lbl-formElement flex-row text-muted" for="nameInput">
          <span class="lbl-span">Retype-password</span>
          <span class="double-dot-span">:</span>
        </label>
        <input
          v-model="this.retypePassword"
          class="txtInput-formElement text-muted"
          :class="this.passwordIsSame ? '' : 'red-input-border'"
          name="nameInput"
          type="password"
          @change="this.passwordIsSame = true"
          placeholder="re-write password"
          required
        />
      </div>
    </div>
    <button class="register-btn fw-bold" type="submit">Register</button>
    <span @click="this.$emit('switchForms')" class="have-account-span fw-light"
      >allready have account ?</span
    >
  </form>
  <VerfForm
    v-if="this.verfing"
    @dontReciveNumber="this.dontReciveNumber"
    @correctVerfi="this.correctVerfi"
  />
</template>
<script>
import VerfForm from "../forms/verfform.vue";
import { addCustomer, login } from "../../../modal/modal.js";
export default {
  emits: ["switchForms"],
  components: {
    VerfForm,
  },
  data() {
    return {
      newUser: {
        name: "",
        fname: "",
        phone: "",
        email: "",
        password: "",
      },
      retypePassword: "",
      // newUser: {
      //   name: "name",
      //   fname: "fullName",
      //   phone: "12456789",
      //   email: "1@mail.com",
      //   password: "123456789",
      // },
      // retypePassword: "123456789",
      passwordIsSame: true,
      verfing: false,
      wrongEmail: false,
      //propreties
    };
  },
  methods: {
    registerUser() {
      if (this.newUser.password === this.retypePassword) {
        console.log(
          "ok send verf number to email and go to verfication foem..."
        );
        this.verfing = true;
      } else {
        this.passwordIsSame = false;
      }
    },
    async correctVerfi() {
      try {
        await addCustomer(this.newUser);
        await login({
          email: this.newUser.email,
          password: this.newUser.password,
        });
        this.$router.push({
          name: "home",
          // params: { id: this.customer._id, lngname: this.lng.name },
        });
        console.log("cusomer added successfuly..");
      } catch (err) {
        console.log(err.message);
      }
    },
    dontReciveNumber() {
      this.verfing = false;
      this.wrongEmail = true;
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
.lbl-input-div {
  width: 100%;
}
.single-lbl-input-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px;
}
.register-form {
  height: 100%;
  width: 100%;
  border-radius: inherit;
  /* justify-content: space-evenly; */
}
.lbl-formElement {
  width: 100%;
  margin: 0 5px 0 5px;
  font-size: 14px;
  justify-content: space-between;
  /* background-color: red; */
}
.txtInput-formElement {
  margin: 0 5px 0 5px;
  height: 25px;
  width: 100%;
  border-radius: 7px;
  font-size: 12.12px;
  border: 1px solid #ccc;
  padding: 5px;

  /* box-sizing: border-box; */
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
.txtInput-formElement:focus {
  border: 1px solid #5db8e6;
  box-shadow: 0px 0px 1px 1px rgba(103, 185, 223, 0.5);
}
.txtInput-formElement::placeholder {
  color: rgba(60, 60, 60, 0.4);
}

.red-input-border {
  border-color: rgb(238, 51, 51, 0.7);
}

.register-btn {
  margin-top: 15px;
  height: 25px;
  width: 40%;
  border-radius: 8px;
  border: none;
  background-image: var(--gradient-btnLogin-primary);
  color: white;
  font-size: 14px;
}
.register-btn:hover {
  background-image: var(--btnLogin-hover-primary);
  /* background-image: none; */
  /* background-color: #1ca51a; */
  color: white;
}
.have-account-span {
  font-size: 11px;
  color: rgb(58, 87, 203);
  cursor: pointer;
  padding-top: 10px;
}
@media (max-width: 550px) {
  .single-lbl-input-div {
    flex-direction: column;
  }
  .lbl-formElement {
    justify-content: start;
    padding: 0 0 2px 1px;
  }
  .lbl-span {
    padding: 0 5px 0 0;
  }
}
</style>