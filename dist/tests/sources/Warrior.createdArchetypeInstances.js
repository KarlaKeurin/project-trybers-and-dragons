"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("../../src/Archetypes");
const result = () => {
    const r = [];
    const w1 = new Archetypes_1.Warrior('');
    r.push(Archetypes_1.Warrior.createdArchetypeInstances());
    const w2 = new Archetypes_1.Warrior('');
    r.push(Archetypes_1.Warrior.createdArchetypeInstances());
    const w3 = new Archetypes_1.Warrior('');
    r.push(Archetypes_1.Warrior.createdArchetypeInstances());
    return r;
};
