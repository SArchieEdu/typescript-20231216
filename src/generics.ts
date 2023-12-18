interface Film {
  title: string;
  duration: number;
}

interface TvSeries {
  title: string;
  seasonCount: number;
}

// interface Response {
//   error: {};
// }

// interface TvSeriesResponse extends Response {
//   result: TvSeries;
// }

// interface FilmResponse extends Response {
//   result: Film;
// }

// export interface Response<Result> {
//   error: {};
//   result: Result;
// }

export type Response<Result> = {
  error: {};
  result: Result;
};

type FilmResponse = Response<Film>;
type TvSeriesResponse = Response<TvSeries>;

function fetchFilm(): Response<Film> {
  throw "";
}

function fetchTvSeries(): Response<TvSeries> {
  throw "";
}

class Logger<Message> {
  log(message: Message) {}
}

type ClientMessage = { message: string; type: "error" | "info" };
type ServerMessage = { message: string; type: "error" | "info"; code: number };

// new Logger<ClientMessage>().log();
// new Logger<ServerMessage>().log();

type EntityGetters<Entity> = {
  -readonly [Property in keyof Entity as `get${Capitalize<
    Property & string
  >}`]-?: () => Entity[Property];
};

type EntitySetters<Entity> = {
  -readonly [Property in keyof Entity as `set${Capitalize<
    Property & string
  >}`]-?: (value: Entity[Property]) => void;
};

type CompletedEntity<Entity> = Entity &
  EntitySetters<Entity> &
  EntityGetters<Entity>;

type CompletedFilm = CompletedEntity<Film>;
type CompletedTvSeries = CompletedEntity<TvSeries>;

type PlayerStage = "play" | "pause" | "idle" | "ready" | "buffering";

type UseStageResult<Stages extends string> = { stage: Stages } & {
  [Stage in Stages as `switchTo${Capitalize<Stage>}`]: () => Stage;
};

function usePlayerStage(): UseStageResult<PlayerStage> {
  let stage: PlayerStage = "idle";
  return {
    stage,
    switchToPlay: () => {
      return "play";
    },
    switchToPause: () => {
      return "pause";
    },
    switchToIdle: () => {
      return "idle";
    },
    switchToReady: () => {
      return "ready";
    },
    switchToBuffering: () => {
      return "buffering";
    },
  };
}

function getProperty<Entity, Key extends keyof Entity>(
  entity: Entity,
  key: Key
): Entity[Key] {
  return entity[key];
}

getProperty<{ a: string; c: number }, "a">({ a: "", c: 123 }, "a");

type FilmPart = Omit<Film, "title">;

type MovieTypes = "Film" | "TvSeries" | "TvShow";

type Test = Exclude<MovieTypes, "Film">;
type Test2 = Extract<MovieTypes, "Film">;

const MovieDurationGetter: Record<MovieTypes, () => number> = {
  Film: () => 123,
  TvSeries: () => 12 * 34,
  TvShow: () => 34,
};
