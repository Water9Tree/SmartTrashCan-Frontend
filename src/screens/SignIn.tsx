import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import { RootStackParamList } from "../types";

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;

const SignIn = ({ navigation }: SignUpScreenProps) => {
  const [id, setId] = useState({ value: "" });

  const [password, setPassword] = useState({ value: "" });
  const _onSignInPressed = () => {
    navigation.navigate("Start");
  };

  return (
    <Background>
      <TextInput
        label="아이디"
        value={id.value}
        onChangeText={(text) => setId({ value: text })}
      />

      <TextInput
        label="비밀번호"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text })}
      />

      <Button
        style={{ marginTop: 4, width: "100%" }}
        mode="contained"
        onPress={_onSignInPressed}
      >
        로그인
      </Button>
    </Background>
  );
};

export default SignIn;
