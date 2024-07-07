import Race from './Race';

class Halfling extends Race {
  private maxLifePointsValue: number;
  private static instancesValue = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePointsValue = 60;
    Halfling.instancesValue += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePointsValue;
  }

  static createdRacesInstances(): number {
    return Halfling.instancesValue;
  }
}

export default Halfling;