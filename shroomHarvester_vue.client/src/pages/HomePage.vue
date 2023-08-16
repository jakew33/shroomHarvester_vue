<template>
  <div class="container-fluid">
    <UpgradeMenuComponent />
    <!-- <div class="row">

      <div class="col-12 text-center fs-2 text-light">
        <span>
          Harvest Power: {{ harvestPower }}
        </span>

        <span v-if="autoHarvest > 0">
          Auto Harvest: {{ autoHarvest }}
        </span>
      </div>

      <div v-for="upgrade in upgrades" :key="upgrade.name" class="col-6 mb-3 text-light">
        <h2>{{ upgrade.name.toUpperCase() }} || Multiplier: {{ upgrade.muliplier }}</h2>
        <h3>Qty: {{ upgrade.quantity }}</h3>
        <h3>${{ upgrade.price }}</h3>

        <button @click="buyUpgrade(upgrade)" class="btn" :disabled="shrooms < upgrade.price"
          :class="{ 'btn-success': upgrade.isTypeClick, 'btn-info': !upgrade.isTypeClick, 'fw-bold': upgrade.price > 10 }">Buy
          Upgrade
        </button>
      </div>
    </div> -->
  </div>
  <ShroomComponent />
</template>

<script>
import { computed } from "vue";
import ShroomComponent from "../components/ShroomComponent.vue";
import UpgradeMenuComponent from "../components/UpgradeMenuComponent.vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { shroomsService } from "../services/ShroomsService.js";

export default {
  setup() {

    setInterval(shroomsService.setAuto, 5000)

    return {

      // shrooms: computed(() => AppState.shrooms),
      // upgrades: computed(() => AppState.upgrades),

      // harvestPower: computed(() => {
      //   const clickUpgrades = AppState.upgrades.filter(u => u.isTypeClick)
      //   let total = 1
      //   clickUpgrades.forEach(u => total += u.multiplier * u.quantity)
      //   return total
      // }),

      // autoHarvest: computed(() => {
      //   const autoHarvest = AppState.upgrades.filter(u => !u.isTypeClick)
      //   let total = 0
      //   autoHarvest.forEach(u => total += u.multiplier * u.quantity)
      //   return total
      // }),

      // buyUpgrade(upgrade) {
      //   logger.log(upgrade)
      //   if (upgrade.price > AppState.shrooms) {
      //     Pop.error('Not enough Shrooms, dawg')
      //     return
      //   }

      //   shroomsService.buyUpgrade(upgrade)
      // }
    };
  },
  components: { ShroomComponent, UpgradeMenuComponent }
}
</script>

<style scoped lang="scss"></style>
