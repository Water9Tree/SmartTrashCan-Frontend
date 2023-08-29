import React, { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSignUpMutation } from "../api/signUpApi";
import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import {
  emailValidator,
  passwordValidator,
  idValidator,
  usernameValidator,
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
  const [username, setUsername] = useState({
    value: "",
    error: "",
  });
  const [checked, setChecked] = React.useState(true);
  const { mutate: signUp } = useSignUpMutation();

  const _onSignUpPressed = () => {
    const idError = idValidator(id.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const usernameError = usernameValidator(username.value);

    if (emailError || passwordError || idError || usernameError) {
      setId({ ...id, error: idError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setUsername({ ...username, error: usernameError });
      return;
    }

    signUp(
      {
        loginId: id.value,
        email: email.value,
        password: password.value,
        username: username.value,
        role: checked ? "ROLE_ADMIN" : "ROLE_ADMIN",
      },
      {
        onSuccess: () => {
          console.log("회원가입 성공");
          navigation.navigate("Start");
        },
      }
    );
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
        label="이름"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: "" })}
        error={!!username.error}
        errorText={username.error}
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
