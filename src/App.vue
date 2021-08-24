<template>
  <div
    class="
      flex flex-col
      h-screen
      items-center
      justify-center
      bg-gray-100
      space-y-4
    "
  >
    <header>
      <TheNavbar />
    </header>

    <main class="flex-1 container space-y-8">
      <SearchBar />
      <Pokedex :pokemons="pokemons" />
    </main>

    <footer>Realizado para Codealo</footer>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { getPokemons } from "./services/pokeapi";

import Pokedex from "./components/Pokedex.vue";
import SearchBar from "./components/SearchBar.vue";
import TheNavbar from "./components/TheNavbar.vue";

const pokemons = ref([]);

const fetchPokemons = async () => {
  try {
    const { results } = await getPokemons();
    pokemons.value = results;
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(() => {
  fetchPokemons();
});
</script>
