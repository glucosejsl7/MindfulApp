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
            <Ionicons name="chevron-back" size={24} color="black" />
            <View style={{flexDirection: 'row', width : 400,justifyContent : 'flex-end'}}>
                {textInputVisible && (
                    <TextInput placeholder="ค้นหา" style={{ flex: 1, borderRadius: 5, paddingHorizontal: 5, paddingVertical: 2, backgroundColor : '#eeeeee', height : 40, marginRight : 15, marginLeft : 10 }} />
                )}
                <TouchableOpacity onPress={handleSearchIconClick}>
                    <View style={{ flexDirection: 'row'}}>
                        <FontAwesome6 name={searchIcon === "magnifying-glass" ? "magnifying-glass" : ""} size={22} color="black"  />
                        {searchIcon !== "magnifying-glass" && <Text style={{ fontSize : 14, fontWeight : '700', alignSelf : 'center',marginTop : 7}}>{searchIcon}</Text>}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NavigationTop;
