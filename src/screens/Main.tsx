import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text, View, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { RadioButton } from "react-native-paper";
import { RootStackParamList } from "../types";

import Map from "./Map";
import BuildingSelector from "../components/BuildingSelector";

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Main"
>;

const Main = ({ navigation }: SignUpScreenProps) => {
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [buildingType, setBuildingType] = useState("all");

  return (
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
    </View>
  );
};

export default Main;
