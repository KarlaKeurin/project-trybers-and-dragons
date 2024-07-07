"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("../../src/Battle");
const Character_1 = require("../../src/Character");
const Monster_1 = require("../../src/Monster");
const fight = (battle) => battle.fight();
const result = () => {
    function newAttack(enemy) {
        enemy.receiveDamage(12);
    }
    jest.spyOn(Monster_1.default.prototype, 'attack').mockImplementation(newAttack);
    jest.spyOn(Character_1.default.prototype, 'attack').mockImplementation(newAttack);
    const player1 = new Character_1.default('');
    // Aqui elevamos o nível de `player1` para o mínimo necessário para vencer, mas sem acabar em um round
    for (let i = 0; i < 63; i++)
        player1.levelUp();
    const monster = new Monster_1.default();
    const pve1 = new Battle_1.PVE(player1, [monster]);
    const player2 = new Character_1.default('');
    const monsters = [];
    for (let i = 0; i < 50; i++)
        monsters.push(new Monster_1.default());
    const pve2 = new Battle_1.PVE(player2, monsters);
    jest.clearAllMocks();
    return [fight(pve1), fight(pve2)];
};
