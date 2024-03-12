import React from "react";
import { View } from "react-native";
import { Octicons, FontAwesome6, Entypo } from "@expo/vector-icons";

function NevigationBar(){
    return (
        <View style={{flexDirection : 'row', backgroundColor :'white', padding : 20 , borderRadius : 15, width : 430, height :65 , margin : 10, justifyContent : 'space-between', shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
            <Octicons name="home" size={26} color="black" />
            <FontAwesome6 name="magnifying-glass" size={23} color="black" />
        
                <Entypo name="plus" size={25} color="black" />
            <Octicons name="bell" size={24} color="black" />
            <Octicons name="person" size={25} color="black" />
        </View>
    )
}

export default NevigationBar;