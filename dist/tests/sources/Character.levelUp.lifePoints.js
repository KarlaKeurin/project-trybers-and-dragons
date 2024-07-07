"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../../src/Character");
const isValidLifePoints = (prevLifePoints, currLifePoints) => {
    return prevLifePoints <= currLifePoints && prevLifePoints + 10 >= currLifePoints;
};
const result = () => {
    let res = true;
    const char = new Character_1.default('');
    for (let i = 0; i < 100; i++) {
        const prevLifePoints = char.lifePoints;
        char.levelUp();
        const isValid = isValidLifePoints(prevLifePoints, char.lifePoints);
        if (!isValid) {
            return false;
        }
        ;
    }
    return res;
};
