"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("../../src/Races");
let ok = true;
try {
    Races_1.default.createdRacesInstances();
}
catch (err) {
    if (err.message === 'Not implemented') {
        ok = false;
    }
}
const result = () => ok;
