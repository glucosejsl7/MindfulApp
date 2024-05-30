import React from "react";
import { ScrollView, View } from "react-native";
import NavigationTop from "../components/NavigationTop";
import Comment from "../components/Comment";
import HomeFollowDetail from "../components/HomeFollowDetail";

export default function MindfulContent() {
    return (
        <>
        <NavigationTop />
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', justifyContent: "center" }}>
                <HomeFollowDetail />
                {/* <BookDetail /> */}
            </View>
        </ScrollView>
        <Comment />
        </>

        
            

    );
}
