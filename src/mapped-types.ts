export interface Movie {
  title: string;
  readonly releaseYear: number;
  actors?: string[];
  director: string;
}

type MovieCopy = {
  [Property in keyof Movie]: Movie[Property];
};

type PartialMovie = {
  [Property in keyof Movie]?: Movie[Property];
};

type RequiredMovie = {
  [Property in keyof Movie]-?: Movie[Property];
};

type ReadonlyMovie = {
  readonly [Property in keyof Movie]: Movie[Property];
};

type NotReadonlyMovie = {
  -readonly [Property in keyof Movie]: Movie[Property];
};

type ModifiedMovie = {
  [Property in keyof Movie]-?: Movie[Property] | undefined;
};

type Keys = keyof Movie; // 'title' | 'releaseYear' | 'actors' | 'director'

type MovieGetters = {
  -readonly [Property in keyof Movie as `get${Capitalize<Property>}`]-?: () => Movie[Property];
};
type MovieSetters = {
  -readonly [Property in keyof Movie as `set${Capitalize<Property>}`]-?: (
    value: Movie[Property]
  ) => void;
};

type CompletedMovie = Movie & MovieSetters & MovieGetters;

class MovieClass implements CompletedMovie {
  title: string;
  releaseYear: number;
  actors?: string[] | undefined;
  director: string;
  setTitle: (value: string) => void;
  setReleaseYear: (value: number) => void;
  setActors: (value: string[] | undefined) => void;
  setDirector: (value: string) => void;
  getTitle: () => string;
  getReleaseYear: () => number;
  getActors: () => string[] | undefined;
  getDirector: () => string;
}
