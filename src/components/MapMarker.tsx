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
  buildingId: number;
  buildingName: string;
  x: number;
  y: number;
  setSelectedBuilding: React.Dispatch<React.SetStateAction<number>>;
}

const MapMarker = ({
  buildingId,
  buildingName,
  x,
  y,
  setSelectedBuilding,
}: MapMarkerProps) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  // TODO 애니메이션 싱크 안맞음
  React.useEffect(() => {
    startBounceAnimation();
  }, []);
  const startBounceAnimation = () => {
    Animated.timing(animation, {
      toValue: 5,
      duration: 600,
      easing: Easing.bezier(0.8, 0, 1, 1),
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: -5,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.bezier(0, 0, 0.2, 1),
        // title: "Bezier",
      }).start(() => {
        startBounceAnimation();
      });
    });
    // Animated.parallel(animation).start();
  };
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
    ];

    setButtonColor(colors[Math.floor(buildingId / 100) - 1]);
  }, []);

  return (
    <View
      style={{
        position: "absolute",
        top: deviceWidth / y,
        left: deviceWidth / x,
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
        <Animated.View
          style={{
            transform: [{ translateY: animation }],
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: buttonColor,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 9999,
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
              {buildingId}
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default MapMarker;
