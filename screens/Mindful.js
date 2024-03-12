import React from "react";
import { ScrollView, View } from "react-native";
import MindfulLayout from "../components/MindfulLayout";
import NavigationBar from "../components/NavigationBar";

export default function Mindful() {
    return (
        <>
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', justifyContent: "center", padding: 20 }}>
                <MindfulLayout />
            </View>
        </ScrollView>
        <NavigationBar />
        </>
        
            

    );
}
