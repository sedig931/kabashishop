<template>
  <div class="home-container-div">
    <div class="section-1-div flex-row">
      <form
        class="add-product-form flex-column"
        @submit.prevent="this.addFormSubmitted()"
      >
        <div class="single-lbl-input-div flex-row">
          <label class="lbl-formElement flex-row text-muted" for="nameInput">
            <span class="lbl-span">Product Name</span>
            <span class="double-dot-span">:</span>
          </label>
          <input
            v-model="this.newProduct.name"
            class="txtInput-formElement text-muted"
            name="nameInput"
            type="text"
            required
          />
        </div>
        <div class="single-lbl-input-div flex-row">
          <label class="lbl-formElement flex-row text-muted" for="nameInput">
            <span class="lbl-span">Product Disc</span>
            <span class="double-dot-span">:</span>
          </label>
          <input
            v-model="this.newProduct.disc"
            class="txtInput-formElement text-muted"
            name="nameInput"
            type="text"
            required
          />
        </div>
        <div class="single-lbl-input-div flex-row">
          <label class="lbl-formElement flex-row text-muted" for="nameInput">
            <span class="lbl-span">Product Price</span>
            <span class="double-dot-span">:</span>
          </label>
          <input
            v-model="this.newProduct.price"
            class="txtInput-formElement text-muted"
            name="nameInput"
            type="text"
            required
          />
        </div>
        <div class="single-lbl-input-div flex-row">
          <label class="lbl-formElement flex-row text-muted" for="nameInput">
            <span class="lbl-span">Product Inv</span>
            <span class="double-dot-span">:</span>
          </label>
          <input
            v-model="this.newProduct.inv"
            class="txtInput-formElement text-muted"
            name="nameInput"
            type="text"
            required
          />
        </div>
        <div class="single-lbl-input-div flex-row">
          <label class="lbl-formElement flex-row text-muted" for="nameInput">
            <span class="lbl-span">Product Images</span>
            <span class="double-dot-span">:</span>
          </label>
          <input
            class="txtInput-formElement txtFile-formElement photos-input form-control text-muted"
            name="nameInput"
            type="file"
            accept=".png,.jpg,.jpng"
            multiple
            required
          />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  </div>
</template>
<script>
import { addProduct, addProductPhoto } from "../../modal/modal.js";
export default {
  components: {},
  data() {
    return {
      newProduct: {},
      //propreties
    };
  },
  methods: {
    previewImages(e) {
      // this.newProduct.imgs = document.querySelector(".photos-input").files;
      // let allFilesOk = true;
      // for (let i = 0; i < this.newProduct.imgs.length; i++) {
      //   if (!this.newProduct.imgs[i].type.includes("image"))
      //     allFilesOk = false;
      // }
      // if (allFilesOk) {
      //     console.log(this.newProduct.imgs.length);
      // } else {
      //   console.log("some files not image..");
      // }
    },
    async addFormSubmitted(e) {
      try {
        const productAdded = await addProduct(this.newProduct);
        console.log("product added successfuly..");
        this.newProduct.imgs = document.querySelector(".photos-input").files;
        for (let i = 0; i < this.newProduct.imgs.length; i++) {
          const dataForm = new FormData();
          dataForm.append("photo", this.newProduct.imgs[i]);
          await addProductPhoto(productAdded._id, dataForm);
          console.log("img added succesfully..");
        }
        this.newProduct = {};
        document.querySelector(".photos-input").value = null;
      } catch (err) {
        console.log(err.message);
      }
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

.home-container-div {
  width: 100%;
}
/* section-1 style */
.section-1-div {
  height: 100vh;
  width: 100%;
}
/* form style */
.add-product-form {
  width: 400px;
  /* background-color: rgb(43, 43, 137, 0.5); */
}
.single-lbl-input-div {
  width: 100%;
  margin: 5px;
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

.txtFile-formElement {
  font-size: 11px;
  border: 1px solid #ccc;
}
</style>