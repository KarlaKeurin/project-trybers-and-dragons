"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("../../src/Battle");
const Character_1 = require("../../src/Character");
class F {
    constructor(lifePoints = 10, strength = 10, defense = 10) {
        this.lifePoints = lifePoints;
        this.strength = strength;
        this.defense = defense;
    }
    levelUp() { }
    special(enemy) { }
    attack(enemy) { }
    receiveDamage(amount) { return 0; }
}
const pve1 = new Battle_1.PVP(new Character_1.default(''), new Character_1.default(''));
const pve2 = new Battle_1.PVP(new F(), new F());
