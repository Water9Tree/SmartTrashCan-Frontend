import React, { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import {
  emailValidator,
  passwordValidator,
  idValidator,
  verifyCodeValidator,
} from "../core/utils";
import { RootStackParamList } from "../types";

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUp"
>;

const SignUp = ({ navigation }: SignUpScreenProps) => {
  const [id, setId] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [verifyCode, setVerifyCode] = useState({
    value: "",
    error: "",
  });
  const [checked, setChecked] = React.useState(true);

  const _onSignUpPressed = () => {
    const idError = idValidator(id.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const verifyCodeError = verifyCodeValidator(verifyCode.value);

    if (emailError || passwordError || idError || verifyCodeError) {
      setId({ ...id, error: idError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setVerifyCode({ ...verifyCode, error: verifyCodeError });
      return;
    }

    navigation.navigate("Start");
  };

  return (
    <Background>
      <TextInput
        label="아이디"
        value={id.value}
        onChangeText={(text) => setId({ value: text, error: "" })}
        error={!!id.error}
        errorText={id.error}
      />

      <TextInput
        label="비밀번호"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
      />

      <TextInput
        label="이메일"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        keyboardType="email-address"
      />

      <TextInput
        label="인증번호"
        value={verifyCode.value}
        onChangeText={(text) => setVerifyCode({ value: text, error: "" })}
        error={!!verifyCode.error}
        errorText={verifyCode.error}
      />
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12 }}>청소부 입니다</Text>
        <Checkbox.Android
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
      <Button
        style={{ marginTop: 4, width: "100%" }}
        mode="contained"
        onPress={_onSignUpPressed}
      >
        회원가입
      </Button>
    </Background>
  );
};

export default SignUp;
