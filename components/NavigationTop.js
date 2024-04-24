import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

function NavigationTop(){

    const [textInputVisible, setTextInputVisible] = useState(false);
    const [searchIcon, setSearchIcon] = useState("magnifying-glass");

    const handleSearchIconClick = () => {
        setTextInputVisible(!textInputVisible);
        setSearchIcon(textInputVisible ? "magnifying-glass" : "ค้นหา");
    };

    return (
        <View style={{flexDirection : 'row', justifyContent : 'space-between' ,alignItems : 'center', borderBottomWidth : 0.5, borderColor : '#bdbdbd' ,height : 100,paddingTop : 40, paddingLeft : 10, paddingRight : 15}}>
            <View style={{flexDirection: 'row', width : 425,justifyContent : 'flex-end',alignItems : 'center'}}>
                <TextInput placeholder="ค้นหา" style={{ flex: 1, borderRadius: 5, paddingHorizontal: 5, paddingVertical: 2, backgroundColor : '#e0e0e0', height : 40, marginRight : 15, marginLeft : 10 }} />
                <TouchableOpacity style={{marginHorizontal : 8}}>
                    <Text style={{fontSize : 16, fontWeight : 'bold'}}>ค้นหา</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NavigationTop;
