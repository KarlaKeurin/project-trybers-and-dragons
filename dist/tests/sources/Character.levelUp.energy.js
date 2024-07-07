"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../../src/Character");
const isValidEnergy = (currEnergyAmount) => {
    return (currEnergyAmount === 10);
};
const result = () => {
    let res = true;
    const char = new Character_1.default('');
    for (let i = 0; i < 100; i++) {
        char.levelUp();
        const isValid = isValidEnergy(char.energy.amount);
        if (!isValid) {
            return false;
        }
        ;
    }
    return res;
};
