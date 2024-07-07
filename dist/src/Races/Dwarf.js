"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxLifePointsValue = 80;
        Dwarf.instancesValue += 1;
    }
    get maxLifePoints() {
        return this.maxLifePointsValue;
    }
    static createdRacesInstances() {
        return Dwarf.instancesValue;
    }
}
Dwarf.instancesValue = 0;
exports.default = Dwarf;
