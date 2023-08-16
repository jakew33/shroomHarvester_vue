<template>
  <div class="col-md-12">
    <div class="clearfix">
      <div v-for="upgrade in upgrades" :key="upgrade.name" class="box" style="background-color:#bbb">
        <h4>{{ u3pgrade.name.toUpperCase() }} || Multiplier: {{ upgrade.muliplier }}</h4>
        <h4>Qty: {{ upgrade.quantity }}</h4>
        <h5>${{ upgrade.price }}</h5>

        <button @click="buyUpgrade(upgrade)" class="btn" :disabled="shrooms < upgrade.price"
          :class="{ 'btn-success': upgrade.isTypeClick, 'btn-info': !upgrade.isTypeClick, 'fw-bold': upgrade.price > 10 }">Buy
          Upgrade
        </button>
      </div>
    </div>

    <div class="col-12 text-center fs-2 text-light">
      <span>
        Harvest Power: {{ harvestPower }}
      </span>

      <span v-if="autoHarvest > 0">
        Auto Harvest: {{ autoHarvest }}
      </span>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { shroomsService } from "../services/ShroomsService.js";
export default {
  setup() {
    return {

      upgrades: computed(() => AppState.upgrades),

      harvestPower: computed(() => {
        const clickUpgrades = AppState.upgrades.filter(u => u.isTypeClick)
        let total = 1
        clickUpgrades.forEach(u => total += u.multiplier * u.quantity)
        return total
      }),

      autoHarvest: computed(() => {
        const autoHarvest = AppState.upgrades.filter(u => !u.isTypeClick)
        let total = 0
        autoHarvest.forEach(u => total += u.multiplier * u.quantity)
        return total
      }),

      buyUpgrade(upgrade) {
        logger.log(upgrade)
        if (upgrade.price > AppState.shrooms) {
          Pop.error('Not enough Shrooms, dawg')
          return
        }

        shroomsService.buyUpgrade(upgrade)
      }
    }
  }
};
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.box {
  float: left;
  width: 25%;
  padding: 50px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>