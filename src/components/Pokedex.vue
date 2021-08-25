<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-5xl font-bold">Pokedex</h1>

      <div>Pagination</div>
    </div>

    <div class="grid grid-cols-3 gap-3 p-2">
      <PokeCard
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script setup>
import PokeCard from "./PokeCard.vue";

const props = defineProps({
  pokemons: { type: Array },
});
</script>
