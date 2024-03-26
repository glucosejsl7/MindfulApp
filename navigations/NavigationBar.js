import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, FontAwesome6, Entypo } from "@expo/vector-icons";
import Mindful from "../screens/Mindful";
import MindfulSearch from "../screens/MindfulSearch";
import MindfulProfileAccount from "../screens/MindfulProfileAccount";
import MindfulPlus from "../screens/MindfulPlus";
import MindfulNotice from "../screens/MindfulNotice";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                tabBarActiveTintColor: '#ec407a', 
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: false, // This line hides the labels
                tabBarStyle: { height: 65, borderRadius : 10, margin : 10 }
            }}>
            <Tab.Screen 
                name="Home"
                component={Mindful}
                options={{
                    tabBarIcon: ({ color, size }) => ( <Octicons name="home" color={color} size={size} /> ),
                    headerShown : false,
                }}
            />
            <Tab.Screen
                name="Search"
                component={MindfulSearch}
                options={{
                    tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="magnifying-glass" color={color} size={size}/> ),
                    headerShown : false,
                }}
            />
            <Tab.Screen
                name="Plus"
                component={MindfulPlus}
                options={({ focused }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ borderRadius : 10, backgroundColor:'#ec407a', paddingVertical: 5, paddingHorizontal : 10 }}>
                            <Entypo name="plus" color={focused ? 'white' : 'black'} size={size} />
                        </View>
                    ),
                    headerShown : false,
                })}
            />
            <Tab.Screen
                name="Notice"
                component={MindfulNotice}
                options={{
                    tabBarIcon: ({ color, size }) => ( <Octicons name="bell" color={color} size={size} /> ),
                    headerShown : false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={MindfulProfileAccount}
                options={{
                    tabBarIcon: ({ color, size }) => ( <Octicons name="person" color={color} size={size} /> ),
                    headerShown : false,
                }}
            />
        </Tab.Navigator>
    );
}
