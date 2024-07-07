"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Ranger.instancesValue += 1;
    }
    static createdArchetypeInstances() {
        return Ranger.instancesValue;
    }
    get energyType() {
        return this._energyType;
    }
}
Ranger.instancesValue = 0;
exports.default = Ranger;
