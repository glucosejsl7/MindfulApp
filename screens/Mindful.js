import React from "react";
import { ScrollView, View } from "react-native";
import MindfulLayout from "../components/MindfulLayout";

export default function Mindful() {
    return (
        <>
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', justifyContent: "space-evenly"}}>
                <MindfulLayout />
            </View>
        </ScrollView>
        </>
        
            

    );
}
