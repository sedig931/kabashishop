<template>
  <form class="verf-form flex-column p-3">
    <div class="digits-div flex-row">
      <div class="single-digit-di">
        <input
          autofocus
          class="input-digit digit-0"
          :class="
            this.successVerf
              ? 'input-digit-success'
              : this.wrongNumbers
              ? 'input-digit-wrong'
              : ''
          "
          type="text"
          v-model="this.userVerfNumber[0]"
          @input="this.checkNumber"
          :id="1"
        />
      </div>
      <div class="single-digit-div">
        <input
          class="input-digit digit-1"
          :class="
            this.successVerf
              ? 'input-digit-success'
              : this.wrongNumbers
              ? 'input-digit-wrong'
              : ''
          "
          type="text"
          v-model="this.userVerfNumber[1]"
          @input="this.checkNumber"
          :id="2"
        />
      </div>
      <div class="single-digit-div">
        <input
          class="input-digit digit-2"
          :class="
            this.successVerf
              ? 'input-digit-success'
              : this.wrongNumbers
              ? 'input-digit-wrong'
              : ''
          "
          type="text"
          v-model="this.userVerfNumber[2]"
          @input="this.checkNumber"
          :id="3"
        />
      </div>
      <div class="single-digit-div">
        <input
          class="input-digit digit-3"
          :class="
            this.successVerf
              ? 'input-digit-success'
              : this.wrongNumbers
              ? 'input-digit-wrong'
              : ''
          "
          type="text"
          v-model="this.userVerfNumber[3]"
          @input="this.checkNumber"
          :id="4"
        />
      </div>
    </div>
    <span
      v-if="!this.successVerf"
      @click="this.$emit('dontReciveNumber')"
      class="dont-recive-number-span"
      >don't recive number ?</span
    >
    <div v-if="this.successVerf" class="success-regist-div flex-column">
      <span class="text-muted fw-light">Loging...</span>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["dontReciveNumber", "correctVerfi"],
  components: {},
  data() {
    return {
      userVerfNumber: ["", "", "", ""],
      verfNumber: "",
      successVerf: false,
      wrongNumbers: false,
      firstSuccess: false,
      //propreties
    };
  },
  methods: {
    initverfNumber() {
      // make random number of four digit..
      this.verfNumber = String(
        Math.floor(Math.random() * (9879 - 2001 + 1) + 2001)
      );
      console.log(this.verfNumber);
    },
    checkNumber(e) {
      if (e.target.id < 4) {
        for (let i = Number(e.target.id); i < 4; i++) {
          document.getElementById(i + 1).value = "";
        }
        if (
          !document.getElementById(e.target.id).value.includes(" ") &&
          document.getElementById(e.target.id).value !== ""
        ) {
          document.querySelector(`.digit-${e.target.id}`).focus();
        } else {
          document.getElementById(e.target.id).value = "";
        }
      } else {
        if (this.verfNumber === this.userVerfNumber.join("")) {
          this.wrongNumbers = false;
          this.successVerf = true;
          if (!this.firstSuccess) {
            this.firstSuccess = true;
            // uncommint this when its live work with server..;
            // this.$emit("correctVerfi");
            console.log(
              "correct number ! , but its unavalibal now , just log in"
            );
          }
          //
        } else {
          this.successVerf = false;
          this.wrongNumbers = true;
          // console.log("wrong number..");
        }
      }
    },
  },
  mounted() {
    this.initverfNumber();
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
.verf-form {
  height: 100%;
  width: 100%;
  border-radius: inherit;
}
.digits-div {
  justify-content: space-between;
  width: 200px;
  margin: 10px 0 10px 0;
}
.input-digit {
  height: 40px;
  width: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  color: #787878;
}
.input-digit:focus {
  border: 1px solid #5db8e6;
  box-shadow: 0px 0px 1px 1px rgba(103, 185, 223, 0.5);
}
.input-digit-success {
  border: 1px solid rgba(15, 194, 86, 0.4);
  box-shadow: 0px 0px 2px 2px rgba(15, 194, 86, 0.4);
}
.input-digit-success:focus {
  border: 1px solid rgba(15, 194, 86, 0.4);
  box-shadow: 0px 0px 2px 2px rgba(15, 194, 86, 0.4);
}
.input-digit-wrong {
  border: 1px solid rgba(194, 51, 15, 0.4);
  box-shadow: 0px 0px 2px 2px rgba(215, 55, 15, 0.4);
}
.dont-recive-number-span {
  font-size: 11px;
  color: rgb(58, 87, 203);
  cursor: pointer;
  padding-top: 10px;
}
.success-icon {
  font-size: 110px;
  color: rgba(22, 147, 22, 0.6);
}
</style>