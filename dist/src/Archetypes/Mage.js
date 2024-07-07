"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Mage.instancesValue += 1;
    }
    static createdArchetypeInstances() {
        return Mage.instancesValue;
    }
    get energyType() {
        return this._energyType;
    }
}
Mage.instancesValue = 0;
exports.default = Mage;
