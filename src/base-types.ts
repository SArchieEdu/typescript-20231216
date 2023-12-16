// Boolean
let isTrue: boolean = true;
// isTrue = 123;
// isTrue = "";
isTrue = false;

// Number
let num: number = 10;
let float: number = 12.5;
let binary: number = 0b101;

// bigint
let bigNumber: bigint = 100n;

// String
let str: string = "hello";

// Null
let nullVar: null = null;

// Undefined
let undefinedVar: undefined = undefined;

// object
let objectVar: { a: string; b?: number } = { a: "" };

// array
let arrayVar: string[] = ["", "", ""];

// Tuple
let tupleVar: [string, number] = ["", 123];

// Any
let anyVar: any = 123;
anyVar = {};
anyVar = "";
anyVar.a;

// Unknown
let unknownVar: unknown = "";
unknownVar = { a: "" };

// unknownVar.a;
// tupleVar = unknownVar

// functions

function calculate(a: { a: string }): undefined {
  return;
}

// literal types
let position: "absolute" | "fixed" | "static" = "static";
let fontWeight: 500 | 600 | 700 | "bold" = "bold";

// union
let strOrNum: string | number = 123;
let objectUnion: { a: string } | { b: string };

function getObject(): { a: string; c: string } | { b: string; c: string } {
  return { a: "", c: "" };
}

const result = getObject();
result.c;

// intersection
let intersectionExample: string & number;

let intersectionObject: { a: string; c: { a: string } } & {
  b: string;
  c: { b: string };
};

intersectionObject = { a: "", b: "", c: { a: "", b: "" } };
