<template>
  <div
    class="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100 "
  >
    <header class="w-full">
      <TheNavbar />
    </header>

    <main class="container flex-1 space-y-8">
      <SearchBar />
      <Pokedex :pokemons="pokemons" />
    </main>

    <footer>Realizado para Codealo</footer>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { getPokeData, getPokemons } from "./services/pokeapi";

import Pokedex from "./components/Pokedex.vue";
import SearchBar from "./components/SearchBar.vue";
import TheNavbar from "./components/TheNavbar.vue";

const pokemons = ref([]);

const fetchPokemons = async () => {
  try {
    const { results } = await getPokemons();
    const promises = results.map(async (pokemon) => {
      return await getPokeData(pokemon.url);
    });

    pokemons.value = await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(() => {
  fetchPokemons();
});
</script>
