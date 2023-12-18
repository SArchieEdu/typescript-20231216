export class Movie {
  constructor(private title: string) {
    this.title = title;
  }

  getTitle() {
    this.title;
  }
}

class Film extends Movie {
  getTitle() {
    return super.getTitle();
  }
}

new Movie("").getTitle();

abstract class Node {
  constructor(public x: number, public y: number) {}

  calculateSize() {
    return 123;
  }

  abstract paint(): void;
}

class StorageNode extends Node {
  paint(): void {}
}
class CarNode extends Node {
  paint(): void {}
}
class ContainerNode extends Node {
  constructor(x: number, y: number, private children: Node[]) {
    super(x, y);
  }
  paint(): void {
    this.children.forEach((node) => node.paint());
  }
}

function paint(node: Node) {
  node.calculateSize();
  node.paint();
}

paint(new StorageNode(1, 1));
paint(new CarNode(1, 1));
paint(new ContainerNode(1, 1, [new StorageNode(1, 1), new CarNode(2, 3)]));
