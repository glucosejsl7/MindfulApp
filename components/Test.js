import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Button, Text, TouchableOpacity, View, Image, StyleSheet,FlatList } from "react-native";
import { Entypo, SimpleLineIcons, Feather, FontAwesome6, MaterialIcons, Ionicons,AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import BookStorage from "../storages/BookStorage";
import * as ImagePicker from 'expo-image-picker';

function AddItem() {
    const [key, setKey] = useState("_" + Math.random().toString(36).substring(2, 9));
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [showHashtagInput, setShowHashtagInput] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    const onLoad = async () => {
        const { id } = route.params || { id: null };
        if (id) {
            let book = await BookStorage.readItemDetail(id);
            setKey(book.id);
            setTitle(book.title);
            setImages(book.images || []);
            setDescription(book.description);
            setHashtag(book.hashtag);
        }
        navigation.setOptions({ title: (id ? "edit" : "create") });
    };

    useEffect(() => { onLoad(); }, []);

    const saveBook = async () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear() + 543;
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        const day = ('0' + currentDate.getDate()).slice(-2);

        const formattedDate = `${year}-${month}-${day}`;

        let new_data = {
            "id": key,
            "title": title,
            "images": images,
            "description": description,
            "hashtag": hashtag,
            "datetime": formattedDate
        };

        await BookStorage.writeItem(new_data);
        resetForm();
        navigation.navigate("Home");
    };

    const resetForm = () => {
        setKey("_" + Math.random().toString(36).substring(2, 9));
        setTitle("");
        setImages([]);
        setDescription("");
        setHashtag("");
        setShowHashtagInput(false);
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImages([...images, result.assets[0].uri]);
            }
        } catch (error) {
            console.error('Error picking Image:', error);
        }
    };

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const [isOn, setIsOn] = useState(false);

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white', paddingTop: 30 }}>
                <View style={{ flexDirection: 'column', paddingHorizontal: 10,paddingTop:20, margin: 10, borderRadius: 10, backgroundColor: 'white' }}>
                <View style={{justifyContent : 'center',alignItems : 'center', paddingBottom :20}}>
                    <Text style={{fontSize : 16, fontWeight : 'bold'}}>โพสต์</Text> 
                </View>
                    <FlatList
                        data={[...images, 'add_button']} // Add a placeholder for the add button
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} 
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            if (item === 'add_button') {
                                return (
                                    <View >
                                        <TouchableOpacity onPress={pickImage} style={{width: 100, height: 100,borderColor :"#e0e0e0",borderWidth : 0.5, borderRadius: 7,marginRight: 10,justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                                            <AntDesign name="plus" size={30} color="#bdbdbd" />
                                        </TouchableOpacity>
                                    </View>
                                );
                            } else {
                                return (
                                    <Image source={{ uri: item }} style={{ width: 100, height: 100, marginRight: 10, borderRadius : 7 }} />
                                );
                            }
                        }}
            
                    />
                </View>

                <View style={{flexDirection : 'column', justifyContent : 'space-between'}}>
                <TextInput placeholder="เพิ่มหัวเรื่องที่น่าสนใจเพื่อเพิ่มยอดการดู" value={title} onChangeText={(text) => setTitle(text)} multiline numberOfLines={1} style={{ backgroundColor : 'white',fontWeight : 'bold'}} placeholderTextColor={'#e0e0e0'} placeholderBorderColor= {false}/>
                <View style={{flexDirection : 'column',borderBottomWidth : 0.5, borderColor : '#eeeeee', justifyContent : 'space-between' , paddingBottom : 10}}> 
                        <View style={{flexDirection : 'column', marginBottom : 80}}>
                            <TextInput placeholder="แตะเพื่อเพิ่มแคปชั่น..." value={description} onChangeText={(text) => setDescription(text)} multiline numberOfLines={1} style={{ backgroundColor : 'white',fontSize: 15 ,borderWidth: 0, borderColor: 'transparent' }} placeholderTextColor={'#e0e0e0'} placeholderBorderColor= {false} />
                            {/* Render TextInput for hashtag when showHashtagInput is true */}
                            {showHashtagInput && (
                                <TextInput placeholder="เพิ่มแฮชแท็ก..." value={hashtag} onChangeText={(text) => setHashtag(text)} multiline numberOfLines={1} style={{ backgroundColor : 'white',fontSize: 15 ,borderWidth: 0, borderColor: 'transparent' }} placeholderTextColor={'#e0e0e0'} placeholderBorderColor= {false}/>
                                )} 
                        </View>   

                        <View style={{flexDirection : 'row'}}>
                            <View style={{flexDirection : 'row', alignItems : 'centers',backgroundColor : '#eeeeee', padding : 7, borderRadius : 5, marginHorizontal : 10}}>
                                <SimpleLineIcons name="note" size={16} color="black" style={{marginRight : 5}} />
                                <Text style={{fontSize : 11}}>ไอเดียแคปชั่น</Text>
                            </View>
                            <View style={{flexDirection : 'row', alignItems : 'centers',backgroundColor : '#eeeeee', padding : 7, borderRadius : 5, marginRight : 10}}>
                                <Feather name="map-pin" size={16} color="black" style={{marginRight : 5}} />
                                <Text style={{fontSize : 11}}>สถานที่</Text>
                            </View>
                            <View style={{flexDirection : 'row', alignItems : 'centers',backgroundColor : '#eeeeee', padding : 7, borderRadius : 5, marginRight : 10}}>
                                <Feather name="at-sign" size={16} color="black" />
                            </View>
                            <TouchableOpacity onPress={() => setShowHashtagInput(!showHashtagInput)}>
                                <View style={{flexDirection : 'row', alignItems : 'center', backgroundColor : '#eeeeee', padding : 7, borderRadius : 5, marginRight : 10}}>
                                    <FontAwesome6 name="hashtag" size={16} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>
                </View>
                <View style={{flexDirection : 'column', borderBottomWidth : 0.5, borderColor : '#eeeeee', marginHorizontal : 15, marginTop : 15}}>
                        <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between',marginBottom : 15}}>
                            <View style={{flexDirection : 'row'}}>
                                <Feather name="map-pin" size={20} color="black" style={{marginRight : 5}} />
                                <Text style={{fontSize : 16}}>เพิ่มตำแหน่งที่ตั้ง</Text>
                            </View>
                            <SimpleLineIcons name="arrow-right" size={14} color="black" />
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom : 15}}>
                            <View style={{flexDirection : 'row'}}>
                                <View style={{alignItems : 'center',backgroundColor : '#ffffff', padding : 9, borderRadius : 5, marginRight : 10, borderWidth : 0.5, borderColor : '#eeeeee' }}>
                                    <Text>อำเภอคลองหลวง</Text>
                                </View>
                                <View style={{alignItems : 'center',backgroundColor : '#ffffff', padding : 9, borderRadius : 5, marginRight : 10, borderWidth : 0.5, borderColor : '#eeeeee' }}>
                                    <Text>ตำบล คลองหนึ่ง</Text>
                                </View>
                                <View style={{alignItems : 'center',backgroundColor : '#ffffff', padding : 9, borderRadius : 5, marginRight : 10, borderWidth : 0.5, borderColor : '#eeeeee' }}>
                                    <Text>สถาบันเทคโนโลยีนานาชาติ</Text>
                                </View>
                                <View style={{alignItems : 'center',backgroundColor : '#ffffff', padding : 9, borderRadius : 5, marginRight : 10, borderWidth : 0.5, borderColor : '#eeeeee' }}>
                                    <Text>ปทุมธานี</Text>
                                </View>
                            </View>
                        </ScrollView>

                </View>
                <View style={{flexDirection : 'column', margin : 15, borderBottomWidth : 0.5, borderColor : '#eeeeee',paddingBottom : 15 }}>
                        <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', marginBottom : 5}}>
                                <View style={{flexDirection : 'row'}}>
                                    <Ionicons name="arrow-redo-outline" size={24} color="black" />
                                    <Text style={{fontSize : 16, marginLeft : 5}}>แชร์ไปยัง Tiktok</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={handleToggle} activeOpacity={1} style={styles.container}>
                                    <View style={[styles.track, isOn && styles.trackOn]}>
                                        <View style={[styles.thumb, isOn ? styles.thumbOn : null]} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{fontSize : 14, color : '#9e9e9e'}}>หลังจากโพสต์ ให้เปิด Tiktok เพื่อแชร์โพส</Text>
                </View>
            </View>
            <View style={{flexDirection : 'row' , marginHorizontal : 15,marginBottom : 15}}>
                <View style={{marginRight : 10,borderColor : "#9e9e9e", backgroundColor : 'white', paddingHorizontal : 10, paddingVertical : 10 ,borderRadius : 3, borderWidth : 0.5}}>
                    <Text style={{fontSize: 16}}>บันทึกแบบร่าง</Text>

                </View>
                <TouchableOpacity onPress={saveBook} style={{backgroundColor : '#ec407a', paddingHorizontal : 100, paddingVertical : 10 ,borderRadius : 3}}>

                
                <Text style={{fontSize: 16}}>โพสต์</Text>

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#08C799",
      borderRadius: 20,
      width: 50,
      overflow: "hidden"
    },
    track: {
      flex: 1,
      backgroundColor: "#e0e0e0",
      height: 27,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    },
    trackOn: {
      backgroundColor: "#08C799"
    },
    thumb: {
      width: 21,
      height: 21,
      borderRadius: 15,
      backgroundColor: "#fff",
      position: "absolute",
      left: 3,
      elevation: 3 
    },
    thumbOn: {
      left: "51%",
      backgroundColor: "white"
    },
  });

export default  AddItem;
