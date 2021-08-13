<template>
  <main class="my-2">
    <div class="relative w-full h-96 bg-white">
      <img class="absolute h-full w-full object-cover z-30" :src="mediaLink" />
      <div
        class="absolute h-full w-full bg-transparent border-black border-2 z-40"
      ></div>
      <div
        class="absolute h-full w-full bg-gradient-to-t from-seaweed to-transparent z-30"
      ></div>
      <div
        class="absolute bottom-0 z-30 p-2 flex
        flex-col justify-center text-5xl text-white font-semibold main-ft"
      >
        <span class="text-2xl font-thin lg:text-2xl"
          >{{ authorFirstName + " " + authorLastName }} cikke:</span
        >
        <h1
          class="text-3xl font-semibold tracking-tight md:text-4xl lg:tracking-tighter"
          >{{ headline }}</h1
        >
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Card",
  props: {
    authorFirstName: String,
    authorLastName: String,
    mediaLink: String,
    headline: String,
  },
};
</script>
