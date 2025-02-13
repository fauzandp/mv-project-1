import { IEpisodes } from "@/api/movies/api.type";
import { formatDate } from "@/utils";

interface IProps {
  data: IEpisodes[];
}
const EpisodeCard = ({ data }: IProps) => {
  return (
    <>
      {data?.map((episode) => (
        <>
          <div className="episode-card">
            <img
              src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
            ></img>
            <h4> {episode.name} </h4>
            <br></br>
            <ul>
              <li>
                S{episode.season_number}E{episode.episode_number} |
              </li>

              <li>{formatDate(episode.air_date)} | </li>
              <li> {episode.runtime}m</li>
            </ul>
            <p> {episode.overview} </p>
          </div>
        </>
      ))}
    </>
  );
};

export default EpisodeCard;
