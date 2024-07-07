"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxLifePointsValue = 99;
        Elf.instancesValue += 1;
    }
    get maxLifePoints() {
        return this.maxLifePointsValue;
    }
    static createdRacesInstances() {
        return Elf.instancesValue;
    }
}
Elf.instancesValue = 0;
exports.default = Elf;
