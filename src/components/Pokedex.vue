<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-5xl font-bold">Pokedex</h1>

      <Pagination
        :page="page + 1"
        :totalPages="totalPages"
        :leftClick="lastPage"
        :rightClick="nextPage"
      />
    </div>

    <Loading v-if="loading" />

    <div v-else class="grid grid-cols-3 gap-3 p-2">
      <PokeCard
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject } from "vue";

import PokeCard from "./PokeCard.vue";
import Pagination from "./Pagination.vue";
import Loading from "./Loading.vue";

const props = defineProps({
  pokemons: { type: Array },
  page: { type: Number },
  totalPages: { type: Number },
});

const loading = inject("loading");

const lastPage = inject("lastPage");
const nextPage = inject("nextPage");
</script>
