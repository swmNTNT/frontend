import React, { useEffect, useState } from "react";

const useGeolocation = () => {
  const [state, setState] = useState({
    coord: { lat: null, long: null },
    error: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { longitude, latitude } = pos.coords;
        setState((p) => ({ ...p, coord: { lat: latitude, long: longitude } }));
      },
      (err) => {
        setState((p) => ({ ...p, error: true }));
      }
    );
    return () => {};
  });
  return state;
};

export default useGeolocation;
