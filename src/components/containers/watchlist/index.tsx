import Card from "@/components/card/index";
import WatchList from "@/pages/watch-list";
import { getLocalStorage } from "@/utils";
import { useEffect, useState } from "react";

const watchlist = () => {
  const [watchlistData, setWatchListData] = useState<any>();
  useEffect(() => {
    const watchlist = getLocalStorage("watch-list");
    const data = {
      results: watchlist,
    };
    setWatchListData(data);
  }, []);

  return (
    <>
      <div className="watch-list">
        <h1> Watchlist</h1>
        <Card
          data={watchlistData}
          title=""
          isWatchList={true}
          isGeneral={false}
        />
      </div>
    </>
  );
};

export default watchlist;
