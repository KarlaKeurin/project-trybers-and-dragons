import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static instancesValue = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.instancesValue += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instancesValue;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;