<template>
    <div class="container">
        <form>
            <h1>Update Product</h1>
            <div class="card" style="width: 28rem;">

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
                    <input type="text" class="form-control" id="description" name="description"
                        v-model="product.description" placeholder="Enter Descriptions">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product Image</label>
                    <input type="file" @change="imageFile" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" @click="updateProduct">Update Product</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();

const product = ref({
    name: '',
    price: '',
    description: '',
    image: null
})
const id = route.params.id
const getData = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/product/${route.params.id}`);
        product.value = response.data;
    } catch (err) {
        console.log(err.message);
    }
}
onMounted(getData);
const imageFile = (event) => {
    product.value.image = event.target.files[0].name;
}

const updateProduct = async () => {
    console.log(product.value)
    try {
        await axios.put(`http://localhost:3000/product/${id}`, {
            name: product.value.name,
            price: product.value.price,
            description: product.value.description,
            image: product.value.image
        }).then(res => console.log(res));
        console.log('Product updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating product:', error);
    }
};


</script>
<style scoped>
.card {
    padding: 20px;
    margin: 50px;
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