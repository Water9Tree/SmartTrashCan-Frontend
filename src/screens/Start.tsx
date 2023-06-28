import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

export type StartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Start"
>;

function Start({ navigation }: StartScreenProps) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">스마트 쓰레기통 서비스</Text>
      <View
        style={{
          position: "absolute",
          bottom: 130,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          style={{ marginRight: 10 }}
          mode="outlined"
          onPress={() => navigation.navigate("SignUp")}
        >
          회원가입
        </Button>
        <Button
          mode="contained-tonal"
          onPress={() => navigation.navigate("SignIn")}
        >
          로그인
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Start;
