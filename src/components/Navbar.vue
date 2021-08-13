<template>
  <nav
    class="relative bg-teagreen bg-opacity-75 backdrop-filter backdrop-blur-lg top-0 z-50 main-ft"
    :class="{ sticky: $route.name == 'Main' ? true : false }"
  >
    <section class="flex items-center justify-center">
      <router-link to="/">
        <img
          ref="logo"
          class="w-32 h-auto m-2 transform"
          src="@/assets/logo.png"
        />
      </router-link>
    </section>

    <!-- Scroll Buttons -->

    <!-- <div class="absolute bottom-2 w-full flex" ref="scrollButtons">
      <button @click="scrollLeft()" class="backdrop-filter backdrop-blur-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div class="flex-grow"></div>
      <button @click="scrollRight()" class="backdrop-filter backdrop-blur-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div> -->
    <section
      class="flex whitespace-nowrap justify-between mt-2 px-7 overflow-x-auto space-x-7 text-center"
      ref="wrapper"
      style="scroll-behavior: smooth;"
      v-if="!categories.loading"
    >
      <router-link
        class="tracking-tight text-2xl"
        v-for="(category, i) in categories.data"
        :key="i"
        :to="`/street/${i}`"
      >
        {{ category.name }}
      </router-link>
    </section>
    <section
      class="flex whitespace-nowrap justify-between mt-2 mb-1 px-2 lg:px-7 overflow-x-hidden space-x-7"
      v-else
    >
      <div
        class="bg-lincolngreen bg-opacity-50 animate-pulse w-32 lg:w-28 h-6 lg:h-8 rounded-full"
      ></div>
      <div
        class="bg-lincolngreen bg-opacity-50 animate-pulse w-36 lg:w-32 h-6 lg:h-8 rounded-full"
      ></div>
      <div
        class="bg-lincolngreen bg-opacity-50 animate-pulse w-44 lg:w-44 h-6 lg:h-8 rounded-full"
      ></div>
      <div
        class="bg-lincolngreen bg-opacity-50 animate-pulse w-40 lg:w-64 h-6 lg:h-8 rounded-full"
      ></div>
      <div
        class="bg-lincolngreen bg-opacity-50 animate-pulse w-10 lg:w-40 h-6 lg:h-8 rounded-full"
      ></div>
    </section>
    <div class="w-full bg-black h-0.5"></div>
  </nav>
</template>

<script>
import useCategories from "@/hooks/useCategories";

export default {
  name: "Navbar",
  setup() {
    const categories = useCategories();

    return {
      categories,
    };
  },
  data() {
    return { renderNavButtons: false };
  },
  methods: {
    scrollLeft() {
      let content = this.$refs.wrapper;
      content.scrollLeft -= 200;
    },
    scrollRight() {
      let content = this.$refs.wrapper;
      content.scrollLeft += 200;
    },
  },
  // Handler for scroll buttons
  updated() {
    if (!this.categories.loading && !this.renderNavButtons) {
      /* Decide if the navbar categories overflow and based on that
      generate scroll buttons */
      let content = this.$refs.wrapper;
      content.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        content.scrollLeft += evt.deltaY;
      });
      // if (
      //   content.scrollHeight > content.clientHeight ||
      //   content.scrollWidth > content.clientWidth
      // ) {
      //   this.$refs.scrollButtons.style.display = "absolute";
      // } else {
      //   this.$refs.scrollButtons.style.display = "none";
      // }

      this.renderNavButtons = !this.renderNavButtons;
    }
  },
};
</script>
