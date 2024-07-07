"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("../../src/Archetypes");
class ArchetypeChild extends Archetypes_1.default {
    get energyType() {
        return 'mana';
    }
}
class ArchetypeChild2 extends Archetypes_1.default {
    get energyType() {
        return 'stamina';
    }
}
const archetype = new ArchetypeChild('Kirito');
archetype.energyType;
const archetype2 = new ArchetypeChild2('Asuna');
archetype2.energyType;
