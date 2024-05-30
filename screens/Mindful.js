import React from "react";
import { ScrollView, View } from "react-native";
// import HomeFollow from "../components/HomeFollow";
import HomeMaterialTopTab from "../navigations/HomeMaterialTopTab";

export default function Mindful() {
    return (
        <>
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: "space-evenly"}}>
                {/* <HomeFollow /> */}
                {/* <Book /> */}
                <HomeMaterialTopTab />
            </View>
        </ScrollView>
        </>
        
            

    );
}
