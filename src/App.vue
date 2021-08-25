<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 "
  >
    <header class="w-full">
      <TheNavbar />
    </header>

    <main class="container flex-grow space-y-8">
      <SearchBar />

      <Pokedex :pokemons="pokemons" :page="page" :totalPages="totalPages" />
    </main>

    <footer>Realizado para Codealo</footer>
  </div>
</template>

<script setup>
import { onBeforeMount, provide, ref, watchEffect } from "vue";
import { getPokeData, getPokemons } from "./services/pokeapi";

import Pokedex from "./components/Pokedex.vue";
import SearchBar from "./components/SearchBar.vue";
import TheNavbar from "./components/TheNavbar.vue";

const pokemons = ref([]);
const page = ref(0);
const totalPages = ref(100);
const loading = ref(false);

const fetchPokemons = async () => {
  try {
    loading.value = true;
    const { results } = await getPokemons(25, page.value * 25);
    const promises = results.map(async (pokemon) => {
      return await getPokeData(pokemon.url);
    });

    pokemons.value = await Promise.all(promises);
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
};

provide("loading", loading);

const lastPage = () => {
  page.value = Math.max(page.value - 1, 0);
};
provide("lastPage", lastPage);

const nextPage = () => {
  page.value = Math.min(page.value + 1, totalPages.value);
};
provide("nextPage", nextPage);

watchEffect(() => fetchPokemons());

onBeforeMount(() => fetchPokemons());
</script>
