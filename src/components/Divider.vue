<template>
  <div
    class="w-full bg-yellowmunsell h-0.5 my-3"
    :class="{ 'animate-pulse': isLoading }"
  ></div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
  name: "Divider",
};
</script>
