// export enum Size {
//   s = "s",
//   m = "m",
//   l = "l",
// }

// export const Size = {
//   s: "s",
//   m: "m",
//   l: "l",
// } as const;

// export type Size = keyof typeof Size;

export type Size = "s" | "m" | "l";

function renderButton(size: Size) {
  if (size === "m") {
  }
}

renderButton("m");

interface Movie {
  __typename: "Movie";
}

// enum MovieType {
//   Film = "Film",
//   TvSeries = "TvSeries",
//   TvShow = "TvShow",
// }

type MovieType = "Film" | "TvSeries" | "TvShow";
