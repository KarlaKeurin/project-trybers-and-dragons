"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player, opponent) {
        super(player);
        this.player = player;
        this.opponent = opponent;
    }
    attackOpponent() {
        this.opponent.receiveDamage(this.player.strength);
    }
    attackPlayer() {
        this.player.receiveDamage(this.opponent.strength);
    }
    // Should return 1 if player wins, -1 otherwise
    fight() {
        while (this.player.lifePoints > 0 && this.opponent.lifePoints > 0) {
            this.attackOpponent();
            this.attackPlayer();
        }
        if (this.opponent.lifePoints <= 0) {
            return 1;
        }
        if (this.player.lifePoints <= 0) {
            return -1;
        }
        return 0;
    }
}
exports.default = PVP;
