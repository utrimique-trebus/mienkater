<template>
  <div>
    <div
      class="relative flex justify-center text-5xl main-ft h-36 items-center"
    >
      <!-- Title with fancy bubbles -->
      <div class="relative">
        <div
          class="absolute -top-8 left-42 w-72 h-72 bg-burgundy rounded-full z-0 filter blur-xl animate-blob2 opacity-60"
        ></div>
        <div
          class="absolute -top-20 -right-4 w-72 h-72 bg-yellowmunsell rounded-full z-0 filter blur-xl animate-blob opacity-70"
        ></div>
        <div
          class="absolute -bottom-16 -left-16 w-72 h-72 bg-seaweed rounded-full z-0 filter blur-xl animate-blob3 opacity-70"
        ></div>
      </div>
      <span class="absolute z-30 text-white">Főtér</span>
    </div>

    <!-- Card Skeleton Loader  -->
    <div
      class="mx-1 lg:mx-2 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-3 z-20"
      v-if="suggestions.loading"
    >
      <CardSkeleton v-for="i in 5" :key="i" />
    </div>

    <!-- Cards  -->
    <div
      class="mx-1 lg:mx-2 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-3 z-20"
      v-if="!suggestions.loading"
    >
      <div v-if="suggestions.data.length > 0">
        <Card
          v-for="brief in suggestions.data"
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
    <!-- Use this when there are no posts to show -->
    <div
      class="flex flex-col text-center items-center mt-28 h-screen"
      v-if="!suggestions.loading && suggestions.data.length == 0"
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
      <span class="secondary-ft text-xl md:text-3xl"
        >Nem hallottunk híreket a piacon</span
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
import useSuggestions from "@/hooks/useSuggestions";

export default {
  components: {
    Card,
    CardSkeleton,
  },
  name: "Home",
  setup() {
    const suggestions = useSuggestions(10);

    return {
      suggestions,
    };
  },
  methods: {
    redirectTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.fix {
  backdrop-filter: opacity(1);
}
</style>
