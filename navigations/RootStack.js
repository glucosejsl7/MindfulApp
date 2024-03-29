import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationBar from "./NavigationBar";
import HomeMaterialTopTab from "./HomeMaterialTopTab";
import Search from "../components/Search";
import HomeFollow from "../components/HomeFollow";
import HomeForYou from "../components/HomeForYou";



const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="NavigationBar">
      <Stack.Screen name="NavigationBar" component={NavigationBar} options={{ headerShown: false }} />
      <Stack.Screen name="HomeMaterialTopTab" component={HomeMaterialTopTab} options={{ headerShown: false}}  />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false  }}  />
      <Stack.Screen name="HomeFollow" component={HomeFollow} options={{ headerShown: false  }}  />
      <Stack.Screen name="HomeForYou" component={HomeForYou} options={{ headerShown: false  }}  />
    </Stack.Navigator>
  );
}
