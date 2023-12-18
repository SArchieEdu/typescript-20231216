export class Animal {
  feed(): void {}
}

class Movable {
  move(): void {}
}

class Horse {}
interface Horse extends Animal, Movable {}

type Constructor = new (...args: unknown[]) => {};

function applyMixins(child: Constructor, parents: Constructor[]) {
  parents.forEach((parent) => {
    Object.getOwnPropertyNames(parent).forEach((name) => {
      child.prototype[name] = parent.prototype[name];
    });
  });
}

applyMixins(Horse, [Animal, Movable]);

new Horse().feed();
new Horse().move();

// type User = {
//   id: string;
//   name: string;
// };

// type Product = {
//   id: string;
//   price: string;
// };

// type Entity = Omit<User | Product, "id">;

// const test: Entity = {};

// type Row = (string | undefined)[];

// let row: Row = [, "1 ", " ", "2", "3"];

// for (let i = 0; i < row.length; i++) {
//   const value = row[i];

//   if (value === undefined || value.trim() === "") {
//     continue;
//   }

//   console.log(value.trim());
// }
