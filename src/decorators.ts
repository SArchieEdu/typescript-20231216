import "reflect-metadata";

class Engine {
  @LogTime()
  work() {
    return 1 + 1;
  }
}

function LogTime() {
  return (target: {}, propertyName: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      console.time(propertyName);
      const result = method.apply(this, args);
      console.timeEnd(propertyName);

      return result;
    };
  };
}

@Injectable({
  provideIn: "root",
})
class UserService {}

@Injectable({
  provideIn: "root",
})
class MovieService {}

type ServiceMetadata = {
  provideIn: "root" | "module";
};

type Constructor = new (...args: unknown[]) => {};

function Injectable(metadata: ServiceMetadata) {
  return function (ctor: Constructor) {
    Reflect.defineMetadata("serviceMetadata", metadata, ctor);
  };
}

function isServiceMetadata(metadata: unknown): metadata is ServiceMetadata {
  const serviceMeta = metadata as ServiceMetadata;

  return serviceMeta.provideIn === "root" || serviceMeta.provideIn === "module";
}

const instanceStorage = new Map();

function getInstance<CurrentConstr extends Constructor>(
  Constrct: CurrentConstr
) {
  const metadata: unknown = Reflect.getMetadata("serviceMetadata", Constrct);

  if (isServiceMetadata(metadata) && metadata.provideIn === "root") {
    if (!instanceStorage.has(Constrct)) {
      instanceStorage.set(Constrct, new Constrct());
    }

    return instanceStorage.get(Constrct);
  } else {
    return new Constrct();
  }
}

const instance = getInstance(MovieService);

class Movie {
  @Duration(90, 240)
  duration: number = 0;
}

class ShortMovie {
  @Duration(10, 60)
  duration: number = 0;
}

function Duration(from: number, to: number) {
  return function (object: Object, propertyName: string) {
    Reflect.defineMetadata(
      `duration_${propertyName}`,
      { from, to },
      object.constructor
    );
  };
}

function validate<Entity extends Object>(entity: Entity): boolean {
  Object.getOwnPropertyNames(entity).every((propertyName: string) => {
    let metadata = Reflect.getMetadata(
      `duration_${propertyName}`,
      entity.constructor
    );
  });
}
