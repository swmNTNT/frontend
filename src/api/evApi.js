import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-real-pdnai.run.goorm.io",
});

export const postApi = {
  stationNearby: ({ minLat, maxLat, minLng, maxLng }) => {
    return api.post("/station/nearby", { minLat, maxLat, minLng, maxLng });
  },
};

/*
{
    "minLat": "37.5875896",
    "maxLat": "37.6875296",
    "minLng": "127.0674823",
    "maxLng": "127.0771823"
}
*/
/*

 "_id": "609d82b70d9a76075b240f34",
 "addr": "서울특별시 노원구 노원로 330",
 "stId": "ME174018", // 충전소 아이디
 "stNm": "롯데마트 중계점",
 "chgerId": "01", // 충전기 아이디 
 "chgerStat": "2", //  충전기상태
 "type": "06",  // 충전기 타입 
 "lat": "37.6466673",
 "lng": "127.0715514",
 "time": "20210513211044",
 "__v": 0
 ------------------------------------------------------------
type == 충전기타입
(01:DC차데모,
02: AC완속,
03: DC차데모+AC3상,
04: DC콤보,
05: DC차데모+DC콤보
06: DC차데모+AC3상+DC콤보,
07: AC3상)

chgerState  == 충전기상태
(1: 통신이상, 2: 충전대기,3: 충전중, 4: 운영중지,5: 점검중, 9: 상태미확인)


------------------------------------------------------------
*/
