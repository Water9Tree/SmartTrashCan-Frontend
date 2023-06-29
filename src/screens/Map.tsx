import React from "react";
import { View, Image, Dimensions } from "react-native";

import MapMarker from "../components/MapMarker";

interface MapProps {
  buildingType: string;
  setSelectedBuilding: React.Dispatch<React.SetStateAction<number>>;
}

const Map = ({ buildingType, setSelectedBuilding }: MapProps) => {
  const origin = [
    //TODO 빌딩 불러오기 API
    //TODO -  x,y 좌표 엉망임! 대충 찍어서 넣었는데 나중에 손봐야 함
    { filledTrashcan: 5, buildingId: 201, x: 2, y: 2, buildingName: "제도관" },
    { filledTrashcan: 1, buildingId: 313, x: 4, y: 3, buildingName: "건설관" },
    {
      filledTrashcan: 0,
      buildingId: 408,
      x: 1.7,
      y: 3,
      buildingName: "자연대",
    },
    {
      filledTrashcan: 3,
      buildingId: 506,
      x: 2.4,
      y: 6,
      buildingName: "인문대",
    },
    {
      filledTrashcan: 0,
      buildingId: 708,
      x: 8,
      y: 5,
      buildingName: "경암체육관",
    },
  ];
  const [buildings, setBuildings] = React.useState(origin);

  React.useEffect(() => {
    if (buildingType === "filledBin80") {
      const temp = origin.filter((building) => building.filledTrashcan > 0);
      setBuildings(temp);
    } else if (buildingType === "all") {
      setBuildings(origin);
    }
  }, [buildingType]);
  return (
    <View
      style={{
        position: "relative",
        backgroundColor: "white",
        marginTop: 50,
      }}
    >
      <View>
        {/* 이미지는 device 넓이에 맞춰서 꽉 차게, */}
        <Image
          source={require("../../assets/pusan_univ_map.jpg")}
          defaultSource={require("../../assets/pusan_univ_map.jpg")}
          style={{
            aspectRatio: 1,
            width: Dimensions.get("window").width,
            height: undefined,
          }}
        />
      </View>
      {/* 마커 표시, 마커 컴포넌트에 absolute 속성 존재 */}
      {buildings.map((building) => {
        return (
          <MapMarker
            key={building.buildingId}
            buildingId={building.buildingId}
            x={building.x}
            y={building.y}
            buildingName={building.buildingName}
            setSelectedBuilding={setSelectedBuilding}
          />
        );
      })}
    </View>
  );
};

export default Map;
