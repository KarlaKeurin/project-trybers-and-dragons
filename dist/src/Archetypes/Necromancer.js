"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Necromancer.instancesValue += 1;
    }
    static createdArchetypeInstances() {
        return Necromancer.instancesValue;
    }
    get energyType() {
        return this._energyType;
    }
}
Necromancer.instancesValue = 0;
exports.default = Necromancer;
