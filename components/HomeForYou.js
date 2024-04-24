import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome6, FontAwesome, AntDesign,Entypo,Fontisto } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList } from 'react-native'

export default function HomeForYou(props) {

    const category = [ 
        { "num": "1","iconFamily":"Feather", "iconName": "grid" ,"Name" : "ทั้งหมด" },
        { "num": "2","iconFamily":"MaterialCommunityIcons", "iconName": "lipstick","Name" : "บิวตี้"   }, 
        { "num": "3","iconFamily":"MaterialCommunityIcons", "iconName": "lotion-outline","Name" : "สกินแคร์"  },
        { "num": "4","iconFamily":"Ionicons", "iconName": "shirt-outline" ,"Name" : "แฟชั่น"  },
        { "num": "5","iconFamily":"Ionicons", "iconName": "fast-food-outline","Name" : "ร้านอาหาร"  }, 
        { "num": "6","iconFamily":"MaterialIcons", "iconName": "pets","Name" : "สัตว์เลี้ยง"  },
        { "num": "7","iconFamily":"MaterialIcons", "iconName": "health-and-safety","Name" : "สุขภาพ"  },
        { "num": "8","iconFamily":"Entypo", "iconName": "camera","Name" : "ถ่ายรูป"  },
        { "num": "9","iconFamily":"FontAwesome", "iconName": "home","Name" : "การแต่งบ้าน"  },
        { "num": "10","iconFamily":"Fontisto", "iconName": "film","Name" : "หนังและซีรีส์"  },

        
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const getIconComponent = (iconFamily, iconName) => {
        switch(iconFamily) {
            case 'Feather':
                return Feather;
            case 'MaterialCommunityIcons':
                return MaterialCommunityIcons;
            case 'Ionicons':
                return Ionicons;
            case 'AntDesign':
                return AntDesign;
            case 'MaterialIcons':
                return MaterialIcons;
            case 'Entypo':
                return Entypo;
            case 'FontAwesome':
                return FontAwesome;
            case 'Fontisto':
                return Fontisto;
            default:
                return null;
        }
    }

    const handleCategoryPress = (index) => {
        setActiveIndex(index);
    }

    const screenWidth = Dimensions.get("screen").width;
    const [onlineMindful, setOnlineMindful] = useState([]);
    const loadOnlineMindful = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/glucosejsl7/Data-source/main/info.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineMindful(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineMindful();
    }, []);

    const [activeTab, setActiveTab] = useState("ติดตาม");

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    }

    const handleOnlineMindfulPress = (item) => {
        // Handle click on online mindful item
        console.log("Clicked online mindful item:", item);
    }

    return (
        <View style={props.style}>
        <View style={{alignContent : 'flex-start', paddingTop : 10, marginBottom :120, backgroundColor :"white"}}>
            <View style={{ flexDirection : 'row', justifyContent : 'space-between', alignContent : 'flex-start'}}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                data={category}
                renderItem={({ item, index }) => {
                    const IconComponent = getIconComponent(item.iconFamily, item.iconName);
                    if(IconComponent) {
                        return (
                            <TouchableOpacity style={{ flexDirection : 'row', justifyContent : 'space-between', alignContent : 'flex-start'}}
                                
                                onPress={() => handleCategoryPress(index)}
                            >
                                <View style={{ flexDirection : 'row', backgroundColor : activeIndex === index ? '#ec407a' : 'white', padding : 12 , borderRadius : 15, borderWidth : 1.5, marginHorizontal : 10, marginVertical : 5, borderColor :activeIndex === index ? '#ec407a' : 'black' }}>
                                    <IconComponent name={item.iconName} size={activeIndex === index ? 20 : 24} color='black' />
                                    {activeIndex === index && <Text style={{ color : 'black', marginLeft : 5, fontSize : 16}}>{item.Name}</Text>}
                                </View>
                            </TouchableOpacity>
                        );
                    } else {
                        return null;
                    }
                }}
                keyExtractor={item => item.id}
            />
            </View>


        
            <FlatList
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                data={ onlineMindful }
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        const uriToShow = Array.isArray(item.uri) ? item.uri[0] : item.uri; 
                        return (
                            <TouchableOpacity onPress={() => handleOnlineMindfulPress(item)}>
                            <View style={{backgroundColor:"white", height:310,width: screenWidth / 2 - 15,borderRadius:15 , marginTop : 10, shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                <Image source={{ uri: uriToShow }} style={{ width: Dimensions.get("screen").width / 2.0 - 25, height : '70%' , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}}  />
                                <View style={{flexDirection : 'column', width: Dimensions.get("screen").width / 2.0 - 35, marginTop : 5, marginHorizontal : 10,justifyContent : 'space-between' ,height : 70}}>
                                    <Text style={{ fontSize : 16}}>{item.title}</Text> 
                                    <View style={{ flexDirection : 'row' ,justifyContent : 'space-between',}}>
                                        <View style={{ flexDirection : 'row' }}>
                                            <Image source={{uri: item.profile}} style={{ width: 25, height: 25, borderRadius: 25 / 2 }}  />
                                            <Text style={{ fontSize: 13, color: "gray" , marginTop : 3, marginLeft : 5 }}>{item.username}</Text>
                                        </View>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 }}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>{item.total_heart}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                            

                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
        </View>
    );
}
