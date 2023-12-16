interface People {
  name: string;
  surname: string;
  age: number;
}

interface Actor extends People {
  role: string;
}

interface Director extends People {
  experience: string;
}

export interface Movie {
  title: string;
  releaseYear: number;
  actors?: Actor[];
  director: Director;
}

let movie: Movie = {
  title: "",
  releaseYear: 2023,
  actors: [{ name: "", age: 99, role: "", surname: "" }],
  director: { name: "", surname: "", age: 99, experience: "99" },
  duration: 99,
};

export interface Movie {
  duration: number;
}
