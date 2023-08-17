import { reactive } from 'vue'
import { Upgrade } from "./models/Upgrade.js"

export const AppState = reactive({
  user: {},

  /** @type {import('./models/Account.js').Account} */
  account: {},

  shrooms: 0,

  /** @type {import('./models/Upgrade.js').Upgrade[]} */
  upgrades: [
    new Upgrade({ name: 'shovel', price: 10, multiplier: 1, isTypeClick: true, image: './assets/img/shovel.png' }),
    new Upgrade({ name: 'axe', price: 20, multiplier: 2, isTypeClick: true, image: './assets/img/axe.png' }),
    new Upgrade({ name: 'robot', price: 30, multiplier: 1, isTypeClick: false, image: './assets/img/robot.png' }),
    new Upgrade({ name: 'tractor', price: 40, multiplier: 5, isTypeClick: false, image: './assets/img/tractor.png' }),
  ]
})
