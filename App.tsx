import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";

import Start from "./src/screens/Start";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import Main from "./src/screens/Main";
import { RootStackParamList } from "./src/types";
import { theme } from "./src/core/theme";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
