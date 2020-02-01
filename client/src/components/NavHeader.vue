<template>
  <main class="d-flex justify-content-between align-items-center w-100">
    <div class="d-flex align-items-center">
      <img class="img-fluid logo" src="@/assets/logo.svg" alt />
      <div class="links-left">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div>
      <img class="img-fluid cart" src="@/assets/cart.svg" alt />
      <router-link class="login-link" to="/auth/login">login</router-link>
      <router-link to="/auth/register">Register</router-link>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 50px;
}
.cart {
  width: 18px;
  margin-right: 35px;
}
.links-left {
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.login-link {
  margin-right: 30px;
}
</style>
