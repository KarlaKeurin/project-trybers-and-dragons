import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static instancesValue = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.instancesValue += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancesValue;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;