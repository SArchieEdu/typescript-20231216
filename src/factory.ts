export class Animal {
  feed(): void {}
}

class Horse extends Animal {}
class Car {}

type Constructor = new (...args: any[]) => {};

function makeMovable<Parent extends Constructor>(ParentClass: Parent) {
  return class Movable extends ParentClass {
    move() {}
  };
}

const MovableHorse = makeMovable(Horse);
const MovableCar = makeMovable(Car);

new MovableHorse().move();
