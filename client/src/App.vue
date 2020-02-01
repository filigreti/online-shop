<template>
  <main>
    <div id="app">
      <div id="nav">
        <NavHeader />
      </div>
      <router-view />
    </div>
  </main>
</template>

<script>
import RouteModal from "./components/RouteModal";
import NavHeader from "./components/NavHeader";
export default {
  components: {
    NavHeader,
    RouteModal
  },
  data() {
    return {
      modal: false
    };
  }
};
</script>
<style>
body {
  background: white !important;
  margin: 0 40px 40px 40px !important;
  box-sizing: border-box !important;
  font-family: "Source Sans Pro", sans-serif !important;
  font-size: 1rem;
}
#app {
}

#nav {
}

#nav a {
  color: #22232b;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  position: relative;
}
#nav a.router-link-exact-active::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background: black;
  left: 0;
  top: 20px;
}
.modal {
  margin: 0 !important;
  padding: 0 !important;
}
.modal-body {
  padding: 0 !important;
  margin: 0 !important;
}
.modal-content {
  border-radius: 0px !important;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
