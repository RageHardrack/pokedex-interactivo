<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 "
  >
    <header class="w-full">
      <TheNavbar />
    </header>

    <main class="container flex-grow space-y-8">
      <SearchBar :onSearch="onSearch" />

      <h2 class="text-6xl font-bold text-center" v-if="notFound">
        No se encontró el Pokémon que estás buscando...
      </h2>

      <Pokedex
        v-else
        :pokemons="pokemons"
        :page="page"
        :totalPages="totalPages"
      />
    </main>

    <footer>Realizado para Codealo</footer>
  </div>
</template>

<script setup>
import { onBeforeMount, provide, ref, watchEffect } from "vue";
import { getPokeData, getPokemons, searchPokemon } from "./services/pokeapi";

import Pokedex from "./components/Pokedex.vue";
import SearchBar from "./components/SearchBar.vue";
import TheNavbar from "./components/TheNavbar.vue";

const pokemons = ref([]);
const page = ref(0);
const totalPages = ref(0);
const loading = ref(false);
const notFound = ref(false);
const searching = ref(false);
const favorites = ref(
  JSON.parse(localStorage.getItem("favoritesPokemons")) || []
);

const fetchPokemons = async () => {
  try {
    loading.value = true;
    const { count, results } = await getPokemons(25, page.value * 25);
    const promises = results.map(async (pokemon) => {
      return await getPokeData(pokemon.url);
    });

    pokemons.value = await Promise.all(promises);
    loading.value = false;
    totalPages.value = Math.ceil(count / 25);
    notFound.value = false;
  } catch (error) {
    console.error(error);
  }
};

const lastPage = () => {
  page.value = Math.max(page.value - 1, 0);
};

const nextPage = () => {
  page.value = Math.min(page.value + 1, totalPages.value);
};

const updateFavoritePokemons = (pokeName) => {
  if (favorites.value.includes(pokeName)) {
    favorites.value = favorites.value.filter((pokemon) => pokemon !== pokeName);
  } else {
    favorites.value.push(pokeName);
  }

  localStorage.setItem("favoritesPokemons", JSON.stringify(favorites.value));
};

const onSearch = async (query) => {
  try {
    if (!query) {
      return fetchPokemons();
    }

    loading.value = true;
    searching.value = true;
    const result = await searchPokemon(query.toLowerCase());

    if (result) {
      pokemons.value = [result];
      page.value = 0;
      totalPages.value = 1;
    } else {
      notFound.value = true;
      loading.value = false;
      return;
    }

    loading.value = false;
    searching.value = true;
  } catch (error) {
    console.error(error);
  }
};

provide("loading", loading);
provide("favorites", favorites);
provide("lastPage", lastPage);
provide("nextPage", nextPage);
provide("updateFavoritePokemons", updateFavoritePokemons);

watchEffect(() => {
  if (!searching) fetchPokemons();
});

onBeforeMount(() => {
  fetchPokemons();
});
</script>
