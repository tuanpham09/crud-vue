<template>
  <div class="container">
    <form>
      <h1>Add a new Product</h1>
      <div class="card" style="width: 28rem;">
        <div class="form-group">
          <label for="exampleInputEmail1">Product id</label>
          <input type="text" class="form-control" id="id" name="id" v-model="product.id" placeholder="Enter id">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Product Name</label>
          <input type="text" class="form-control" id="name" name="name" v-model="product.name"
            placeholder="Enter name product">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Product Price</label>
          <input type="text" class="form-control" id="price" name="price" v-model="product.price"
            placeholder="Enter Price">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Product Descriptions</label>
          <input type="text" class="form-control" id="description" name="description" v-model="product.description"
            placeholder="Enter Descriptions">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Product Name</label>
          <input type="file" id="image" @change="uploadImage" class="form-control">
        </div>

      </div>
    </form>
    <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const route = useRouter();
const product = ref({
  id: '',
  name: '',
  price: '',
  description: '',
  image: null
})

const uploadImage = (event) => {
  product.value.image = event.target.files[0].name

  console.log(product.value.image)
};
const addProduct = async () => {
  try {
    const response = await axios.post('http://localhost:3000/product', product.value)
    console.log(response)
    route.push('/product')
  } catch (err) {
    console.log(err.message)
  }

};

</script>
<style scoped>
.card {
  padding: 20px;
  margin: 40px;
  box-shadow: inset;
  border-radius: 8px;
  background-color: rgb(248, 248, 248);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.container h1 {
  margin-top: 5px;
  text-align: center;
}

.container {
  display: grid;
  place-items: center;
}

.form-group {
  margin: 10px;
}
</style>