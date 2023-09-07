import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform} from "react-native";
import { useSignInMutation } from "../api/apis";

import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import { RootStackParamList } from "../types";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;

const SignIn = ({ navigation }: SignInScreenProps) => {
  const [id, setId] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });

  const { mutate: signIn } = useSignInMutation();

  const handleSignInButtonClick = () => {
    registerForPushNotificationsAsync().then((token) => {
      if (!token) return;
      signIn(
        {
          loginId: id.value,
          password: password.value,
          expoToken: token,
        },
        {
          onSuccess: () => {
            navigation.navigate("Main");
          },
        }
      );
    });
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
          handleSignInButtonClick();
        }}
      >
        로그인
      </Button>
    </Background>
  );
};

export default SignIn;

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    // projectId 본인 앱꺼 넣어야 함.
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: "7b4541c1-2027-4e28-a98a-be20c1ede5fb",
      })
    ).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}