<template>
    <div class="container">
        <form>
            <div class="card" style="width: 28rem;">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" placeholder="Enter Email">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" placeholder="Enter Username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                    <!-- redirect to login -->
                    <router-link to="/login">Login</router-link>
                </div>
                <button type="button" class="btn btn-primary">register</button>
            </div>
        </form>
    </div>
</template>

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
