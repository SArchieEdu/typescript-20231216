let strLet = "";

// strLet = 123;
// strLet = ''

export function calculate<Value extends string = "hello">(a: Value): number {
  if (a === "hello") {
    return 45;
  }
  return 1 + 1;
}

function getProperty<Entity, Key extends keyof Entity>(
  entity: Entity,
  key: Key
): Entity[Key] {
  return entity[key];
}

getProperty({ a: "", b: 123, c: true }, "b");

function call<Arguments extends any[], ReturnType>(
  callback: (...args: Arguments) => ReturnType,
  ...args: Arguments
): ReturnType {
  return callback(...args);
}

const result = call((name: string, b: number) => "Hello, " + name, "123", 123);

type ReturnType<Function extends (...args: any[]) => any> = Function extends (
  ...args: any[]
) => infer Return
  ? Return
  : never;

type ParamsType<Function extends (...args: any[]) => any> = Function extends (
  ...args: infer Params
) => any
  ? Params
  : never;

type GetComponentProps<Function extends (...args: any[]) => any> =
  Function extends (props: infer Props, ...args: any[]) => any ? Props : never;

const sum = (a: number, b: string) => a + "";

function Button({
  size,
  type,
}: {
  size: "s" | "m";
  type: "primary" | "secondary";
}) {}

type Test = ReturnType<typeof sum>;
type Test2 = ParamsType<typeof sum>;

type Props = GetComponentProps<typeof Button>;
