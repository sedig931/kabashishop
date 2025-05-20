<template>
  <div class="outer-cartd-loading-div flex-column">
    <div class="img-empty-div flex-row">
      <i class="bi bi-file-image file-image-icon flex-row"></i>
    </div>
    <div class="info-empty-div flex-column">
      <div class="text-empty-div">
        <div
          class="lighter-div"
          :class="`lighter-${this.keyss}`"
          style="left: 10px"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["keyss"],
  components: {},
  data() {
    return {
      myInterval: {},
      //propreties
    };
  },
  methods: {
    startInt() {
      if (
        Number(
          document
            .querySelector(`.lighter-${this.keyss}`)
            .style.left.split("px")[0]
        ) < 160
      ) {
        // console.log("less than 180");
        document.querySelector(`.lighter-${this.keyss}`).style.left = `${
          Number(
            document
              .querySelector(`.lighter-${this.keyss}`)
              .style.left.split("px")[0]
          ) + 1
        }px`;
      } else {
        // console.log("more than 180");
        document.querySelector(`.lighter-${this.keyss}`).style.left = "0px";
      }
    },
  },
  mounted() {
    this.myInterval = setInterval(this.startInt, 6);
  },
  unmounted() {
    clearInterval(this.myInterval);
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
.outer-cartd-loading-div {
  height: 450px;
  /* width: 350px; */
  padding: 10px;
  margin: 1px;
  justify-content: space-between;
  /* background-color: red; */
}
.img-empty-div {
  flex: 0.8;
  width: 350px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0px 0px 4.5px 1.5px rgb(188, 188, 188);
}
.file-image-icon {
  font-size: 120px;
  color: rgba(151, 151, 151, 0.3);
}
.info-empty-div {
  flex: 0.3;
  width: 100%;
}
.text-empty-div {
  position: relative;
  height: 17px;
  width: 160px;
  margin: 2px;
  background-color: rgba(217, 217, 217, 0.8);
  border-radius: 5px;
}
.btn-empty-div {
  height: 35px;
}
.lighter-div {
  position: absolute;
  top: 0;
  height: 100%;
  width: 3px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: inherit;
  box-shadow: 0px 0px 4.5px 1.5px rgb(255, 255, 255);
}
input[type="text"] {
  width: 90px;
  height: 25px;
  border-radius: 8px;
  padding: 5px;
  font-size: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
input[type="text"]:focus {
  border: 1px solid #555;
}
@media (max-width: 550px) {
  .outer-cartd-loading-div {
    height: 350px;
  }
  .img-empty-div {
    width: 250px;
  }
}
</style>