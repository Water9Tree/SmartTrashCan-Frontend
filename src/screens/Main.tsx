import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { View, Text } from "react-native";

import { BottomNavigation } from "react-native-paper";
import { RootStackParamList } from "../types";

import Map from "./Map";
import Swipe from "./Swipe";
import Admin from "./Admin";
import Notification from "./Notification";
import BuildingSelector from "../components/BuildingSelector";
import { theme } from "../core/theme";

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Main"
>;

const Main = ({ navigation }: SignUpScreenProps) => {
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [buildingType, setBuildingType] = useState("all");

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "map",
      focusedIcon: "trash-can-outline",
      unfocusedIcon: "trash-can-outline",
    },
    {
      key: "notifications",
      focusedIcon: "bell-outline",
      unfocusedIcon: "bell-outline",
    },
    {
      key: "admin",
      focusedIcon: "account-cog-outline",
      unfocusedIcon: "account-cog-outline",
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    map: () => (
      <View
        style={{
          position: "relative",
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <BuildingSelector
          buildingType={buildingType}
          setBuildingType={setBuildingType}
        />
        <Map
          buildingType={buildingType}
          setSelectedBuilding={setSelectedBuilding}
        />
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <Swipe selectedBuilding={selectedBuilding} />
        </View>
      </View>
    ),
    notifications: () => <Notification />,
    admin: () => <Admin />,
  });

  return (
    <>
      <BottomNavigation
        labeled={true}
        barStyle={{ backgroundColor: theme.colors.middleGray, height: 85 }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default Main;
