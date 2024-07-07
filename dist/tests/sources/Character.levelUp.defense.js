"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../../src/Character");
const isValidDefense = (prevDefense, currDefense) => {
    return prevDefense < currDefense && prevDefense + 10 >= currDefense;
};
const result = () => {
    let res = true;
    const char = new Character_1.default('');
    for (let i = 0; i < 100; i++) {
        const prevDefense = char.defense;
        char.levelUp();
        const isValid = isValidDefense(prevDefense, char.defense);
        if (!isValid) {
            return false;
        }
        ;
    }
    return res;
};
