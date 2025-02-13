import { useEffect, useState } from "react";
import { ISearch } from "./api/movies/api.type";

export const getYear = (date: string) => {
  const year = new Date(date);
  return year.getFullYear();
};

export const setLocalStorage = (key: string, data: any) => {
  const watchlist = JSON.parse(localStorage.getItem(key) || "[]");
  if (watchlist) {
    watchlist.push(data);
    localStorage.setItem(key, JSON.stringify(watchlist));
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    // now access your localStorage
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
};

export const checkKey = (objectName: any, keyName: string) => {
  let keyExist = Object.keys(objectName).some((key) => key === keyName);
  return keyExist;
};

export const formatDate = (date: string) => {
  const dateString = new Date(date);
  return `${
    dateString.getDate() +
    " " +
    getMonthConvert(dateString.getMonth()) +
    " " +
    dateString.getFullYear()
  }`;
};

export const getMonthConvert = (month: number) => {
  let monthString: string = "";
  switch (month) {
    case 1:
      monthString = "January";
      break;
    case 2:
      monthString = "February";
      break;
    case 3:
      monthString = "March";
      break;
    case 4:
      monthString = "April";
      break;
    case 5:
      monthString = "May";
      break;
    case 6:
      monthString = "June";
      break;
    case 7:
      monthString = "July";
      break;
    case 8:
      monthString = "August";
      break;
    case 9:
      monthString = "September";
      break;
    case 10:
      monthString = "October";
      break;
    case 11:
      monthString = "November";
      break;
    case 12:
      monthString = "December";
      break;
  }

  return monthString;
};
