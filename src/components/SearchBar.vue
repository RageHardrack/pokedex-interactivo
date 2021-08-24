<template>
  <div class="flex items-center w-full justify-evenly">
    <input
      type="search"
      class="p-4 rounded shadow-lg w-3/5"
      placeholder="Buscar Pokemon..."
      v-model="search"
    />

    <button
      @click="searching"
      class="
        w-14
        h-14
        flex
        justify-center
        items-center
        rounded-full
        bg-blue-800
        hover:opacity-90
        text-white
      "
    >
      <svg
        class="w-10 h-10"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="8.5" cy="8.5" r="5" />
          <path d="m17.571 17.5-5.571-5.5" />
        </g>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { searchPokemon } from "../services/pokeapi";

const search = ref("");

const searching = async () => {
  const data = await searchPokemon(search.value);
  console.log(data);
};
</script>
