import Race from './Race';

class Elf extends Race {
  private maxLifePointsValue: number;
  private static instancesValue = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePointsValue = 99;
    Elf.instancesValue += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePointsValue;
  }

  static createdRacesInstances(): number {
    return Elf.instancesValue;
  }
}

export default Elf;