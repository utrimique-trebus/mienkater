<template>
  <div class="flex gap-2">
    <div class="w-full flex flex-col">
      <div class="flex gap-2 mt-2">
        <div
          class="animate-pulse bg-white bg-opacity-40 h-5 rounded-full w-12 sm:w-44"
        ></div>
        <div
          class="animate-pulse bg-white bg-opacity-40 h-5 rounded-full flex-grow"
        ></div>
      </div>
      <div class="flex gap-2 mt-2">
        <div
          class="animate-pulse bg-white bg-opacity-40 h-5 rounded-full w-6 sm:w-32"
        ></div>
        <div
          class="animate-pulse bg-white bg-opacity-40 h-5 rounded-full flex-grow"
        ></div>
      </div>
      <div class="flex gap-2 mt-2">
        <div
          class="animate-pulse bg-white bg-opacity-40 h-5 rounded-full w-12 sm:w-72"
        ></div>
        <div
          class="animate-pulse bg-white bg-opacity-40 h-5 rounded-full flex-grow"
        ></div>
      </div>
    </div>
    <div class="flex-grow"></div>
    <div class="flex items-center">
      <div
        class="animate-pulse h-5 w-32 rounded-full bg-white bg-opacity-40"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuggestionCard",
};
</script>
