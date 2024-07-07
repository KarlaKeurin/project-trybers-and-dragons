"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("../../src/Races");
const result = () => {
    const r = [];
    const o1 = new Races_1.Orc('', 2);
    r.push(Races_1.Orc.createdRacesInstances());
    const o2 = new Races_1.Orc('', 2);
    r.push(Races_1.Orc.createdRacesInstances());
    const o3 = new Races_1.Orc('', 2);
    r.push(Races_1.Orc.createdRacesInstances());
    return r;
};
