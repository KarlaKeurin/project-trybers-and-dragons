"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("../../src/Archetypes");
class ArchetypeChild extends Archetypes_1.default {
    get energyType() {
        throw new Error('Method not implemented.');
    }
}
const archetype = new ArchetypeChild('');
