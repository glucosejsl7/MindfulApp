import React from "react";
import { View } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

function NavigationTop(){
    return (
        <View style={{flexDirection : 'row', justifyContent : 'space-between' , borderBottomWidth : 0.5, borderColor : '#bdbdbd' ,paddingTop : 50, paddingBottom : 10}}>
            <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft : 10}}/>
            <FontAwesome6 name="magnifying-glass" size={22} color="black" style={{marginTop : 5, marginRight : 15}} />
        </View>
        
    )
}

export default NavigationTop;