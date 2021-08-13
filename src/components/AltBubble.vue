<template>
  <div
    class="absolute left-12 top-0.5 flex flex-col w-44 bg-white text-black rounded-full text-xs text-center p-2 border-2 border-black secondary-ft z-50"
  >
    <span class="font-semibold tracking-wider">{{ name }}</span>
    <span class="font-thin">{{ role }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    role: String,
  },
  name: "AltBubble",
};
</script>
