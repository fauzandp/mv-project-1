import { fecthFromApi } from "@/fetcher-api";
import { useState } from "react";
import { IDetail, IMovieList, ISearchList, ITvList } from "./api.type";

export const movieRepository = () => {
  const [topRateMovie, setTopRateMovie] = useState<IMovieList>();
  const [topRateTv, setTopRateTv] = useState<ITvList>();
  const [detail, setDetail] = useState<IDetail>();
  const [search, setSearch] = useState<ISearchList>();
  const [episode, setEpisode] = useState<any>({});

  const getTopRateMovies = () => {
    fecthFromApi("/movie/top_rated", "GET").then((data) => {
      return setTopRateMovie(data);
    });
  };

  const getTopRateTv = () => {
    fecthFromApi("/tv/top_rated", "GET").then((data) => {
      return setTopRateTv(data);
    });
  };

  const getDetailMovie = (id: string) => {
    fecthFromApi(`/movie/${id}`, "GET").then((data) => {
      return setDetail(data);
    });
  };

  const getDetailTV = (id: string) => {
    fecthFromApi(`/tv/${id}`, "GET").then((data) => {
      return setDetail(data);
    });
  };

  const getSearch = (query: string) => {
    fecthFromApi(
      `/search/multi?query=${query}&include_adult=false`,
      "GET"
    ).then((data) => {
      return setSearch(data);
    });
  };

  const getTvEpisode = (id: string, season: string) => {
    fecthFromApi(`/tv/${id}?append_to_response=${season || ""}`, "GET").then(
      (data) => {
        return setEpisode(data);
      }
    );
  };

  return {
    getTopRateMovies,
    topRateMovie,
    getTopRateTv,
    topRateTv,
    detail,
    getDetailMovie,
    getDetailTV,
    setSearch,
    search,
    getSearch,
    getTvEpisode,
    episode,
  };
};
