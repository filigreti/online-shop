<template>
  <main>
    <b-modal
      id="module"
      ref="modile"
      :no-close-on-backdrop="false"
      size="lg"
      :hide-backdrop="false"
      :centered="true"
      hide-header
      hide-footer
      @hidden="$router.push({ name: $store.state.currentValue })"
      v-model="modal"
    >
      <router-view />
    </b-modal>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modal: true,
      current: null
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let text = "";
      switch (from.name) {
        case "home":
          text = "home";
          break;
        case "about":
          text = "about";
          break;
        case "blog":
          text = "blog";
          break;
      }
      if (text !== "") {
        vm.$store.commit("setCurrentRoute", text);
      }
    });
  }
};
</script>

<style>
@media (min-width: 992px) {
  .modal-lg {
    max-width: 400px !important;
  }
}
</style>
