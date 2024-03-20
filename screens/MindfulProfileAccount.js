import React from "react";
import { ScrollView, View } from "react-native";
import ProfileAccount from "../components/ProfileAccount";

export default function MindfulProfileAccount() {
    return (
        <>
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: "space-evenly"}}>
                <ProfileAccount />
            </View>
        </ScrollView>
        </>
        
            

    );
}
