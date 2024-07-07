import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static instancesValue = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.instancesValue += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instancesValue;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;