import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

function Search(props) {
    const [onlinePoster, setOnlinePoster] = useState([]);
    const [onlineSource, setOnlineSource] = useState([]);
    const [onlineHashtag, setOnlineHashtag] = useState([]);
    const [moreText, setMoreText] = useState("ดูเพิ่มเติม");

    const loadOnlinePoster = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/glucosejsl7/Data-source/main/poster.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            setOnlinePoster(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };
    
    const loadOnlineSource = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/glucosejsl7/Data-source/main/info.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineSource(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    const loadOnlineHashtag = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/glucosejsl7/Data-source/main/hashtag.json');
            let data = await promise.json();
            console.log("Load Hashtag Data: ", data); // Log the fetched data
            setOnlineHashtag(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };
    

    useEffect(() => {
        loadOnlinePoster();
        loadOnlineSource();
        loadOnlineHashtag();
    }, []);

    const images = onlinePoster.map(item => item.uri);

    const MoreClick = () => {
        setMoreText ("ดูเพิ่มเติม");
    };

    const handleNavigateNext = () => {
        // Add your navigation logic here
        console.log("Navigate to the next screen or perform any action");
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={props.style}>
                <SliderBox images={images} style={{ width: 450, height: 230 }} dotColor="white" inactiveDotColor="grey" dotStyle={{ width: 7, height: 7, borderRadius: 7, marginHorizontal: -10}}/>
            </View>

            <View style={{marginTop : 20}}>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : 15 ,marginBottom : 15}}>
                    <View style={{flexDirection : 'row',alignItems: 'center', justifyContent: 'space-between'}}>
                        <MaterialCommunityIcons name="fire" size={27} color="#e65100" />
                        <Text style={{fontSize : 18 , fontWeight :'bold'}}>Rising Start</Text>
                    </View>
                    <TouchableOpacity onPress={MoreClick}>
                        <Text style={{fontSize: 14,color: "grey",marginLeft: 5,}}>{moreText} &gt;</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal ={true}
                    data={onlineSource}
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({ item }) => (
                        <View style={{ flexDirection : 'column', alignItems : 'center', marginHorizontal : 15}}>
                            <Image style={{ width:  105, height:  105, borderRadius: 105/ 2, marginBottom : 10 }} source={{ uri: item.profile }} />
                            <View style={{ flexDirection : 'column', alignItems : 'center' }}>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight : 'normal' }}>{item.name}</Text>
                                <Text style={{ fontSize: 11, color: '#9e9e9e' }}>{item.follower} ผู้ติดตาม</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <FlatList
                    data={onlineHashtag}
                    renderItem={({ item }) => (
                        <View>
                            <View style={{flexDirection : 'row',alignItems: 'center', justifyContent: 'space-between', marginHorizontal : 15, marginTop : 30,marginBottom : 15}}>
                                <View style={{flexDirection : 'row'}}>
                                    <View style={{ width: 40, height: 40, borderRadius: 90, borderColor: 'grey', borderWidth: 0.5, alignSelf : 'center',justifyContent: 'center',alignItems: 'center' }}>
                                        <FontAwesome5 name="hashtag" size={16} color="black" />
                                    </View>
                                    <View style={{ flexDirection : 'column', marginHorizontal : 12}}>
                                            <Text style={{ fontSize: 17, color: 'black', fontWeight : 'normal' }}>{item.hastag}</Text>
                                            <Text style={{ fontSize: 14, color: '#9e9e9e' }}>เข้าชม {item.view} ครั้ง</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={handleNavigateNext}>
                                    <MaterialIcons name="navigate-next" size={24} color="#9e9e9e" />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginHorizontal : 3}}>
                                <FlatList
                                    horizontal={true}
                                    data={item.uri}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) => (
                                        <Image style={{ width: 130, height: 110, borderRadius: 3, marginHorizontal: 2 }} source={{ uri: item }} />
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>

                        </View>
                    )}
                keyExtractor={item => item.id}
            />
                
        </View>
    );
}

export default Search;
