import { ISearch, ISearchList } from "@/api/movies/api.type";

interface props {
  title: string;
  data: ISearchList;
  isGeneral: boolean | "false";
  isWatchList: boolean | "false";
}

export default function card({ isGeneral, title, data, isWatchList }: props) {
  return (
    <>
      {isGeneral && (
        <>
          <div className="section-card">
            <div>
              <h4> {title}</h4>{" "}
            </div>
            {data?.results?.length > 0 &&
              data?.results?.slice(0, 8).map((search: ISearch, index) => (
                <>
                  <div className="movie-card">
                    <a
                      href={
                        search.media_type === "movie"
                          ? "/movie/" + search.id
                          : "/tv/" + search.id
                      }
                    >
                      <img
                        src={
                          search?.poster_path
                            ? `https://image.tmdb.org/t/p/original` +
                              search.poster_path
                            : "/dumm500x750.png"
                        }
                        width={"500"}
                      />
                    </a>
                  </div>
                </>
              ))}
          </div>
        </>
      )}

      {isWatchList && (
        <>
          <div className="section-card">
            <div>
              <h4> {title}</h4>{" "}
            </div>
            {data?.results?.length > 0 &&
              data?.results?.slice(0, 8).map((search: ISearch, index) => (
                <>
                  <div className="watchlist-card">
                    <a
                      href={
                        search?.first_air_date
                          ? "/tv/" + search.id
                          : "/movie/" + search.id
                      }
                    >
                      <img
                        src={
                          search?.poster_path
                            ? `https://image.tmdb.org/t/p/original` +
                              search.poster_path
                            : "/dumm500x750.png"
                        }
                        alt=""
                        width={"500"}
                        onClick={() => {}}
                      />
                    </a>

                    <div className="overlay"> {search.original_title}</div>
                  </div>
                </>
              ))}
          </div>
        </>
      )}
    </>
  );
}
