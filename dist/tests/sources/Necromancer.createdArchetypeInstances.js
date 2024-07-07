"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("../../src/Archetypes");
const result = () => {
    const r = [];
    const n1 = new Archetypes_1.Necromancer('');
    r.push(Archetypes_1.Necromancer.createdArchetypeInstances());
    const n2 = new Archetypes_1.Necromancer('');
    r.push(Archetypes_1.Necromancer.createdArchetypeInstances());
    const n3 = new Archetypes_1.Necromancer('');
    r.push(Archetypes_1.Necromancer.createdArchetypeInstances());
    return r;
};
