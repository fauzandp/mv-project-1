import { IMovie, IMovieList } from "@/api/movies/api.type";

interface props {
  title: string;
  data: IMovieList;
  setSelected: (data: IMovie) => void;
  isGeneral: boolean | "false";
  isWatchList: boolean | "false";
}

const sectionCard = ({
  isGeneral,
  title,
  data,
  setSelected,
  isWatchList,
}: props) => {
  return (
    <>
      {isGeneral && (
        <>
          <div className="section-card">
            <div>
              <h4> {title}</h4>{" "}
            </div>
            {data?.results?.length > 0 &&
              data?.results?.slice(0, 8).map((movie: IMovie, index) => (
                <>
                  <div className="movie-card">
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500/` + movie.poster_path
                      }
                      alt="Avatar"
                      width={"500"}
                      onClick={() => {
                        setSelected(movie);
                      }}
                    />

                    {/* <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p> */}
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
              data?.results?.slice(0, 8).map((movie: IMovie, index) => (
                <>
                  <div className="watchlist-card">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500` +
                            movie.poster_path
                          : "/dumm500x750.png"
                      }
                      alt="Avatar"
                      width={"500"}
                      onClick={() => {
                        setSelected(movie);
                      }}
                    />
                  </div>
                </>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default sectionCard;
