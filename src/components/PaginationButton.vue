<template>
  <button
    @click="action"
    class="flex items-center justify-center w-10 h-10 text-white bg-gray-700 rounded-full  hover:opacity-90"
  >
    <svg
      v-if="left"
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 h-10 stroke-2"
    >
      <path
        d="m4.5 8.5-4-4 4-4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="translate(7 6)"
      />
    </svg>

    <svg
      v-else
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 h-10 stroke-2"
    >
      <path
        d="m.5 8.5 4-4-4-4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="translate(9 6)"
      />
    </svg>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  left: { type: Boolean },
  action: { type: Function },
});
</script>
