import React from "react";
import { ScrollView, View } from "react-native";
import Search from "../components/Search";
import NavigationBar from "../components/NavigationBar";
import NavigationTop from "../components/NavigationTop";



export default function MindfulSearch() {
    return (
        <>
        <NavigationTop />
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', justifyContent: "space-evenly"}}>
                <Search/>
            </View>
        </ScrollView>
        <NavigationBar />
        </>
        
            

    );
}
