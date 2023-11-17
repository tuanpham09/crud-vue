<template>
  <div class="container">
    <form>
      <div class="card" style="width: 28rem;">
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" name="username" id="username" v-model="data.username" class="form-control"
            placeholder="Enter Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name="password" id="password" v-model="data.password" class="form-control"
            placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="isChecked" name="isChecked">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="form-group">
          <!-- redirect to login -->
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </form><button @click="login" class="btn btn-success">Login</button>
  </div>
</template>
<script setup>
//api: http://localhost:3000/user
import axios from 'axios'
import { ref } from 'vue'
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router'
const route = useRouter();
const data = {
  username: '',
  password: '',
};

const isChecked = ref(false)

const login = async () => {
  try {
    const url = 'http://localhost:3000/user';
    const response = await axios.get(url);
    const usersArray = response.data
    if (response.status === 200 || response.data.success) {
      usersArray.forEach(user => {
        if (user.password === data.password && user.username === data.username) {
          // lưu cookie hoặc local storage
          const cookieNames = Cookies.set('userToken', user.token, { expires: 7 });
          console.log(Cookies.get(cookieNames))
          route.push('/product')
        }
        else {
          // thông báo
          const error = "username or password is valid!"
        }
      });

    } else {
      console.log('Server response indicates failure');
    }
    // Reset form fields if needed
    username.value = '';
    password.value = '';
    isChecked.value = false;

  } catch (err) {
    console.error('API Error:', err.message);
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
  margin: 50px;
  border-radius: 8px;
  background-color: rgb(216, 228, 228);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.container {
  display: grid;
  place-items: center;
}

.form-group {
  margin: 10px;
}
</style>
