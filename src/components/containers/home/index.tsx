import Banner from "@/components/banner";

import { fecthFromApi } from "@/fetcher-api";
import { useEffect, useState } from "react";

import SectionMovie from "@/components/movie-card/index";
import SectionTv from "@/components/tv-card/index";

import { movieRepository } from "@/api/movies/api.function";
import { initialMovie, initialTv } from "@/api/movies/api.type";

const HomeContainer = () => {
  const { topRateMovie, getTopRateMovies, getTopRateTv, topRateTv } =
    movieRepository();
  const [select, setSelected] = useState<any>(initialMovie);

  useEffect(() => {
    setSelected(topRateMovie?.results[0] || []);
  }, [topRateMovie?.results[0]]);

  useEffect(() => {
    getTopRateMovies();
    getTopRateTv();
  }, []);

  return (
    <>
      <Banner select={select} />
      <SectionMovie
        title={"Top Rated Movies"}
        data={topRateMovie || initialMovie}
        setSelected={setSelected}
        isGeneral={true}
        isWatchList={false}
      />
      <SectionTv
        title={"Top Rated TV Series"}
        data={topRateTv || initialTv}
        setSelected={setSelected}
        isGeneral={true}
        isWatchList={false}
      />
    </>
  );
};

export default HomeContainer;
