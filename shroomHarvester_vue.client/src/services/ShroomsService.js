import { AppState } from "../AppState.js"


class ShroomsService {
  harvestShrooms() {
    AppState.shrooms++

    AppState.upgrades.forEach(upgrade => {
      if (upgrade.isTypeClick) {
        AppState.shrooms += upgrade.multiplier * upgrade.quantity
      }
    })
  }

  buyUpgrade(upgrade) {
    upgrade.quantity++
    AppState.shrooms -= upgrade.price
    upgrade.price *= 2
  }

  setAuto() {
    AppState.upgrades.forEach(upgrade => {
      if (!upgrade.isTypeClick) {
        AppState.shrooms += upgrade.quantity * upgrade.multiplier
      }
    })
  }
}

export const shroomsService = new ShroomsService