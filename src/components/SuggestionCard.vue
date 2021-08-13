<template>
  <div class="flex gap-1">
    <div class="w-full flex flex-col text-white main-ft">
      <span class="tracking-wider text-xl">{{
        authorFirstName + " " + authorLastName + " cikke:"
      }}</span>
      <span class="text-2xl font-semibold">{{ headline }}</span>
    </div>
    <div class="flex-grow"></div>
    <div class="flex items-center">
      <div class="text-white secondary-ft">
        Megnézem
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 stroke-current text-white"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authorFirstName: String,
    authorLastName: String,
    headline: String,
    id: String,
  },
  name: "SuggestionCard",
};
</script>
