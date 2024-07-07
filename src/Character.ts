import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';
import Fighter, { SimpleFighter } from './Fighter';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
  
  public get dexterity(): number {
    return this._dexterity;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints - this.defense;
    if (damage <= 0) {
      damage = 1;
    }
    this._lifePoints -= damage;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
  
  levelUp(): void {
    const amountIncrement = getRandomInt(1, 10);
    
    this._strength += amountIncrement;
    this._defense += amountIncrement;
    this._dexterity += amountIncrement;

    if (this._energy.amount < 10) {
      this._energy.amount = 10;
    }
    if (this._maxLifePoints + amountIncrement <= this.race.maxLifePoints) {
      this._maxLifePoints += amountIncrement;
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;