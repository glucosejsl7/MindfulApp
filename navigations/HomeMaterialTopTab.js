import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeFollow from '../components/HomeFollow';
import HomeForYou from '../components/HomeForYou';
import { useNavigation } from "@react-navigation/native";

export default function HomeMaterialTopTab() {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();

    const renderTabBar = ({ navigation, state }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingTop : 40, borderBottomWidth : 0.5 ,paddingBottom : -10 ,borderColor : 'grey',backgroundColor : 'white' }}>
            <Image style={{ width: 90, height: 35, marginLeft: 20 }} source={require("../Picture/logo2.png")} />
            <TouchableOpacity onPress={() => navigation.navigate(state.routes[0].name)} style={{ marginLeft: 8, marginTop : 10}}>
                <View style={{ borderBottomWidth: state.index === 0 ? 2 : 0, borderBottomColor: state.index === 0 ? 'black' : 'transparent' , paddingBottom : 10}}>
                    <Text style={{ color: state.index === 0 ? 'black' : 'grey', fontSize: 18 }}>
                        ติดตาม
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(state.routes[1].name)} style={{  marginRight: 8 , marginTop : 10}}>
                <View style={{ borderBottomWidth: state.index === 1 ? 2 : 0, borderBottomColor: state.index === 1 ? 'black' : 'transparent', paddingBottom : 10}}>
                    <Text style={{ color: state.index === 1 ? 'black' : 'grey', fontSize: 18 }}>
                        สำหรับคุณ
                    </Text>
                </View>
            </TouchableOpacity>
            <FontAwesome6 name="magnifying-glass" size={24} color="black" style={{ marginTop: 5, marginRight: 20 }}  onPress={()=>{ navigation.navigate("Search"); }}/>
        </View>
    );

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "black", tabBarInactiveTintColor: "black", }} tabBar={(props) => renderTabBar({ ...props, navigation })}>
            <Tab.Screen
                name="ติดตาม"
                component={HomeFollow}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="สำหรับคุณ"
                component={HomeForYou}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}
