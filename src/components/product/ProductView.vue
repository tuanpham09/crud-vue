<template>
    <div class="container">

        <form>
            <router-link :to="'/add-product'"><button class="btn btn-primary">ADD Product</button></router-link>
            <input v-model="search">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">description</th>
                        <th scope="col">price</th>
                        <th scope="col">images</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="( item) in searchText" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td>
                            <router-link :to="'/product/' + item.id">{{ item.name }}</router-link>
                        </td>

                        <td>{{ item.price }}</td>
                        <td>{{ item.description }}</td>
                        <td><img :src="'/src/assets/' + item.image" /></td>
                        <td><button class="btn btn-success" @click="EditPrd(item.id)">Edit</button></td>
                        <td><button type="button" class="btn btn-warning" @click="deletePrd(item.id)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios'
import router from '../../router';

const search = ref("")
const url = 'http://localhost:3000/product/'
const data = ref([])
const searchText = computed(() => {
    return data.value.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()));
});

onMounted(async () => {
    try {
        const response = await axios.get(url)
        data.value = await response.data;
    } catch (err) {
        console.log("Error: ", err.message)
    }
});

const EditPrd = async (id) => {
    router.push('/product/edit/' + id)   //product/edit/:id
}

const deletePrd = async (id) => {

    try {
        await axios.delete(url + id)
    } catch (err) {
        console.log("Error: ", err.message)
        alert('Error deleting product. Please try again later.');
    }
};


</script>

<style scoped>
.table img {
    height: 55px;
    width: 55px;
}

.btn {
    margin: 15px;
}
</style>