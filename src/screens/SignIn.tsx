import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useSignInMutation } from "../api/signInApi";

import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import { RootStackParamList } from "../types";

export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;

const SignIn = ({ navigation }: SignInScreenProps) => {
  const [id, setId] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });

  const { mutate: signIn } = useSignInMutation();

  const _onSignInPressed = () => {
    console.log(id.value, password.value);
    signIn(
      {
        loginId: id.value,
        password: password.value,
      },
      {
        onSuccess: () => {
          console.log("로그인 성공");
          navigation.navigate("Main");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
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
        onPress={() => {
          _onSignInPressed();
        }}
      >
        로그인
      </Button>
    </Background>
  );
};

export default SignIn;
