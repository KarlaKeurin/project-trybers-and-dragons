"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../../src/Character");
const isValidStrength = (prevStrength, currStrength) => {
    return prevStrength < currStrength && prevStrength + 10 >= currStrength;
};
const result = () => {
    let res = true;
    const char = new Character_1.default('');
    for (let i = 0; i < 100; i++) {
        const prevStrength = char.strength;
        char.levelUp();
        const isValid = isValidStrength(prevStrength, char.strength);
        if (!isValid) {
            return false;
        }
        ;
    }
    return res;
};
