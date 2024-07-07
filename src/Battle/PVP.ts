import Fighter from '../Fighter/Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(protected player: Fighter, protected opponent: Fighter) {
    super(player);
  }

  private attackOpponent(): void {
    this.opponent.receiveDamage(this.player.strength);
  }

  private attackPlayer(): void {
    this.player.receiveDamage(this.opponent.strength);
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
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

export default PVP;