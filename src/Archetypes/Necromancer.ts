import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static instancesValue = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.instancesValue += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancesValue;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;