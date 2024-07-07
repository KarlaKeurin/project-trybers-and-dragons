"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../../src/Character");
const result = () => {
    const c = new Character_1.default('');
    const e = c.energy;
    e.amount -= 5;
    return c.energy.amount !== e.amount;
};
