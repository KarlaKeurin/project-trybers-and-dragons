"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class F {
    constructor(lifePoints = 100, strength = 10, defense = 10) {
        this.lifePoints = lifePoints;
        this.strength = strength;
        this.defense = defense;
    }
    attack(enemy) { }
    receiveDamage(amount) { return 0; }
}
;
const f = (obj) => {
    return obj.attack(new F());
};
