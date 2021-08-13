<template>
  <main class="flex flex-col text-center items-center mt-28 h-screen">
    <NotFoundError :backgroundLight="true"/>
  </main>
</template>

<script>
import NotFoundError from "../components/NotFoundError.vue";
export default {
  components: {
    NotFoundError,
  },
};
</script>