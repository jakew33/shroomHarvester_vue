export class Upgrade {
  constructor(data) {
    this.name = data.name
    this.quantity = 0
    this.multiplier = data.multiplier
    this.price = data.price
    this.isTypeClick = data.isTypeClick
  }
}