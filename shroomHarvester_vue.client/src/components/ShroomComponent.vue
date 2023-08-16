<template>
  <div class="col-12 text-center">
    <img src="shroom.png" alt="get fucked">
  </div>
  <div class="col-12 text-center fs-3">
    Shrooms: {{ shrooms }}
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { shroomsService } from "../services/ShroomsService.js";
export default {
  setup() {
    return {
      shrooms: computed(() => AppState.shrooms),

      harvestShrooms() {
        shroomsService.harvestShrooms
      }
    }
  }
};
</script>


<style lang="scss" scoped>
img {
  max-height: 40vh;
}
</style>