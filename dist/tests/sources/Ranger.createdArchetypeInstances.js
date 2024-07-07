"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("../../src/Archetypes");
const result = () => {
    const r = [];
    const r1 = new Archetypes_1.Ranger('');
    r.push(Archetypes_1.Ranger.createdArchetypeInstances());
    const r2 = new Archetypes_1.Ranger('');
    r.push(Archetypes_1.Ranger.createdArchetypeInstances());
    const r3 = new Archetypes_1.Ranger('');
    r.push(Archetypes_1.Ranger.createdArchetypeInstances());
    return r;
};
