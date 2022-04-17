<template>
  <h1>Games</h1>
  <div v-if="!error">
    <div class="game-list" v-for="game in data" :key="game.id">
      <router-link
        class="game"
        :to="{ name: 'Game', params: { id: game.id } }"
        >{{ game.title }}</router-link
      >
    </div>
  </div>
  <div v-else class="error">{{ error }}</div>
</template>

<script>
import getGames from "@/composables/gets/getGames";

export default {
  setup() {
    const { data, error, load, requesting } = getGames();

    load();

    return { data, error, requesting };
  },
};
</script>

<style>
.game-list {
  display: inline-block;
}
.game {
  color: #42b983;
  background: white;
  margin: 8px;
  padding: 8px;
  border-radius: 2px;
}
.error {
}
</style>
