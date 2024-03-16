import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Octicons, FontAwesome6, Entypo } from "@expo/vector-icons";

function NavigationBar(){
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    return (
        <View style={{flexDirection : 'row', backgroundColor :'white', padding : 20 , borderRadius : 15, width : 430, height :65 , margin : 10, justifyContent : 'space-between', shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
            <TouchableOpacity onPress={() => handleIconClick("home")}>
                <Octicons name="home" size={26} color={selectedIcon === "home" ? "#ec407a" : "black"} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => handleIconClick("search")}>
                <FontAwesome6 name="magnifying-glass" size={23} color={selectedIcon === "search" ? "#ec407a" : "black"} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => handleIconClick("plus")}>
                <View style={{backgroundColor :'#ec407a', paddingHorizontal : 11,paddingVertical : 6, width : 50,height :40, marginTop: -8, borderRadius : 8}}>
                    <Entypo name="plus" size={28} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconClick("bell")}>
                <Octicons name="bell" size={24} color={selectedIcon === "bell" ? "#ec407a" : "black"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconClick("person")}>
                <Octicons name="person" size={25} color={selectedIcon === "person" ? "#ec407a" : "black"} />
            </TouchableOpacity>
        </View>
    )
}

export default NavigationBar;
