import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-real-pdnai.run.goorm.io",
});

/*
{
    "minLat": "37.5875896",
    "maxLat": "37.6875296",
    "minLng": "127.0674823",
    "maxLng": "127.0771823"
}
*/
export const postApi = {
  stationNearby: ({ minLat, maxLat, minLng, maxLng }) => {
    return api.post("/station/nearby", { minLat, maxLat, minLng, maxLng });
  },
};
