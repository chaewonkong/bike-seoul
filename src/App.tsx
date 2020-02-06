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
  const [mapBounds, setMapBounds] = useState();

  console.log("bikes", bikes, position, "mapBounds: ", mapBounds);
  useEffect(() => {
    // Get current Position
    onGetPosition();
    // if (position.x && position.y) {
    // setMap(position); // Render map
    // }
  }, []);

  useEffect(() => {
    if (position.x && position.y) {
      setMap(position); // Render map
    }
  }, [position.x, position.y]);

  useEffect(() => {
    if (mapBounds && mapBounds.x1) onGetBikes(position, mapBounds);
    // if (mapBounds) console.log("MAPBOUNDS: ", mapBounds);
  }, [mapBounds]);

  useEffect(() => {
    if (bikes && bikes.length) {
      console.log(bikes);
      bikes.map(bike => setMarker(bike.stationLongitude, bike.stationLatitude));
    }
  }, [bikes]);

  // reload map only when zoom not changed
  useEffect(() => {});

  function setMap(position: IPoints) {
    const { x, y } = position;
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    let options = {
      //지도를 생성할 때 필요한 기본 옵션*
      center: new window.kakao.maps.LatLng(y, x), //지도의 중심좌표.*
      level: 4 //지도의 레벨(확대, 축소 정도)*
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴*
    let bounds = map.getBounds();
    let x1 = bounds.getNorthEast().getLng();
    let x2 = bounds.getSouthWest().getLng();
    let y1 = bounds.getNorthEast().getLat();
    let y2 = bounds.getSouthWest().getLat();

    // let size = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    setMapBounds({ x1, x2, y1, y2 });

    setMapToState(map);

    // 확대/축소 이벤트 리스너
    // let size = mapSize
    window.kakao.maps.event.addListener(map, "bounds_changed", function() {
      let bounds = map.getBounds();
      let x1 = bounds.getNorthEast().getLng();
      let x2 = bounds.getSouthWest().getLng();
      let y1 = bounds.getNorthEast().getLat();
      let y2 = bounds.getSouthWest().getLat();

      setMapBounds({ x1, x2, y1, y2 });
      // setMapSize(size * 100000);
      // let centerLatLng = map.getCenter();
    });

    //   window.kakao.maps.event.addListener(map, "center_changed", function() {
    //     let centerLatLng = map.getCenter();

    //       onGetPosition(centerLatLng.getLng(), centerLatLng.getLat());
    //   });
  }

  // console.log("mapSize", mapSize);

  function setMarker(longitude: string, latitude: string) {
    let marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(latitude, longitude)
    });

    marker.setMap(map);
  }

  if (position.x && position.y)
    return (
      <>
        <GlobalStyle />
        {/* <button onClick={() => onGetBikes(position)}>여기 클릭</button> */}
        <div id="map" style={{ width: "100vw", height: "100vh" }} />
      </>
    );
  else return <div>loading</div>;
};

export default App;
