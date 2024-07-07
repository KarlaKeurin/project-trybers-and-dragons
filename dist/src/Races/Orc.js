"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxLifePointsValue = 74;
        Orc.instancesValue += 1;
    }
    get maxLifePoints() {
        return this.maxLifePointsValue;
    }
    static createdRacesInstances() {
        return Orc.instancesValue;
    }
}
Orc.instancesValue = 0;
exports.default = Orc;
