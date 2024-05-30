import React, { useEffect, useState } from "react";
import {ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { Button } from 'react-native-paper';

export default function HomeForYouDetail(props) {
    const [onlineContent, setOnlineContent] = useState(null);
    const [buttonText, setButtonText] = useState("ติดตาม");
    const [buttonClicked, setButtonClicked] = useState(false);
    const [searchText, setSearchText] = useState("ลดน้ำหนัก");
    const [replyText, setReplyText] = useState("ตอบกลับ");
    const [heartStates, setHeartStates] = useState([
        { clicked: false, count: 0 },
        { clicked: false, count: 0 },
        { clicked: false, count: 0 },
        { clicked: false, count: 0 },
    ]);

    useEffect(() => {
        const loadOnlineContent = async () => {
            try {
                let promise = await fetch('https://raw.githubusercontent.com/glucosejsl7/Data-source/main/info.json');
                let data = await promise.json();
                console.log("Load Data : ", data);
                const content = data.find(item => item.id === "6");
                console.log("Content with ID 6:", content);
                setOnlineContent(content);
            } catch(error) {
                console.log("ERROR : ", error);
            }
        };
        loadOnlineContent();
    }, []);


    const handleButtonClick = () => {
        setButtonText(buttonText === "ติดตาม" ? "กำลังติดตาม" : "ติดตาม");
        setButtonClicked(!buttonClicked);
    };

    const SearchClick = () => {
        setSearchText("ลดน้ำหนัก");
    };

    const ReplyClick = () => {
        setReplyText("ตอบกลับ");
    };

    const handleHeartClick = (index) => {
        setHeartStates((prevHeartStates) => {
            const updatedHeartStates = [...prevHeartStates];
            updatedHeartStates[index] = {
                ...updatedHeartStates[index],
                clicked: !updatedHeartStates[index].clicked,
                count: updatedHeartStates[index].clicked
                    ? updatedHeartStates[index].count - 1
                    : updatedHeartStates[index].count + 1,
            };
            return updatedHeartStates;
        });
    };

    if (!onlineContent) {
        return <ActivityIndicator />;
    }

    const images = onlineContent.uri.map(uri => ({ uri }));

    return (
        <View style={{alignContent: 'flex-start'}}>
            <View >
            <SliderBox images={images} style={{ width: 450, height: 550 }} dotColor="black" inactiveDotColor="grey" dotStyle={{ width: 10, height: 10, borderRadius: 10, marginHorizontal: 0 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 5 }}>
                    {onlineContent.profile && <Image style={{ width: 35, height: 35, borderRadius: 35 / 2 }} source={{ uri: onlineContent.profile }} />}
                        <Text style={{ fontSize: 16, color: "black", marginTop: 5, marginLeft: 10 }}>{onlineContent.username}</Text>
                    </View>
                    <Button style={{ backgroundColor: buttonClicked ? 'white' : '#ec407a', paddingHorizontal: buttonClicked ? 5 : 23, borderRadius: 5, borderColor: 'black', borderWidth: buttonClicked ? 0.5 : 0 }} onPress={handleButtonClick}>
                        <Text style={{ fontSize: 16, color: buttonClicked ? "black" : "black" }}>{buttonText}</Text>
                    </Button>
                </View>
                <View style={{ flexDirection: 'column', marginVertical: 15, marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{onlineContent.title}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{onlineContent.description}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, color: '#ec407a' }}>{onlineContent.hastag}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, color: 'grey' }}>แก้ไขล่าสุด: {onlineContent.last_edited}</Text>
                </View>
            

l
            <View stye={{ flexDirection : 'row', borderWidth : 0.5, borderColor : '#e0e0e0' , borderRadius : 5, paddingHorizontal : 10 ,paddingVertical :5, marginLeft : 20 , width : 170 }}>
                <FontAwesome6 name="magnifying-glass" size={12} color="black" style={{ marginTop : 4}} />
                <Text style={{marginLeft : 5}}>Search : </Text>
                <TouchableOpacity onPress={SearchClick}>
                    <Text style={{fontSize: 14,color: "#ec407a",marginLeft: 5,}}>{searchText} &gt;</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection : 'column', marginHorizontal : 20, marginVertical : 25}}>
                <Text style={{fontSize : 16, fontWeight : '600'}}>4 ความคิดเห็น</Text>
                {/* ก้อน 1 */}
                <View style={{ flexDirection : 'column'}}>
                    {/* comment หลัก */}
                    <View style={{flexDirection : 'row', marginTop : 25, justifyContent : 'space-between'}}>
                        <View style={{ flexDirection : 'row', marginLeft : 5}}>
                            <Image style={{ width: 35, height: 35, borderRadius: 35 / 2 }} source={require("../Picture/pf4.jpg")} />
                            <View style={{ flexDirection : 'column', marginTop :0, marginLeft : 10 }}>
                                <Text style={{ fontSize: 13, color: "grey" , marginTop :0}}>Nunaaiai</Text>
                                <Text style={{ fontSize: 16, color: "black" , marginTop :3, flexWrap: 'wrap', width: '95%',lineHeight: 22, width : 280  }}>ขออนุญาตถามค่ะ สูงเท่าไหร่คะ</Text>
                                <View style={{ flexDirection : 'row',marginTop :3 }}>
                                    <Text style={{fontSize : 13 ,color : 'grey',marginTop :3}}>2565-08-11</Text>
                                    <TouchableOpacity onPress={ReplyClick}>
                                        <Text style={{fontSize: 13 ,color: "grey",marginLeft: 20, marginTop : 3, fontWeight : 'bold'}}>{replyText} </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection : 'column', marginVertical : 7, justifyContent: 'flex-end'}}>
                        <View style={{ width: 35, height: 35, borderRadius: 90, borderColor: 'grey', borderWidth: 0.5, justifyContent: 'space-between', paddingLeft: 6, paddingTop: 6 }}>
                        <TouchableOpacity onPress={() => handleHeartClick(0)}>
                            <Ionicons name={heartStates[0].clicked ? "heart" : "heart-outline"} size={22} color={heartStates[0].clicked ? "red" : "black"} />
                        </TouchableOpacity>
                        </View>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'grey', marginHorizontal: 13, marginTop: 3 }}>{heartStates[0].count}</Text>
                        </View>
                    </View>
                    {/* comment ย่อย1 */}
                    <View style={{flexDirection : 'row', marginTop : 10, justifyContent : 'space-between' , marginLeft : 45}}>
                        <View style={{ flexDirection : 'row', marginLeft : 5}}>
                            <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf3.jpg")} />
                            <View style={{ flexDirection : 'column', marginTop :0, marginLeft : 10 }}>
                                <View style={{flexDirection : 'row'}}>
                                    <Text style={{ fontSize: 13, color: "grey" , marginTop :0}}>Nunaaiai</Text>
                                    <View style={{ backgroundColor :'#b3e5fc', paddingHorizontal : 5, paddingVertical :1, borderRadius : 2 , marginTop : -1, marginLeft : 5 }}>
                                        <Text style={{color : '#039be5', fontWeight : 'bold',fontSize: 13 }}>ผู้สร้าง</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 16, color: "black" , marginTop :3, flexWrap: 'wrap', width: '95%',lineHeight: 22, width : 280 }}>163 ค่ะ</Text>
                                <View style={{ flexDirection : 'row',marginTop :3 }}>
                                    <Text style={{fontSize : 13 ,color : 'grey',marginTop :3}}>2565-08-11</Text>
                                    <TouchableOpacity onPress={ReplyClick}>
                                        <Text style={{fontSize: 13 ,color: "grey",marginLeft: 20, marginTop : 3, fontWeight : 'bold'}}>{replyText} </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection : 'column', marginVertical : 7, justifyContent: 'flex-end'}}>
                        <View style={{ width: 35, height: 35, borderRadius: 90, borderColor: 'grey', borderWidth: 0.5, justifyContent: 'space-between', paddingLeft: 6, paddingTop: 6 }}>
                        <TouchableOpacity onPress={() => handleHeartClick(1)}>
                            <Ionicons name={heartStates[1].clicked ? "heart" : "heart-outline"} size={22} color={heartStates[1].clicked ? "red" : "black"} />
                        </TouchableOpacity>
                        </View>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'grey', marginHorizontal: 13, marginTop: 3 }}>{heartStates[1].count}</Text>
                        </View>
                    </View>
                </View>

                {/* ก้อน 2 */}
                <View style={{ flexDirection : 'column'}}>
                    {/* comment หลัก */}
                    <View style={{flexDirection : 'row', marginTop : 25, justifyContent : 'space-between'}}>
                        <View style={{ flexDirection : 'row', marginLeft : 5}}>
                            <Image style={{ width: 35, height: 35, borderRadius: 35 / 2 }} source={require("../Picture/pf4.jpg")} />
                            <View style={{ flexDirection : 'column', marginTop :0, marginLeft : 10 }}>
                                <Text style={{ fontSize: 13, color: "grey" , marginTop :0}}>Romo.girl7</Text>
                                <Text style={{ fontSize: 16, color: "black" , marginTop :3 , flexWrap: 'wrap', width: '95%',lineHeight: 22, width : 280 }}>มีประโยชน์มาก ๆ ต้องทำให้ได้บ้าง!</Text>
                                <View style={{ flexDirection : 'row',marginTop :3 }}>
                                    <Text style={{fontSize : 13 ,color : 'grey',marginTop :3}}>2565-08-11</Text>
                                    <TouchableOpacity onPress={ReplyClick}>
                                        <Text style={{fontSize: 13 ,color: "grey",marginLeft: 20, marginTop : 3, fontWeight : 'bold'}}>{replyText} </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection : 'column', marginVertical : 7, justifyContent: 'flex-end'}}>
                        <View style={{ width: 35, height: 35, borderRadius: 90, borderColor: 'grey', borderWidth: 0.5, justifyContent: 'space-between', paddingLeft: 6, paddingTop: 6 }}>
                        <TouchableOpacity onPress={() => handleHeartClick(2)}>
                            <Ionicons name={heartStates[2].clicked ? "heart" : "heart-outline"} size={22} color={heartStates[2].clicked ? "red" : "black"} />
                        </TouchableOpacity>
                        </View>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'grey', marginHorizontal: 13, marginTop: 3 }}>{heartStates[2].count}</Text>
                        </View>
                    </View>
                    {/* comment ย่อย1 */}
                    <View style={{flexDirection : 'row', marginTop : 10, justifyContent : 'space-between' , marginLeft : 45}}>
                        <View style={{ flexDirection : 'row', marginLeft : 5}}>
                            <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf3.jpg")} />
                            <View style={{ flexDirection : 'column', marginTop :0, marginLeft : 10 }}>
                                <View style={{flexDirection : 'row'}}>
                                    <Text style={{ fontSize: 13, color: "grey" , marginTop :0}}>Nunaaiai</Text>
                                    <View style={{ backgroundColor :'#b3e5fc', paddingHorizontal : 5, paddingVertical :1, borderRadius : 2 , marginTop : -1, marginLeft : 5 }}>
                                        <Text style={{color : '#039be5', fontWeight : 'bold',fontSize: 13 }}>ผู้สร้าง</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 16, color: "black" , marginTop :3, flexWrap: 'wrap', width: '95%',lineHeight: 22, width : 280  }}>ดีใจที่ได้แชร์ประสบการณ์ดี ๆ นะคะ หัวใจค่ะ</Text>
                                <View style={{ flexDirection : 'row',marginTop :3 }}>
                                    <Text style={{fontSize : 13 ,color : 'grey',marginTop :3}}>2565-08-11</Text>
                                    <TouchableOpacity onPress={ReplyClick}>
                                        <Text style={{fontSize: 13 ,color: "grey",marginLeft: 20, marginTop : 3, fontWeight : 'bold'}}>{replyText} </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection : 'column', marginVertical : 7, justifyContent: 'flex-end'}}>
                            <View style={{ width: 35, height: 35, borderRadius: 90, borderColor: 'grey', borderWidth: 0.5, justifyContent: 'space-between', paddingLeft: 6, paddingTop: 6 }}>
                                <TouchableOpacity onPress={() => handleHeartClick(3)}>
                                    <Ionicons name={heartStates[3].clicked ? "heart" : "heart-outline"} size={22} color={heartStates[3].clicked ? "red" : "black"} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'grey', marginHorizontal: 13, marginTop: 3 }}>{heartStates[3].count}</Text>
                        </View>
                    </View>
                </View>

            </View>
           </View> 
        </View>
        
    );
}


