import React from "react";
import { ScrollView, View } from "react-native";
import Content from "../components/Content";
import NavigationTop from "../components/NavigationTop";
import Comment from "../components/Comment";
import CommentWrapper from "../components/CommentWrapper";


export default function MindfulContent() {
    return (
        <>
        <NavigationTop />
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', justifyContent: "center" }}>
                <Content />
            </View>
        </ScrollView>
        <Comment />
        </>

        
            

    );
}
