"use client";

import { IMovie, ITv } from "@/api/movies/api.type";
import { setLocalStorage } from "@/utils";
import { useState } from "react";

interface propsBanner {
  select: ITv | IMovie;
}

export default function Banner({ select }: propsBanner) {
  const [check, isCheck] = useState<boolean>(false);
  return (
    <>
      <div className="container-banner">
        <div className="side">
          <h1> {select?.name || select?.original_title} </h1>
          <p>{select?.overview}</p>

          <div className="ctas">
            <a
              href={select?.name ? `/tv/` + select?.id : `/movie/` + select?.id}
              className="secondary"
            >
              Watch Now{" "}
            </a>
            <a
              href=""
              className="primary"
              onClick={() => {
                setLocalStorage(
                  `${process.env.NEXT_PUBLIC_LOCAL_STORAGE}`,
                  select
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
            src={
              select?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/` + select?.backdrop_path
                : "/dummy1000x480.png"
            }
            width="1000px"
            height="480px"
          />
        </div>
      </div>
    </>
  );
}
