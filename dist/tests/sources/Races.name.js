"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("../../src/Races");
class RaceChild extends Races_1.default {
    get maxLifePoints() {
        return 99;
    }
}
const race = new RaceChild('', 80);
race.name;
