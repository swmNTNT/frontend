import React, { useEffect, useState } from "react";
import { postApi } from "../api/evApi";

/**
 * 
 *  "_id": "609d7da5798ca5067f8bb815",
    "addr": "서울특별시 노원구 노원로 330",
    "stId": "ME174018",
    "stNm": "롯데마트 중계점",
    "chgerId": "01",
    "chgerStat": "2",
    "type": "06",
    "lat": "37.6466673",
    "lng": "127.0715514",
    "time": "20210513211044",
    "__v": 0
 */
// minLat, maxLat, minLng, maxLng,
const useStationNearby = (userLat, userLng) => {
  if (!userLat) {
    userLat = "37.6075296";
  }
  if (!userLng) {
    userLng = "127.0701823";
  }
  const [minLat, maxLat] = [Number(userLat) - 0.05, Number(userLat) + 0.05];
  const [minLng, maxLng] = [Number(userLng) - 0.05, Number(userLng) + 0.05];

  const [state, setState] = useState({
    error: null,
    loading: true,
    stations: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setState((p) => ({ ...p, loading: false }));
      try {
        const res = await postApi.stationNearby({
          minLat,
          maxLat,
          userLat,
          minLng,
          maxLng,
          userLng,
        });
        // console.log(res);
        if (res.status === 200) {
          setState((p) => ({
            ...p,
            loading: false,
            error: false,
            stations: res.data.data,
          }));
        } else {
          setState((p) => ({ ...p, loading: false, error: true }));
        }
      } catch (error) {
        setState((p) => ({ ...p, loading: false, error: true }));
      }
    };
    fetchData();
    return () => {};
  }, [minLat, maxLat, minLng, maxLng]);

  return state;
};

export default useStationNearby;
