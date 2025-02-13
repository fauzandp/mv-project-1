export interface IMovieList {
  results: IMovie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string | number[];
  id: number;
  title: string;
  name?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path?: any;
  vote_average: number;
  vote_count: number;
  video: boolean;
  release_date: string;
}

export interface ITvList {
  results: ITv[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface ITv {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string | number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  release_date?: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface ISearchList {
  results: ISearch[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface ISearch {
  adult?: boolean;
  backdrop_path?: any;
  genre_ids?: string | number[];
  id: number;
  title?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  release_date?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: any;
  first_air_date?: string;
  name?: string;
  vote_average?: number;
  vote_count?: number;
  video?: boolean;
  media_type: string;
  gender?: number;
  profile_path?: any;
  known_for_department?: string;
  known_for?: IKnownFor[];
}

export interface IKnownFor {
  backdrop_path: any;
  id: number;
  name?: string;
  title?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  poster_path?: any;
  media_type: string;
  adult: boolean;
  first_air_date?: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
}

export interface IDetail {
  adult: boolean;
  backdrop_path: string;
  original_name?: string;
  belongs_to_collection: any;
  budget: number;
  genres: IGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  release_date: string;
  revenue: number;
  first_air_date?: string;
  runtime: number;
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  seasons?: ISeason[];
  vote_count: number;
}

export interface ISeason {
  air_date: string;
  episode_count: number;
  episodes: IEpisodes[];
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface IEpisodes {
  air_date: string;
  episode_number: string;
  id: string;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface IGenres {
  id: number;
  name: string;
}

export const initialMovie = {
  page: 1,
  total_pages: 0,
  total_results: 0,
  results: [
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: 0,
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "0",
      release_date: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ],
};

export const initialTv = {
  page: 1,
  total_pages: 0,
  total_results: 0,
  results: [
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: 0,
      origin_country: [],
      original_language: "",
      original_name: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      first_air_date: "",
      name: "",
      vote_average: 0,
      vote_count: 0,
    },
  ],
};

export const initialSearch = {
  page: 1,
  total_pages: 0,
  total_results: 0,
  results: [
    {
      backdrop_path: "",
      id: 0,
      name: "",
      title: "",
      original_name: "",
      overview: "",
      poster_path: "",
      media_type: "",
      adult: false,
      original_language: "",
      genre_ids: [],
      popularity: 0,
      first_air_date: "",
      vote_average: 0,
      vote_count: 0,
      origin_country: [],
    },
  ],
};
