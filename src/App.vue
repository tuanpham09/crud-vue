<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="">
      <nav class="bg-color navbar navbar-expand navbar-dark bg-dark">
        <RouterLink to="/" class="ml-15"><img src="./assets/02.png" style="height: 25px;"></RouterLink>
        <RouterLink to="/product" class="ml-15">Product</RouterLink>
        <RouterLink to="/about" class="ml-15">About</RouterLink>
        <RouterLink to="/login" class="ml-15 login-register">Login</RouterLink>
        <RouterLink to="/register" class="ml-15 login-register">Register</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.ml-15 {
  padding: 15px;
  text-align: center;
  color: aliceblue;
  text-decoration: none;
  transform: scale(1.0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

}

.ml-15:hover {
  background-color: rgba(175, 173, 30, 0.781);
  border-radius: 5px
    /* Màu khi di chuột qua */
}

.login-register {
  display: flex;
  flex-direction: column;
  margin-right: 20px;

}

.mr-15 {
  margin-right: 20px;

}

.bg-color {
  background-color: rgb(109, 197, 197);

}

.container-sm {
  border-radius: 12px;
  border: 2px solid #070707;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>

