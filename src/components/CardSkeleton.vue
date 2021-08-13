<template>
  <main class="my-2">
    <div class="relative w-full h-96 bg-white">
      <div
        class="absolute animate-pulse h-full w-full z-30 bg-gradient-to-t from-seaweed to-transparent"
      ></div>
      <div
        class="absolute h-full w-full bg-transparent border-black border-2 z-40"
      ></div>
      <div
        class="absolute animate-pulse left-2 bottom-2 z-30 p-2 w-1/2 h-8 bg-white bg-opacity-40 rounded-full"
      ></div>
      <div
        class="absolute animate-pulse left-2 bottom-12 z-30 p-2 w-3/4 h-8 bg-white bg-opacity-40 rounded-full"
      ></div>
      <div
        class="absolute animate-pulse left-2 mb-2 bottom-20 z-30 p-2 w-1/4 h-5 bg-white bg-opacity-40 rounded-full"
      ></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "CardSkeleton",
};
</script>
