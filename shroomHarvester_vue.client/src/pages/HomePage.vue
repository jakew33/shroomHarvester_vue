<template>
  <div class="container-fluid">
    <UpgradeMenuComponent />
  </div>
  Mushroom Harvester
  <ShroomComponent />
</template>

<script>

import ShroomComponent from "../components/ShroomComponent.vue";
import UpgradeMenuComponent from "../components/UpgradeMenuComponent.vue";
import { shroomsService } from "../services/ShroomsService.js";

export default {
  setup() {

    setInterval(shroomsService.setAuto, 5000)

    return {};
  },
  components: { ShroomComponent, UpgradeMenuComponent }
}
</script>

<style scoped lang="scss"></style>
