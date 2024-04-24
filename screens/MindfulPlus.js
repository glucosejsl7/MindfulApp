import React from "react";
import { ScrollView, View } from "react-native";
import AddItem from "../components/AddItem";
import BookForm from "../components/BookForm";

export default function MindfulItem() {
    return (

        <ScrollView>
            <View style={{backgroundColor: '#fff' }}>
                <AddItem />
                {/* <BookForm /> */}
            </View>
        </ScrollView>

        
            

    );
}
