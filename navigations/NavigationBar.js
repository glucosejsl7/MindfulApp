import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Octicons, FontAwesome6, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mindful from "../screens/Mindful";
import MindfulSearch from "../screens/MindfulSearch";
import MindfulProfileAccount from "../screens/MindfulProfileAccount";
import MindfulPlus from "../screens/MindfulPlus";
import MindfulNotice from "../screens/MindfulNotice";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    return (
            <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#ec407a', tabBarInactiveTintColor: 'black' }}>
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
                    options={{
                        tabBarIcon: ({ color, size }) => ( <Entypo name="plus" color={color} size={size} /> ),
                        headerShown : false,
                    }}
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
