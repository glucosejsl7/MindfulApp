import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image, FlatList, Dimensions, StyleSheet } from "react-native";
import { Feather, Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from "react-native-paper";

function ProfileAccount(props) {
    const [onlineContent, setOnlineContent] = useState(null);
    const [activeTab, setActiveTab] = useState("grid-on");

    useEffect(() => {
        const loadOnlineContent = async () => {
            try {
                let promise = await fetch('https://raw.githubusercontent.com/glucosejsl7/Data-source/main/info.json');
                let data = await promise.json();
                console.log("Load Data : ", data);
                const content = data.find(item => item.id === "2");
                console.log("Content with ID 2:", content);
                setOnlineContent(content);
            } catch (error) {
                console.log("ERROR : ", error);
            }
        };
        loadOnlineContent();
    }, []);

    if (!onlineContent) {
        return <ActivityIndicator />;
    }

    const handleOnlineContentPress = (item) => {
        // Handle click on online mindful item
        console.log("Clicked online mindful item:", item);
    }

    const clickAdd = () => {
        // Add your navigation logic here
        console.log("Navigate to Add");
    };

    const clickSetting = () => {
        // Add your navigation logic here
        console.log("Navigate to Add");
    };

    const editProfile = () => {
        // Add your navigation logic for editing profile here
        console.log("Navigate to Edit Profile");
    };

    const navigateBack = () => {
        // Add your navigation logic for navigating back here
        console.log("Navigate back");
    };

    const handleTabPress = (tabName) => {
        setActiveTab(tabName); // Update active tab when a tab is pressed
    };

    return (
        <View style={{ flex: 1, flexDirection: "column", marginTop: 70, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <Text style={{ fontSize: 18 }}>@{onlineContent.username}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={clickAdd}>
                        <Feather name="plus-square" size={26} color="black" style={{ marginRight: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={clickSetting}>
                        <Feather name="settings" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 15 }}>
                {onlineContent.profile && <Image style={{ width: 105, height: 105, borderRadius: 105 / 2, marginBottom: 10 }} source={{ uri: onlineContent.profile }} />}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20 }}>1</Text>
                        <Text style={{ fontSize: 14, color: '#9e9e9e' }}>กำลังติดตาม</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20 }}>{onlineContent.follower}</Text>
                        <Text style={{ fontSize: 14, color: '#9e9e9e' }}>ผู้ติตาม</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20 }}>1</Text>
                        <Text style={{ fontSize: 14, color: '#9e9e9e' }}>ถูกใจและบันทึก</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>{onlineContent.name}</Text>
                <Text style={{ fontSize: 14, color: 'grey', marginTop: 8 }}>เขียนประวัติเพื่อช่วยให้คนอื่นค้นพบคุณ</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15 }}>
                <TouchableOpacity onPress={editProfile}>
                    <View style={{ height: 45, width: 365, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>แก้ไขโปรไฟล์</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateBack}>
                    <View style={{ height: 45, width: 45, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="arrow-redo-outline" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 0 }}>
                <TouchableOpacity onPress={() => handleTabPress('grid-on')}>
                    <View style={[styles.tabContainer, activeTab === 'grid-on' && styles.activeTab]}>
                        <MaterialIcons name="grid-on" size={24} color={activeTab === 'grid-on' ? 'black' : 'gray'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress('bookmark-outline')}>
                    <View style={[styles.tabContainer, activeTab === 'bookmark-outline' && styles.activeTab]}>
                        <Ionicons name="bookmark-outline" size={24} color={activeTab === 'bookmark-outline' ? 'black' : 'gray'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress('heart-outline')}>
                    <View style={[styles.tabContainer, activeTab === 'heart-outline' && styles.activeTab]}>
                        <Ionicons name="heart-outline" size={24} color={activeTab === 'heart-outline' ? 'black' : 'gray'} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#f5f5f5'}}>
                <FlatList
                    data={[onlineContent]} // Wrap onlineContent in an array
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleOnlineContentPress(item)}>
                            <View style={{ backgroundColor: "white", height: 310, width: (Dimensions.get("screen").width - 30) / 2 - 15, borderRadius: 15, marginTop: 10, marginLeft: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                <Image source={{ uri: item.uri[0] }} style={{ width: (Dimensions.get("screen").width - 30) / 2.0 - 25, height: '70%', margin: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                <View style={{ flexDirection: 'column', width: (Dimensions.get("screen").width - 30) / 2.0 - 35, marginTop: 5, marginHorizontal: 10, justifyContent: 'space-between', height: 70 }}>
                                    <Text style={{ fontSize: 16 }}>{item.title}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={{ uri: item.profile }} style={{ width: 25, height: 25, borderRadius: 25 / 2 }} />
                                            <Text style={{ fontSize: 13, color: "gray", marginTop: 3, marginLeft: 5 }}>{item.username}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3} />
                                            <Text style={{ color: "gray" }}>{item.total_heart}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={{ justifyContent: 'flex-start' }} // Align items to the left
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2.5,
        borderBottomColor: 'black',
        paddingBottom: 10,
        width: 30,
    },
});

export default ProfileAccount;
