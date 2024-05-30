import React from "react";
import { ScrollView, View } from "react-native";
import AddItem from "../components/AddItem";

export default function MindfulPlus() {
    return (

        <ScrollView>
            <View style={{backgroundColor: '#fff' }}>
                <AddItem />
            </View>
        </ScrollView>

        
            

    );
}
