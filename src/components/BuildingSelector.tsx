import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text, View, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { RadioButton } from "react-native-paper";
import { RootStackParamList } from "../types";

interface LogoSize {
  refetch: any;
  buildingType: string;
  setBuildingType: React.Dispatch<React.SetStateAction<string>>;
}

const BuildingSelector = ({
  buildingType,
  setBuildingType,
  refetch,
}: LogoSize) => (
  <View style={{ position: "absolute", top: 0, right: 5, zIndex: 3 }}>
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center" }}
      onPress={() => {
        setBuildingType("all");
        refetch();
      }}
    >
      <RadioButton.Android
        value="all"
        status={buildingType === "all" ? "checked" : "unchecked"}
        onPress={() => setBuildingType("all")}
        uncheckedColor="#cbd5e1"
      />
      <Text
        style={{
          fontSize: 10,
        }}
      >
        모든 건물
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center" }}
      onPress={() => {
        setBuildingType("filledBin80");
        refetch();
      }}
    >
      <RadioButton.Android
        value="filledBin80"
        status={buildingType === "filledBin80" ? "checked" : "unchecked"}
        onPress={() => setBuildingType("filledBin80")}
        uncheckedColor="#cbd5e1"
      />
      <Text
        style={{
          fontSize: 10,
        }}
      >
        80% 이상
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center" }}
      onPress={() => {
        setBuildingType("filledBin50");
        refetch();
      }}
    >
      <RadioButton.Android
        value="filledBin50"
        status={buildingType === "filledBin50" ? "checked" : "unchecked"}
        onPress={() => setBuildingType("filledBin50")}
        uncheckedColor="#cbd5e1"
      />
      <Text
        style={{
          fontSize: 10,
        }}
      >
        50% 이상
      </Text>
    </TouchableOpacity>
  </View>
);

export default BuildingSelector;
