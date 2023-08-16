<template>
  <div class="container-fluid">
    <div class="row">

      <ShroomComponent />

      <div class="col-12 text-center fs-2">
        <span>
          Harvest Power: {{ harvestPower }}
        </span>

        <span v-if="autoHarvest > 0">
          Auto Harvest: {{ autoHarvest }}
        </span>

        <div v-for="upgrade in upgrades" :key="upgrade.name" class="col-6 mb-3">
          <h2>{{ upgrade.name.toUpperCase() }} || Multiplier: {{ upgrade.muliplier }}</h2>
          <h3>Qty: {{ upgrade.quantity }}</h3>
          <h3>${{ upgrade.price }}</h3>

          <button @click="buyUpgrade(upgrade)" class="btn" :disabled="shrooms < upgrade.price"
            :class="{ 'btn-success': upgrade.isTypeClick, 'btn-info': !upgrade.isTypeClick, 'fw-bold': upgrade.price > 10 }">Buy
            Upgrade
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShroomComponent from "../components/ShroomComponent.vue.js";

export default {
  setup() {
    return {};
  },
  components: { ShroomComponent }
}
</script>

<style scoped lang="scss"></style>
