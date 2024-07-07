"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../../src/Character");
const isValidDexterity = (prevDexterity, currDexterity) => {
    return prevDexterity < currDexterity && prevDexterity + 10 >= currDexterity;
};
const result = () => {
    let res = true;
    const char = new Character_1.default('');
    for (let i = 0; i < 100; i++) {
        const prevDexterity = char.dexterity;
        char.levelUp();
        const isValid = isValidDexterity(prevDexterity, char.dexterity);
        if (!isValid) {
            return false;
        }
        ;
    }
    return res;
};
