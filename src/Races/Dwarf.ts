import Race from './Race';

class Dwarf extends Race {
  private maxLifePointsValue: number;
  private static instancesValue = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePointsValue = 80;
    Dwarf.instancesValue += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePointsValue;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancesValue;
  }
}

export default Dwarf;