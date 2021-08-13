<template>
  <div>
    <div
      class="relative flex justify-center text-5xl main-ft h-36 items-center"
    >
      <div class="relative">
        <div
          class="absolute -top-8 left-16 w-72 h-72 bg-burgundy rounded-full z-0 filter blur-xl animate-blob2 opacity-60"
        ></div>
        <div
          class="absolute -top-20 -right-4 w-72 h-72 bg-yellowmunsell rounded-full z-0 filter blur-xl animate-blob opacity-70"
        ></div>
        <div
          class="absolute -bottom-16 -left-16 w-72 h-72 bg-seaweed rounded-full z-0 filter blur-xl animate-blob3 opacity-70"
        ></div>
      </div>
      <span class="absolute z-30 text-white text-center">{{
        $store.state.categoryMap[$route.params.id]
      }}</span>
    </div>
    <div
      class="mx-1 lg:mx-2 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-3 z-20"
      v-if="!articlesBrief.loading"
    >
      <div v-if="articlesBrief.data.length > 0">
        <Card
          v-for="brief in articlesBrief.data"
          :key="brief.id"
          :authorFirstName="brief.Editors.firstName"
          :authorLastName="brief.Editors.lastName"
          :mediaLink="brief.mediaLink"
          :headline="brief.headline"
          @click="redirectTo(`/articles/${brief.id}`)"
          style="cursor: pointer"
        />
      </div>
    </div>
    <div
      class="mx-1 lg:mx-2 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-3 z-20"
      v-else
    >
      <CardSkeleton v-for="i in 3" :key="i" />
    </div>
    <!-- Use this when there are no posts to show -->
    <div
      class="flex flex-col text-center items-center mt-28 h-screen"
      v-if="!articlesBrief.loading && articlesBrief.data.length == 0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-24 md:h-32 w-24 md:w-32 stroke-current text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span class="secondary-ft font-thin text-xl md:text-3xl"
        >Nem hallottunk híreket ebben az utcában</span
      >
      <span class="secondary-ft font-semibold text-md md:text-xl"
        >Próbálkozz meg később</span
      >
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import CardSkeleton from "../components/CardSkeleton.vue";
import { useRoute } from "vue-router";
import useBriefArticle from "@/hooks/useBriefArticle";

export default {
  components: {
    Card,
    CardSkeleton,
  },
  name: "Street",
  data() {
    const route = useRoute();
    const articlesBrief = useBriefArticle(route.params.id);

    return {
      articlesBrief,
    };
  },
  methods: {
    redirectTo(route) {
      this.$router.push(route);
    },
    info() {
      if (this.$route.name != "Home" && this.$route.name != "Article") {
        this.$data.articlesBrief = useBriefArticle(this.$route.params.id);
      }
    },
  },
  watch: {
    $route: "info",
  },
};
</script>

<style scoped>
.fix {
  backdrop-filter: opacity(1);
}
</style>
