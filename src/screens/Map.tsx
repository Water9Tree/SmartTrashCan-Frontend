import React from "react";
import { View, Image, Dimensions } from "react-native";

import MapMarker from "../components/MapMarker";

interface MapProps {
  data: any;
  buildingType: string;
  setSelectedBuilding: React.Dispatch<React.SetStateAction<number>>;
}

const Map = ({ data, buildingType, setSelectedBuilding }: MapProps) => {
  const origin = data;
  const [buildings, setBuildings] = React.useState(origin);

  React.useEffect(() => {
    if (buildingType === "filledBin80") {
      const temp = origin.filter((building: any) => building.over80.length > 0);
      setBuildings(temp);
    } else if (buildingType === "filledBin50") {
      const temp = origin.filter((building: any) => building.over50.length > 0);
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
        marginTop: 10,
        marginLeft: 10,
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
      {buildings?.map((building: any, index: number) => {
        return (
          <MapMarker
            index={index}
            key={building.buildingId}
            buildingId={building.buildingId}
            buildingName={building.buildingName}
            setSelectedBuilding={setSelectedBuilding}
          />
        );
      })}
    </View>
  );
};

export default Map;
