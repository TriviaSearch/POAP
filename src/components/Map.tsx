import React from "react";
import mmrgl from "mmr-gl";
import styled from "@emotion/styled";
import "mmr-gl/dist/mmr-gl.css";

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Map() {
  const mapRef = React.useRef<mmrgl.Map>();

  React.useEffect(() => {
    mapRef.current = new mmrgl.Map({
      container: "map",
      zoom: 8,
      center: [30.3141, 59.9386],
      style: "mmr://api/styles/dark_style.json",
      accessToken: import.meta.env.VITE_VKCLOUD_TOKEN,
    });

    mapRef.current.addControl(new mmrgl.NavigationControl());
    mapRef.current.addControl(new mmrgl.GeolocateControl());

    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  return <MapContainer id="map" />;
}

export default Map;
