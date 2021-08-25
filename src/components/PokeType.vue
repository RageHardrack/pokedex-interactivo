<template>
  <span
    :class="`w-24 py-1 text-center capitalize ${typeColor} border-2 rounded-full`"
  >
    {{ type }}
  </span>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  type: { type: String },
});

const typeColor = computed(() => {
  switch (props.type) {
    case "grass":
      return "bg-green-200 border-green-600 text-green-600";

    case "poison":
      return "bg-purple-200 border-purple-600 text-purple-600";

    case "fire":
      return "bg-red-200 border-red-600 text-red-600";

    case "water":
      return "bg-blue-200 border-blue-600 text-blue-600";

    case "bug":
      return "bg-yellow-100 border-yellow-500 text-yellow-500";

    case "normal":
      return "bg-gray-200 border-gray-700 text-gray-700";

    case "electric":
      return "bg-yellow-200 border-yellow-500 text-yellow-500";

    case "flying":
      return "bg-blue-100 border-blue-500 text-blue-500";

    case "ground":
      return "bg-yellow-400 border-yellow-800 text-yellow-800";

    case "fairy":
      return "bg-purple-100 border-purple-400 text-purple-400";

    case "fighting":
      return "bg-red-100 border-red-400 text-red-400";

    case "psychic":
      return "bg-pink-200 border-pink-600 text-pink-600";

    case "rock":
      return "bg-yellow-100 border-yellow-600 text-yellow-600";

    case "steel":
      return "bg-gray-100 border-gray-500 text-gray-500";

    case "ghost":
      return "bg-indigo-100 border-indigo-600 text-indigo-600";

    case "ice":
      return "bg-blue-50 border-blue-400 text-blue-400";

    case "dragon":
      return "bg-indigo-300 border-indigo-800 text-indigo-800";

    case "dark":
      return "bg-gray-500 border-gray-900 text-gray-900";
  }
});
</script>
