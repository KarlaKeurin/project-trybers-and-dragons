"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxLifePointsValue = 60;
        Halfling.instancesValue += 1;
    }
    get maxLifePoints() {
        return this.maxLifePointsValue;
    }
    static createdRacesInstances() {
        return Halfling.instancesValue;
    }
}
Halfling.instancesValue = 0;
exports.default = Halfling;
