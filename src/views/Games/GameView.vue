<template>
  <div v-if="!error">
    <h1 v-if="requesting === true">[Loading Game...]</h1>
    <h1 v-else>
      <div>[{{ data.title }}]</div>
      <div>[{{ data.developer }}]</div>
      <div>[{{ data.publisher }}]</div>
      <div>[{{ data.developer }}]</div>
      <div>[{{ data.description }}]</div>
    </h1>
  </div>
  <div v-else class="error">{{ [error] }}</div>
</template>

<script>
import { gameService } from "@/services/game.services";
export default {
  props: ["id"],
  setup(props) {
    const { data, error, load, requesting } = gameService.getGame(props.id);

    load();

    return { data, error, requesting };
  },
};
</script>

<style></style>
