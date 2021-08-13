<template>
  <div class="overflow-x-hidden">
    <Navbar />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageFooter from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    PageFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Playfair+Display&display=swap");
.main-ft {
  font-family: "Playfair Display", serif;
}
.secondary-ft {
  font-family: "Montserrat", sans-serif;
}
</style>
