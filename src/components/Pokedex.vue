<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-5xl font-bold">Pokedex</h1>

      <div>Pagination</div>
    </div>

    <div class="grid grid-cols-3 gap-2 p-2">
      <div v-for="pokemon in pokemons" :key="pokemon.name">
        {{ pokemon.id }} - {{ pokemon.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemons: { type: Array },
});
</script>
