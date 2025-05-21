    <template>
  <!-- ----------------LOGIN FORM------------------------- -->
  <!-- ----------------LOGIN FORM------------------------- -->
  <!-- ----------------LOGIN FORM------------------------- -->
  <form class="login-form p-3" @submit.prevent="this.loginlocal">
    <div class="single-lbl-input-div">
      <label class="lbl-formElement text-muted" for="nameInput">
        <span class="lbl-span">Email</span>
        <span class="double-dot-span">:</span>
      </label>
      <input
        v-model="this.user.email"
        class="txtInput-formElement text-muted"
        :class="this.authError ? 'red-input-border' : ''"
        name="nameInput"
        type="email"
        placeholder="email"
        required
      />
    </div>
    <div class="single-lbl-input-div">
      <label class="lbl-formElement flex-row text-muted" for="nameInput">
        <span class="lbl-span">Password</span>
        <span class="double-dot-span">:</span>
      </label>
      <input
        v-model="this.user.password"
        class="txtInput-formElement text-muted"
        :class="this.authError ? 'red-input-border' : ''"
        name="nameInput"
        type="password"
        placeholder="password"
        required
      />
    </div>
    <span v-show="this.authError" class="auth-error-span fw-light">
      email or password not correct
    </span>
    <button class="login-btn fw-bold" type="submit">Login</button>
    <span
      @click="this.$emit('switchForms')"
      class="dont-have-account-span fw-light"
      >don't have account ?</span
    >
  </form>
</template>
<script>
import { login } from "../../../modal/modal.js";
export default {
  components: {},
  data() {
    return {
      user: {},
      authError: false,

      //propreties
    };
  },
  methods: {
    async login() {
      try {
        this.authError = false;
        await login({
          email: this.user.email,
          password: this.user.password,
        });
        this.$router.push({
          name: "home",
          // params: { id: this.customer._id, lngname: this.lng.name },
        });
      } catch (err) {
        this.authError = true;
        console.log("password or email errer.");
      }
    },
    loginlocal() {
      localStorage.setItem(
        "localactiveuser",
        JSON.stringify({
          _id: "123#548#631@",
          fname: "youer first name",
          email: this.user.email,
          carts: [],
        })
      );
      this.$router.push({
        name: "home",
        // params: { id: this.customer._id, lngname: this.lng.name },
      });
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px;
}
.login-form {
  height: 100%;
  width: 100%;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lbl-formElement {
  display: flex;
  align-items: center;
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
  font-size: 12px;
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

.login-btn {
  /* margin-top: 15px; */
  height: 25px;
  width: 40%;
  border-radius: 8px;
  border: none;
  background-image: var(--gradient-btnLogin-primary);
  color: white;
  font-size: 14px;
  margin: 5px 0 5px 0;
}
.login-btn:hover {
  background-image: var(--btnLogin-hover-primary);
  /* background-image: none; */
  /* background-color: #1ca51a; */
  color: white;
}
.dont-have-account-span {
  font-size: 11px;
  color: rgb(58, 87, 203);
  cursor: pointer;
  padding-top: 5px;
}
.auth-error-span {
  font-size: 11px;
  color: rgb(229, 70, 70, 0.9);
  padding-top: 5px;
}
.red-input-border {
  border-color: rgb(238, 51, 51, 0.7);
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
  .login-btn {
    width: 60%;
  }
}
</style>