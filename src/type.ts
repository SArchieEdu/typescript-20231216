type Size = "s" | "m" | "l";

const buttonSize: Size = "m";

type Animal = {
  heigh: number;
  callback(): void;
};

type Dog = Animal & {
  name: string;
};

type B = () => void;
