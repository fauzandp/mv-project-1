import { movieRepository } from "@/api/movies/api.function";
import { getYear, checkKey, setLocalStorage } from "@/utils";
import { useEffect, useState } from "react";
import EpisodeCard from "@/components/episode-card/index";
import { ISeason } from "@/api/movies/api.type";

interface IProps {
  id: string;
  isTvDetail: boolean;
}

const detail = ({ id, isTvDetail }: IProps) => {
  const { detail, getDetailMovie, getDetailTV, episode, getTvEpisode } =
    movieRepository();
  const [season, setSeason] = useState<string>("");
  const [check, isCheck] = useState<boolean>(false);

  let specificKey = season || {};
  let res: ISeason | undefined;

  Object.keys(episode).forEach((key) => {
    if (key === specificKey) {
      res = episode[key];
    }
  });

  useEffect(() => {
    if (isTvDetail) {
      getDetailTV(id);
    } else {
      getDetailMovie(id);
    }
  }, []);

  useEffect(() => {
    if (season) {
      getTvEpisode(id, season);
    }
  }, [season]);

  useEffect(() => {
    setSeason("season/1");
  }, [detail]);

  const onClickSeason = (value: string) => {
    setSeason(value);
  };

  return (
    <>
      <div className="container-banner-detail">
        <div className="side">
          <h1> {detail?.original_title || detail?.original_name} </h1>
          <ul>
            <li>
              {" "}
              {getYear(detail?.release_date || "") ||
                getYear(detail?.first_air_date || "")}
            </li>
            <li> {detail?.spoken_languages?.length || 0} Languages</li>
          </ul>
          <p>{detail?.overview || ""}</p>

          <ul>
            {detail?.genres?.map((data) => (
              <>
                <li>{data.name}</li>
              </>
            ))}
          </ul>

          <div className="ctas">
            <a
              href={""}
              className="secondary"
              onClick={() => {
                setLocalStorage(
                  `${process.env.NEXT_PUBLIC_LOCAL_STORAGE}`,
                  detail
                );
              }}
            >
              Watch Later{" "}
            </a>
            <a
              href=""
              className="primary"
              onClick={() => {
                setLocalStorage(
                  `${process.env.NEXT_PUBLIC_LOCAL_STORAGE}`,
                  detail
                );
                isCheck(true);
              }}
            >
              {check ? "✓" : "+"}
            </a>
          </div>
        </div>
        <div className="banner-image">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
            width={"100%"}
            height={"720px"}
          />
        </div>

        <div className="choose-season">
          <ol>
            {detail?.seasons?.map((data) => (
              <>
                <li>
                  {" "}
                  <a
                    onClick={(e) =>
                      onClickSeason("season/" + data.season_number || "")
                    }
                  >
                    {" "}
                    {data?.name}{" "}
                  </a>
                </li>
              </>
            ))}
          </ol>
        </div>
      </div>
      {isTvDetail && (
        <>
          <EpisodeCard data={res?.episodes || []} />
        </>
      )}
    </>
  );
};

export default detail;
