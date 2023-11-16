<template>
  <div class="container">
    <form>

      <div class="card" style="width: 28rem;">

        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" class="form-control" placeholder="Enter Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
<script setup>



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
