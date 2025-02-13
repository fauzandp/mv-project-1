import { ITv, ITvList } from "@/api/movies/api.type";

interface props {
  title: string;
  data: ITvList;
  setSelected: (data: ITv) => void;
  isGeneral: boolean | "false";
  isWatchList: boolean | "false";
}

export default function sectionCard({
  isGeneral,
  title,
  data,
  setSelected,
  isWatchList,
}: props) {
  return (
    <>
      {isGeneral && (
        <>
          <div className="section-card">
            <div>
              <h4> {title}</h4>{" "}
            </div>
            {data?.results?.length > 0 &&
              data?.results?.slice(0, 8).map((tv: ITv, index) => (
                <>
                  <div className="movie-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/` + tv.poster_path}
                      alt="Avatar"
                      width={"500"}
                      onClick={() => {
                        setSelected(tv);
                      }}
                    />
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
              data?.results?.slice(0, 8).map((tv: ITv, index) => (
                <>
                  <div className="watchlist-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500` + tv.poster_path}
                      alt="Avatar"
                      width={"500"}
                      onClick={() => {}}
                    />
                  </div>
                </>
              ))}
          </div>
        </>
      )}
    </>
  );
}
