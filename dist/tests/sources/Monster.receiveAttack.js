"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../../src/Character");
const Monster_1 = require("../../src/Monster");
const result = () => {
    for (let j = 0; j < 1000; j++) {
        const monster = new Monster_1.default();
        const character = new Character_1.default('');
        character.levelUp();
        character.levelUp();
        let res = true;
        for (let i = 0; i < 100; i++) {
            const previousLife = monster.lifePoints;
            if (previousLife <= 0)
                break;
            character.attack(monster);
            res = character.strength > previousLife ? monster.lifePoints <= 0 : monster.lifePoints <= previousLife && (monster.lifePoints >= previousLife - (character.strength) || monster.lifePoints == -1);
            if (!res)
                return false;
        }
    }
    return true;
};
