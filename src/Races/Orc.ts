import Race from './Race';

class Orc extends Race {
  private maxLifePointsValue: number;
  private static instancesValue = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePointsValue = 74;
    Orc.instancesValue += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePointsValue;
  }

  static createdRacesInstances(): number {
    return Orc.instancesValue;
  }
}

export default Orc;