import React from "react";

import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

import Button from "../components/Button";
import Header from "../components/Header";
import Background from "../components/Background";
import Logo from "../components/Logo";

export type StartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Start"
>;

function Start({ navigation }: StartScreenProps) {
  return (
    <Background>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Logo width={90} height={90} />
        <Header>스마트 쓰레기통 서비스</Header>
      </View>

      <View
        style={{
          margin: 70,
          flexDirection: "row",
        }}
      >
        <Button
          style={{ paddingRight: 30 }}
          onPress={() => navigation.navigate("SignUp")}
        >
          회원가입
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate("SignIn")}>
          로그인
        </Button>
      </View>
    </Background>
  );
}

export default Start;
