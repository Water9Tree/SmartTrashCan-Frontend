import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { API_URL } from "@env";

import Start from "./src/screens/Start";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import Main from "./src/screens/Main";
import Notification from "./src/screens/Notification";
import { RootStackParamList } from "./src/types";
import { theme } from "./src/core/theme";
import { RecoilRoot } from "recoil";

axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true;

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // console.log(process.env.REACT_APP_API_URL, axios.defaults.baseURL);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <RecoilRoot>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Start">
                <Stack.Screen
                  name="Start"
                  options={{ title: "" }}
                  component={Start}
                />
                <Stack.Screen
                  name="SignUp"
                  options={{ title: "" }}
                  component={SignUp}
                />
                <Stack.Screen
                  name="SignIn"
                  options={{ title: "" }}
                  component={SignIn}
                />
                <Stack.Screen
                  name="Main"
                  options={{ title: "" }}
                  component={Main}
                />
                <Stack.Screen
                  name="Notification"
                  options={{ title: "" }}
                  component={Notification}
                />
                
              </Stack.Navigator>
            </NavigationContainer>
          </RecoilRoot>
        </PaperProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
