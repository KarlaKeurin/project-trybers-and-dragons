"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("../../src/Races");
const result = () => {
    const r = [];
    const h1 = new Races_1.Halfling('', 2);
    r.push(Races_1.Halfling.createdRacesInstances());
    const h2 = new Races_1.Halfling('', 2);
    r.push(Races_1.Halfling.createdRacesInstances());
    const h3 = new Races_1.Halfling('', 2);
    r.push(Races_1.Halfling.createdRacesInstances());
    return r;
};
