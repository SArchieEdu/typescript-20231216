// 1 typeof

function calculate(a: string | number, b: boolean | number) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  //   return a + b;
}

// 2 проверка на истинность

function log(message?: string) {
  if (message) {
    console.log(`Log: ${message.toUpperCase()}`);
  }

  console.log(`Log: ${message?.toUpperCase()}`);

  message && console.log(`Log: ${message.toUpperCase()}`);

  message ? console.log(`Log: ${message.toUpperCase()}`) : undefined;
}

// 3 Проверка на равенство

function sum(b: number | string, a?: number) {
  if (a === b) {
    return a + b;
  }
}

// 4 in

interface Film {
  __typename: "Film";
  title: string;
  duration: number;
}

interface TvSeries {
  __typename: "TvSeries";
  title: string;
  episodeCount: number;
  episodeDuration: number;
}

function calculateDuration(movie: Film | TvSeries) {
  if ("duration" in movie) {
    return movie.duration;
  }

  return movie.episodeCount * movie.episodeDuration;
}

// 5 instanceof

function print(date: Date | string) {
  if (date instanceof Date) {
    date.toUTCString();
  }
}

// 6 type predicates

function isFilm(movie: unknown): movie is Film {
  if (!movie) {
    return false;
  }

  const film: Film = movie as Film;

  return typeof film.duration === "number" && typeof film.title === "string";
}

function play(movie: unknown) {
  if (isFilm(movie)) {
    movie.duration;
  }
}

// 7 discriminated unions

function downloadMovie(movie: Film | TvSeries) {
  if (movie.__typename === "Film") {
    movie.duration;
  }
}
