import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationBar from "./NavigationBar";



const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="NavigationBar">
      <Stack.Screen name="NavigationBar" component={NavigationBar} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
