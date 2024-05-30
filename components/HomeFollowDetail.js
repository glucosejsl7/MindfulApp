import React, { useEffect, useState } from "react";
import BookStorage from "../storages/BookStorage";
import { Alert, Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
import Comment from "./Comment";

export default function HomeFollowDetail() {
  const [buttonText, setButtonText] = useState("ติดตาม");
    const [buttonClicked, setButtonClicked] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();   
  const [book, setBook] = useState({
    "id":"xxxx",
    "title":"Example Book",
    "price":"100",
    "images":["https://picsum.photos/300"],
  });     
//DELETE POPUP    
    const deleteBook = async () => {
        const { id } = route.params;
        //REMOVE BOOK
        await BookStorage.removeItem(id);
        //REDIRECT TO
        navigation.navigate("Home");
      }; 
      const onLoad = async () => {
        navigation.setOptions({ headerRight: () => ( <TopRightMenu /> ) });              
        const { id } = route.params;
        let b = await BookStorage.readItemDetail(id);
        setBook(b);
      };
      
    useEffect(() => { onLoad(); }, []);

    const confirmDelete = () => {    
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { deleteBook(); }, },
            ]
        );
    };



    // TOP RIGHT MENU
    const TopRightMenu = ()=>(
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity 
                onPress={() => { navigation.navigate("AddItem", { "id": route.params.id }); }}

                >
                <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { confirmDelete(); }}
                >
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );

    
    const handleButtonClick = () => {
      setButtonText(buttonText === "ติดตาม" ? "กำลังติดตาม" : "ติดตาม");
      setButtonClicked(!buttonClicked);
  };

  const imagesArray = book.images.map(image => ({ uri: image }));


  return (
    <>
    <ScrollView>
    <View style={{ backgroundColor: "white", flex: 1 }}>
        <TouchableOpacity onPress={() => { setModalVisible(true); }} >
      <View style={{ flexDirection: "row" }}>
      <SliderBox images={imagesArray} style={{ width: 450, height: 550 }} dotColor="black" inactiveDotColor="grey" dotStyle={{ width: 10, height: 10, borderRadius: 10, marginHorizontal: 0 }} />
      </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 5 }}>
                    <Image style={{ width: 35, height: 35, borderRadius: 35 / 2 }} source={{ uri: 'https://raw.githubusercontent.com/glucosejsl7/Data-source/main/Picture/pf8.jpg'}} />
                        <Text style={{ fontSize: 16, color: "black", marginTop: 5, marginLeft: 10 }}>ชื่อแอค</Text>
                    </View>
                    <TouchableOpacity style={{ 
                              backgroundColor: buttonClicked ? 'white' : '#ec407a', 
                              paddingHorizontal: buttonClicked ? 5 : 23, 
                              borderRadius: 5, 
                              borderColor: 'black', 
                              borderWidth: buttonClicked ? 0.5 : 0 , 
                              alignItems : 'center',
                              justifyContent : 'center'
                          }}  
                          onPress={handleButtonClick}
                      >
                        <Text style={{ fontSize: 16, color: buttonClicked ? "black" : "black" }}>{buttonText}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'column', marginVertical: 15, marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{book.title}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{book.description}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, color: '#ec407a' }}>{book.hashtag}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, color: 'grey' }}>แก้ไขล่าสุด: {book.datetime}</Text>

                </View>         
    </View>
    </ScrollView>     
    {/* Integrate the Comment component here */}
     <Comment />
    </>                           
  );
}