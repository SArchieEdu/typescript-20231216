export type Film = {
  type: "Film";
  duration: number;
};

type TvSeries = {
  type: "TvSeries";
  episodeDuration: number;
  episodeCount: number;
};

type MovieType = "Film" | "TvSeries";

type FilmOrTvSeries<Type extends MovieType> = Type extends "Film"
  ? Film
  : TvSeries;

type FilmOrTvSeriesType<Type extends Film | TvSeries> = Type extends Film
  ? "Film"
  : "TvSeries";

function createMovie<Type extends MovieType>(type: Type): FilmOrTvSeries<Type> {
  throw "";
}

const film = createMovie("Film");
const tvSeries = createMovie("TvSeries");
film.duration;
tvSeries.episodeCount;

type Test = FilmOrTvSeriesType<TvSeries>;
