import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./global-styles";
import { bikeApi } from "./api";
import { IBike, IPoints } from "./shared-interfaces";
import usePosition from "./redux/hooks/usePosition";

declare global {
  interface Window {
    kakao: any;
  }
}

const App: React.FC = () => {
  const { position, onGetPosition, onGetBikes, bikes } = usePosition();
  const [map, setMapToState] = useState();

  console.log("bikes", bikes, position);
  useEffect(() => {
    // Get current Position
    onGetPosition();
  }, []);

  useEffect(() => {
    if (position.x && position.y) {
      onGetBikes(position); // Get Bikes
      setMap(position); // Render map
    }
  }, [position.x, position.y]);

  useEffect(() => {
    if (bikes && bikes.length) {
      console.log(bikes);
      bikes.map(bike => setMarker(bike.stationLongitude, bike.stationLatitude));
    }
  }, [bikes]);

  function setMap(position: IPoints) {
    const { x, y } = position;
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    let options = {
      //지도를 생성할 때 필요한 기본 옵션*
      center: new window.kakao.maps.LatLng(y, x), //지도의 중심좌표.*
      level: 3 //지도의 레벨(확대, 축소 정도)*
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴*
    setMapToState(map);
  }

  function setMarker(longitude: string, latitude: string) {
    let marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(latitude, longitude)
    });

    marker.setMap(map);
  }

  return (
    <>
      <GlobalStyle />
      {/* <button onClick={() => onGetBikes(position)}>여기 클릭</button> */}
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
    </>
  );
};

export default App;
