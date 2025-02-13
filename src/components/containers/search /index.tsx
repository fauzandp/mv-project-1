import Card from "@/components/card/index";
import { useState } from "react";

import { movieRepository } from "@/api/movies/api.function";
import { initialSearch } from "@/api/movies/api.type";

const SearchContainer = () => {
  const [keyword, setKeyWord] = useState<string>("");

  const { search, getSearch, setSearch } = movieRepository();

  const debounce = (onChange: any) => {
    let timeout: any;
    return (e: any) => {
      const form = e.currentTarget.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  const onSearchList = (value: any) => {
    if (value.length > 3) {
      setKeyWord(value);
      getSearch(value);
    } else {
      setSearch(undefined);
    }
  };

  return (
    <>
      <div className="search-list">
        <input
          type="text"
          className="search-input"
          onChange={debounce((e: any) => {
            onSearchList(e);
          })}
        />
        {search?.total_pages && search?.total_pages > 0 && (
          <>
            <Card
              title={"Search"}
              data={search || initialSearch}
              isGeneral={true}
              isWatchList={false}
            />
          </>
        )}
      </div>
    </>
  );
};

export default SearchContainer;
