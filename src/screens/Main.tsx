import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text, View, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { RadioButton } from "react-native-paper";
import { RootStackParamList } from "../types";

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Main"
>;

const Main = ({ navigation }: SignUpScreenProps) => {
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [buildingType, setBuildingType] = useState("all");

  return (
    <Background>
      <View style={{ position: "absolute", top: 5, right: 10 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setBuildingType("all")}
        >
          <RadioButton.Android
            value="all"
            status={buildingType === "all" ? "checked" : "unchecked"}
            uncheckedColor="#cbd5e1"
          />
          <Text>모든 건물</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setBuildingType("filledBin80")}
        >
          <RadioButton.Android
            value="filledBin80"
            status={buildingType === "filledBin80" ? "checked" : "unchecked"}
            uncheckedColor="#cbd5e1"
          />
          <Text>80% 이상</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setBuildingType("filledBin50")}
        >
          <RadioButton.Android
            value="filledBin50"
            status={buildingType === "filledBin50" ? "checked" : "unchecked"}
            onPress={() => setBuildingType("filledBin50")}
            uncheckedColor="#cbd5e1"
          />
          <Text>50% 이상</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Main;
