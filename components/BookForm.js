import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import BookStorage from "../storages/BookStorage";

export default function BookForm() {  
  const navigation = useNavigation();
  const route = useRoute();
  const [key, setKey] = useState("_" + Math.random().toString(36).substring(2, 9));
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([""]);
  const [description, setDescription] = useState("");
  const [hashtag, setHashtag] = useState("");
  


  const onLoad = async () => {
    const { id } = route.params;
    try {
      let book = await BookStorage.readItemDetail(id);   
      if (book) {
        setKey(book.id);
        setTitle(book.title);
        setImages(book.images || [""]);
        setDescription(book.description);
        setHashtag(book.hashtag);
      } else {
        // Handle case where book with specified id is not found
        console.log("Book not found with id:", id);
      }
    } catch (error) {
      console.error("Error loading book:", error);
      // Handle error here, such as displaying an error message to the user
    }
    navigation.setOptions({ title: (id ? "edit" : "create") });    
  };
    

  useEffect(() => { onLoad();  }, []);

  const saveBook = async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear() + 543; // Convert to Buddhist calendar year
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
    const day = ('0' + currentDate.getDate()).slice(-2); // Add leading zero if needed
  
    const formattedDate = `${year}-${month}-${day}`;
  
    let new_data = { 
      "id": key, 
      "title": title, 
      "images": images, 
      "description": description, 
      "hashtag": hashtag,
      "datetime": formattedDate // Formatted date
    };
  
    await BookStorage.writeItem(new_data);
    navigation.navigate("HomeMaterialTopTab");
  };
  
  

  const addImage = () => {
    setImages([...images, ""]);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <Text>ชื่อหนังสือ</Text>
        <TextInput placeholder="Enter title ..." value={title} onChangeText={(text) => setTitle(text)} />
        <Text>รูปภาพ</Text>
        {images.map((image, index) => (
          <TextInput key={index} placeholder={`Enter image URL ${index + 1}...`} value={image} onChangeText={(text) => {
            const updatedImages = [...images];
            updatedImages[index] = text;
            setImages(updatedImages);
          }} />
        ))}
        <TouchableOpacity onPress={addImage}>
            <Text>Add Image</Text>
          </TouchableOpacity>
          <Text>คำอธิบาย</Text>
        <TextInput placeholder="Enter description ..." multiline numberOfLines={1} value={description} onChangeText={(text) => setDescription(text)} />
        <Text>ติดแฮชแท็ก</Text>
        <TextInput placeholder="Enter hashtag ..." multiline numberOfLines={1} value={hashtag} onChangeText={(text) => setHashtag(text)} />


      </ScrollView>
      <Button title="SAVE" color="tomato" onPress={saveBook} />
    </KeyboardAvoidingView>
  );
}
