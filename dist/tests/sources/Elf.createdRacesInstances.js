"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("../../src/Races");
const result = () => {
    const r = [];
    const e1 = new Races_1.Elf('', 2);
    r.push(Races_1.Elf.createdRacesInstances());
    const e2 = new Races_1.Elf('', 2);
    r.push(Races_1.Elf.createdRacesInstances());
    const e3 = new Races_1.Elf('', 2);
    r.push(Races_1.Elf.createdRacesInstances());
    return r;
};
