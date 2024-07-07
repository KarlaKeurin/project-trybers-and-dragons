"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../src");
const func = (players) => players.map(p => p.lifePoints);
const result = () => {
    const res = func([src_1.player1, src_1.player2, src_1.player3]);
    return res[0] > src_1.player1.race.maxLifePoints / 2
        && res[1] == src_1.player2.race.maxLifePoints / 2
        && res[2] == src_1.player3.race.maxLifePoints / 2;
};
