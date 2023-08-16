<template>
  <div class="col-12 text-center">
    <img @click="harvestShrooms()" @contextmenu.prevent="harvestShrooms()" class="img-fluid"
      src="../assets/img/shroom.png" alt="get fucked">
  </div>
  <div class="col-12 text-center fs-3 text-light">
    Shrooms: {{ shrooms }}
    <!-- <button @click="harvestShrooms">Harvest</button> -->
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
        shroomsService.harvestShrooms()
      },
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-height: 40vh;
}
</style>
