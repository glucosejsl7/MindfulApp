import React from "react";
import { ScrollView, View } from "react-native";
import HomeFollow from "../components/HomeFollow";

export default function Mindful() {
    return (
        <>
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', justifyContent: "space-evenly"}}>
                <HomeFollow />
            </View>
        </ScrollView>
        </>
        
            

    );
}
