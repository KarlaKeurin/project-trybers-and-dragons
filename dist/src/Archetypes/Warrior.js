"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Warrior.instancesValue += 1;
    }
    static createdArchetypeInstances() {
        return Warrior.instancesValue;
    }
    get energyType() {
        return this._energyType;
    }
}
Warrior.instancesValue = 0;
exports.default = Warrior;
