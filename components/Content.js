import React, { useState } from "react";
import {Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { Button } from 'react-native-paper';

export default function Content() {
  const [images, setImages] = useState([
    require("../Picture/8.jpg"),
    require("../Picture/8-1.jpg"),
    require("../Picture/8-2.jpg"),
    require("../Picture/8-3.jpg"),
  ]);
//
  const [buttonText, setButtonText] = useState("ติดตาม");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    // Toggle button text between "ติดตาม" and "กำลังติดตาม"
    setButtonText(buttonText === "ติดตาม" ? "กำลังติดตาม" : "ติดตาม");
    // Toggle button clicked state
    setButtonClicked(!buttonClicked);
  };
//
    const [searchText, setSearchText] = useState("ลดน้ำหนัก");

    const SearchClick = () => {
    // Change text color upon clicking the button
    setSearchText("ลดน้ำหนัก");
    };
//
    const [replyText, setReplyText] = useState("ตอบกลับ");

    const ReplyClick = () => {
    // Change text color upon clicking the button
    setReplyText("ตอบกลับ");
    };
//

    const [heartStates, setHeartStates] = useState([
        { clicked: false, count: 0 },
        { clicked: false, count: 0 },
        { clicked: false, count: 0 },
        { clicked: false, count: 0 },
        // Add more objects for each heart as needed
    ]);

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



    return (
        <View style={{alignContent : 'flex-start'}}>

            <SliderBox images={images} style={{width : 450, height: 550}} dotColor="black" inactiveDotColor="grey" dotStyle={{ width: 10, height: 10, borderRadius: 10, marginHorizontal: 0,}}/>
            <View style={{ flexDirection : 'row', marginHorizontal : 15, marginTop : 20 , justifyContent : 'space-between'}}>
                <View style={{ flexDirection : 'row', marginLeft : 5, marginTop : 5}}>
                    <Image style={{ width: 35, height: 35, borderRadius: 35 / 2 }} source={require("../Picture/pf3.jpg")} />
                    <Text style={{ fontSize: 16, color: "black" , marginTop : 5, marginLeft : 10 }}>Mupa.T</Text>
                </View>
                <Button style={{ backgroundColor : buttonClicked ? 'white' : '#ec407a', paddingHorizontal : buttonClicked ? 5 : 23, borderRadius : 5, borderColor: 'black',borderWidth: buttonClicked ? 0.5 : 0}} onPress={handleButtonClick}>
                    <Text style={{  fontSize: 16,color: buttonClicked ? "black" : "black"}}>{buttonText}</Text>
                </Button>
            </View>
            <View style={{ flexDirection : 'column' , marginVertical : 15, marginHorizontal : 20}}>
                <Text style={{ fontSize : 20 , fontWeight : 'bold' }}>อัพเดท 60>52 :)</Text>
                <Text style={{fontSize : 16 ,marginTop : 10}}>ปัญหาโลกแตกสำหรับสาวๆหลายคนก็คงจะหนีไม่พ้นเรื่อง ลดน้ำหนัก เราก็เป็นคนนึงที่มีปัญหาเรื่องนี้มาโดยตลอด ลอง วิธีผิดๆมาก็เยอะ เราเป็นคนน้ำหนักขึ้นง่าย และดั๊นนเป็นคนที่ ชอบกินมากๆซะด้วยสิ ยิ่งช่วงโควิดทำให้เราระบาย ความเครียดด้วยการกินผลปรากฏว่าน้ำหนักเราขึ้นมาถึง 60 กิโล เป็นตัวเลขที่พีคที่สุดในชีวิต แล้วเราทำยังไงถึง ลดลงมาได้ 8 กิโล วันนี้มาเฉลยให้ในเทรดนี้ให้แล้วว</Text>
                <Text style={{fontSize : 16 ,marginTop : 10}}>1.การกินสำคัญที่สุด!</Text>
                <Text style={{fontSize : 16 }}>จริงๆการลดน้ำหนักด้วยวิธีกินมาหลายวิธีมาก แต่เราจะมา แชร์ในส่วนที่เราทำแล้วเห็นผลน้า ส่วนตัวเราเน้นการกินแบบ 'เลือกกิน' คือเน้นอาหารที่มีประโยชน์ ไม่ทอด ไม่มัน ไม่กิน อาหารแปรรูป ลดน้ำตาล เน้นโปรตีน กินให้ครบ 5หมู่ เราจะ คุมอาหาร 5วัน จันทร์-ศุกร์ แล้วมี cheat day ให้ตัวเองคือ เสาร์-อาทิตย์ ซึ่งเราก็จะกินแบบจัดเต็ม ไม่ห่วงแคลอยากกิ นอะไรก็กิน ตามใจปากแบบสุด แต่ในวัน cheat day เราจะ ออกกำลังกายหนักหน่อยเพื่อทดแทนเอา</Text>
                <Text style={{fontSize : 16 ,marginTop : 10}}>2.ออกกำลังไม่ต้องหนัก</Text>
                <Text style={{fontSize : 16 }}>สำหรับเราถ้ายิ่งออกกำลังกายหนักจะยิ่งหิว และเราไม่ได้ ต้องการสร้างกล้ามเนื้อ เพราะฉะนั้นเราจะออกกำลังกายเพื่อ ให้กระชับ เราจะออกกำลังกายทุกวัน วันละ 15-30นาที เน้น คาดิโอเป็นหลัก วิดิโอก็ดูตามยูทูปเบอร์สายออกกำลังกาย ได้เลย สำหรับคนขี้เกียจออกกำลังกายและเหนื่อยง่ายแบบ เราแบบเราแนะนำเบเบ้ กับ emi wong ท่าของเค้าจะ สามารถทำตามได้ง่ายและไม่ทรมานมาก แต่สำหรับในวัน cheat dayที่กินเกินปริมาณเราจะออกประมาณ 1ชั่วโมง-1ชั่วโมงครึ่ง (พยายามเบิร์นให้ได้ 500+ แคล)</Text>
                <Text style={{fontSize : 16 ,marginTop : 10}}>3.กินน้ำเยอะๆๆๆ</Text>
                <Text style={{fontSize : 16 }}>การกินน้ำก็เป็นอีกอย่างที่สำคัญมากกและมักถูกมองข้าม เมื่อก่อนเราเป็นคนกินน้ำน้อยมากๆเหมือนกัน แต่พอหลังจาก ได้มาลองกินน้ำวันละ 2ลิตรแล้วรู้สึกชีวิตเปลี่ยนเป็นนอกจาก น้ำจะช่วยเรื่องระบบการขับถ่ายที่ดีขึ้นแล้ว น้ำยังช่วยเรื่องลด บวมได้ดีมากๆ วิธีง่ายๆเลย ใครดึกๆตบะแตกชอบแอบซัด มาม่า เราสามาถขจัดโซเดียมได้ง่ายๆโดยการดื่มน้ำเยอะๆ</Text>
                <Text style={{fontSize : 16 ,marginTop : 10}}>4.ห้ามกดดันตัวเองว่าต้องลดให้ได้เท่านี้ </Text>
                <Text style={{fontSize : 16 }}>ในเวลาเท่านี้ การกดดันตัวเองเช่น ชั้นจะต้องลดให้ได้ 4โลภายในเดือน หน้า!! เป็นการกดดันตัวเองเกินไป อาจจะทำให้เราล้มเลิก ก่อนได้ การลดน้ำหนัก 11กิโลของเรานั้นใช้เวลาเป็นปี เพราะ เราพยายามทำให้มันเป็นส่วนนึงในชีวิตประจำวัน เช่น การ กิน ถ้าเรากินแย่มาโดยตลอดจะมาหักดับกินคลีนจัดๆภายใน วันเดียวมันก็จะทำได้แค่แปปเดียว</Text>
                <Text style={{fontSize : 16 ,marginTop : 10}}>สรุป Key สำคัญสำหรับเราในการลดน้ำหนักครั้งนี้คือคำ ว่า 'ค่อยๆเป็นค่อยๆไป' ค่ะ พยายามทำให้ทุกอย่างกลายมา เป็น everyday routine ของเรา แรกๆอาจจะยากหน่อย ของหวานน้ำหวานทุกวิ สำหรับการกิน จากคนที่กินของหวานน้ำหวานทุกวัน อาจจะ ลดเหลือ 3-4วันต่อสัปดาห์ ถ้าวันไหนไม่ไหวแล้ววว อยาก กินก็กินไปเลยไม่ต้องฝืน วันไหนออกกำลังกายแล้วเหนื่อยก็ พักค่ะ ไม่ต้องรู้สึกแย่ว่าทำไมเราออกแค่ 10นาทีก็เหนื่อยแล้ว ร่างกายต้องใช้เวลาปรับตัว พอหลังๆร่างกายก็จะเริ่มชิน ของ หวานก็ลดเหลืออาทิตย์ละ 1-2ครั้ง ออกกำลังกายก็เพิ่มเวลา ขึ้นมา ทุกคนจะรู้สึกว่าร่างกายสามารถทำได้เองโดยไม่รู้สึกฝืนเลย</Text>
                <Text style={{fontSize : 16 ,marginTop : 10}}>ผลของการลดน้ำหนักแบบนี้คือเราสามารถ maintain น้ำ หนักเราได้มาหลายเดือนแล้ว จากที่เคยโยโย่เพราะหักดิบกิน คลีน เป้าหมายในปีนี้ของเราคือ 45kg ทุกคนช่วยเป็นกำลัง ใจให้เราด้วยน้า เราก็จะเป็นกำลังใจให้ทุกคนที่อยากลดน้ำ หนักเหมือนกัน สู้ไปพร้อมๆค่า เราจะมีหุ่นที่ดีและสุขภาพดีด้วยกันนี้</Text>
                <Text style={{fontSize : 16 ,marginTop : 10 ,color : '#ec407a' }}>#ติดเทรนด์ #ลดความอ้วน #ลดน้ำหนัก #ลดน้ำหนักด้วยตัวเอง #เข้าครัวกับMindLife #สายสุขภาพ #ลดหุ่น #ออกกำลังกาย</Text>
                <Text style={{fontSize : 16 ,marginTop : 10 ,color : 'grey'}}>แก้ไขล่าสุด: 2565-08-10</Text>
            </View>
            <View style={{ flexDirection : 'row', borderWidth : 0.5, borderColor : '#e0e0e0' , borderRadius : 5, paddingHorizontal : 10 ,paddingVertical :5, marginLeft : 20 , width : 170 }}>
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
        
    );
}


