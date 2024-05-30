import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, FontAwesome6, Entypo } from "@expo/vector-icons";
import MindfulSearch from "../screens/MindfulSearch";
import MindfulProfileAccount from "../screens/MindfulProfileAccount";
import MindfulPlus from "../screens/MindfulPlus";
import MindfulNotice from "../screens/MindfulNotice";
import { View } from "react-native";
import HomeMaterialTopTab from "./HomeMaterialTopTab";
import Book from "../components/Book";
import AddItem from "../components/AddItem";
import Mindful from "../screens/Mindful";
import Test from "../components/Test";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    // const PlusComponent = React.useMemo(() => () => <AddItem id={null} />, []);
    const PlusComponent = React.useMemo(() => () => <Test id={null} />, []);

    return (
        <Tab.Navigator 
            screenOptions={{ 
                tabBarActiveTintColor: '#ec407a', 
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: false, // This line hides the labels
                tabBarStyle: { height: 85, borderRadius : 0 },
            }}>
            <Tab.Screen 
                name="Home"
                component={HomeMaterialTopTab}
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
                component={PlusComponent}
                // component={Test}
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
                // component={Book}
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
