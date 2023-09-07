import * as React from "react";
import {
  View,
  Text,
  Easing,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";

interface MapMarkerProps {
  index: number;
  buildingId: number;
  buildingName: string;

  setSelectedBuilding: React.Dispatch<React.SetStateAction<number>>;
}

const MapMarker = ({
  index,
  buildingId,
  buildingName,

  setSelectedBuilding,
}: MapMarkerProps) => {
  const deviceWidth = Dimensions.get("window").width;

  const [buttonColor, setButtonColor] = React.useState("");

  React.useEffect(() => {
    const colors = [
      "#e51721",
      "#fc7718",
      "#fdbc08",
      "#61b752",
      "#55c4cb",
      "#05b1ef",
      "#9764b3",
      "#9764b3",
    ];

    setButtonColor(colors[Math.floor(buildingId / 100) - 1]);
  }, []);

  return (
    <View
      style={{
        position: "absolute",
        top: index * 50,
      }}
    >
      {/* 터치 영역 더 넗혀주는 컴포넌트 */}
      <TouchableOpacity
        hitSlop={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
        onPress={() => setSelectedBuilding(buildingId)}
      >
        <View
          style={{
            width: 140,
            height: 40,
            backgroundColor: buttonColor,
            borderColor: "white",
            borderWidth: 2,
            opacity: 0.93,
            borderRadius: 3,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            {buildingId} &nbsp;{buildingName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MapMarker;
