import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons,SimpleLineIcons,Ionicons } from '@expo/vector-icons';

function Notice() {
    const [onlineSource, setOnlineSource] = useState([]);
    const [followedState, setFollowedState] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);

    const loadOnlineSource = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/glucosejsl7/Data-source/main/info.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            // Initialize followed state with false for each item
            const initialFollowedState = {};
            data.forEach(item => {
                initialFollowedState[item.id] = false;
            });
            setFollowedState(initialFollowedState);
            // Set data
            setOnlineSource(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };

    useEffect(() => {
        loadOnlineSource();
    }, []);

    const handleButtonClick = (id) => {
        const updatedFollowedState = { ...followedState };
        updatedFollowedState[id] = !followedState[id];
        setFollowedState(updatedFollowedState);
    };

    return (
        <View style={{flexDirection : 'column', paddingTop : 50}}>
            <View style={{justifyContent : 'center',alignItems : 'center', paddingBottom : 10}}>
                <Text style={{fontSize : 16}}>การแจ้งเตือน</Text> 
            </View>
            <ScrollView>
            <View style={{flexDirection : 'column' ,borderBottomWidth : 0.5, borderColor : '#e0e0e0'}}>
                <View style={{flexDirection : 'row',paddingLeft : 15,paddingRight : 20, paddingVertical : 10,alignItems : 'center', justifyContent : 'space-between'}}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <View style={{ height : 50, width : 50,borderRadius : 50/2, backgroundColor : "#ffecb3", justifyContent : 'center',alignItems : 'center'}}>
                            <MaterialCommunityIcons name="account-check" size={26} color="#f9a825" />
                        </View>
                        <Text style={{fontSize : 16, marginLeft : 15}}>ผู้ติดตามใหม่</Text>

                    </View>
                    <SimpleLineIcons name="arrow-right" size={14} color="#757575" />
                </View>
                <View style={{flexDirection : 'row',paddingLeft : 15,paddingRight : 20, paddingVertical : 10,alignItems : 'center', justifyContent : 'space-between'}}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <View style={{ height : 50, width : 50,borderRadius : 50/2, backgroundColor : "#f9bdbb", justifyContent : 'center',alignItems : 'center'}}>
                            <Ionicons name="heart" size={26} color="#e51c23" />
                        </View>
                        <Text style={{fontSize : 16, marginLeft : 15}}>ถูกใจและบันทึก</Text>

                    </View>
                    <SimpleLineIcons name="arrow-right" size={14} color="#757575" />
                </View>
                <View style={{flexDirection : 'row',paddingLeft : 15,paddingRight : 20, paddingVertical : 10,alignItems : 'center', justifyContent : 'space-between'}}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <View style={{ height : 50, width : 50,borderRadius : 50/2, backgroundColor : "#b3e5fc", justifyContent : 'center',alignItems : 'center'}}>
                        <MaterialIcons name="comment" size={24} color="#039be5" />
                        </View>
                        <Text style={{fontSize : 16, marginLeft : 15}}>ผู้ติดตามใหม่</Text>

                    </View>
                    <SimpleLineIcons name="arrow-right" size={14} color="#757575" />
                </View>
                
                

            </View>
            <View style={{ paddingLeft: 15, paddingRight: 20, paddingVertical: 20,paddingBottom : 50}}>
                    <Text style={{ fontSize: 16 }}>ค้นพบครีเอเตอร์</Text>
                    <FlatList
                        horizontal={false}
                        data={onlineSource}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', paddingVertical: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 50 / 2 }} source={{ uri: item.profile }} />
                                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                        <Text style={{ fontSize: 16 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 11, color: '#757575', maxWidth: 250 }} numberOfLines={1} ellipsizeMode="tail">{item.personal_background}</Text>
                                        <Text style={{ fontSize: 12, color: '#757575' }}>ถูกใจ {item.total_heart} ครั้ง</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: followedState[item.id] ? 'white' : '#ec407a',
                                            paddingHorizontal: followedState[item.id] ? 9 : 27,
                                            borderRadius: 5,
                                            borderColor: 'black',
                                            borderWidth: followedState[item.id] ? 0.5 : 0,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: 5
                                        }}
                                        onPress={() => handleButtonClick(item.id)}
                                    >
                                        <Text style={{ fontSize: 14, color: followedState[item.id] ? "black" : "black" }}>
                                            {followedState[item.id] ? "กำลังติดตาม" : "ติดตาม"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()} // Ensure key is string
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default Notice;
