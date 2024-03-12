import React from "react";
import { Image, Text, View } from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome6, FontAwesome, AntDesign } from "@expo/vector-icons";


export default function MindfulLayout() {
    return (
        <View style={{alignContent : 'flex-start', marginTop : 10}}>
            <View style={{flexDirection : 'row', justifyContent : 'space-between' ,marginBottom : 10}}>
                <Image style={{ width : 90 , height : 35 }} source={require("../Picture/logo2.png")} />
                <View style={{ flexDirection : 'row', marginTop : 2}}>
                    <Text style={{ color : 'black' , fontSize : 18}}>ติดตาม</Text>
                    <Text style={{ color : 'black', marginLeft : 10 , fontSize : 18, borderBottomWidth : 2}}>สำหรับคุณ</Text>
                </View>
                <FontAwesome6 name="magnifying-glass" size={24} color="black" style={{marginTop : 5}} />

            </View>
            <View style={{ flexDirection : 'row', justifyContent : 'space-between', alignContent : 'flex-start'}}>
                <View style={{ flexDirection : 'row', backgroundColor :'black', padding : 13 , borderRadius : 15 }}>
                    <Feather name="grid" size={20} color="white" />
                    <Text style={{ color : 'white', marginLeft : 5}}>ทั้งหมด</Text>
                </View>
                <View style={{ flexDirection : 'row', backgroundColor :'white', borderWidth : 2, padding : 10 , borderRadius : 15, justifyContent : 'space-between'}}>
                    <MaterialCommunityIcons name="lipstick" size={24} color="black" />
                </View>
                <View style={{ flexDirection : 'row', backgroundColor :'white', borderWidth : 2, padding : 10 , borderRadius : 15, justifyContent : 'space-between'}}>
                    <Ionicons name="shirt-outline" size={24} color="black" />
                </View>
                <View style={{ flexDirection : 'row', backgroundColor :'white', borderWidth : 2, padding : 10 , borderRadius : 15, justifyContent : 'space-between'}}>
                    <Ionicons name="fast-food-outline" size={24} color="black" />
                </View>
                <View style={{ flexDirection : 'row', backgroundColor :'white', borderWidth : 2, padding : 10 , borderRadius : 15, justifyContent : 'space-between'}}>
                    <MaterialCommunityIcons name="lotion-outline" size={24} color="black" />
                </View>
            </View>
            <View style={{flexDirection:"row" ,justifyContent:"space-between" }}>
                        <View style={{flexDirection:"column",marginTop:10,justifyContent:"space-between" , }}>
                            <View style={{backgroundColor:"white", height:280,width:195,borderRadius:15 , marginTop : 15 , shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                <Image style={{ width : 185 , height : 200 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/1.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>sexy look warm tone</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf2.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>Nicole's</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 40}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>5678</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:"white", height:250,width:195,borderRadius:15, marginTop : 15 , shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7}}>
                                <Image style={{ width : 185 , height : 170 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/3.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>เล็บเจลแสนสวย</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf5.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>Shreky_g</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 35}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>1220</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:"white", height:270,width:195,borderRadius:15, marginTop : 15, shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7}}>
                                <Image style={{ width : 185 , height : 190 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/2.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>beach look</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf8.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>Yunijay_</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 40}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>1098</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:"white", height:290,width:195,borderRadius:15, marginTop : 15, shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7}}>
                                <Image style={{ width : 185 , height : 210 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/7.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>พิกัด! สายคล้องกระเป๋า</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf6.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>Beannyjoja</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 30}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>123</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"column",marginTop:10,justifyContent:"space-between" , }}>
                            <View style={{backgroundColor:"white", height:250,width:195,borderRadius:15 , marginTop : 15, shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7}}>
                                <Image style={{ width : 185 , height : 170 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/5.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>HOW TO แฟนรักแฟนหลง</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf7.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>Puddle.girl</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 25}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>7895</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:"white", height:290,width:195,borderRadius:15, marginTop : 15, shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7}}>
                                <Image style={{ width : 185 , height : 210 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/8.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>อัพเดท 60>52 :)</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf3.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>Mupa.T</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 40}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>2856</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:"white", height:280,width:195,borderRadius:15, marginTop : 15, shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7}}>
                                <Image style={{ width : 185 , height : 180 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/6.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>ถ่ายรูปกับน้ำแข็ง ยังไงให้น่ารัก</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf1.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>pancattypia</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 20}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>5634</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:"white", height:270,width:195,borderRadius:15, marginTop : 15, shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 2, elevation: 7}}>
                                <Image style={{ width : 185 , height : 190 , margin: 5 ,borderTopLeftRadius : 10, borderTopRightRadius : 10}} source={require("../Picture/4.jpg")} />
                                <Text style={{ fontSize : 16, margin : 5, marginLeft : 10}}>ขวัญใจไฮโซ</Text> 
                                <View style={{ flexDirection : 'row', marginLeft : 10, marginTop : 5}}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25 / 2 }} source={require("../Picture/pf4.jpg")} />
                                    <View style={{ flexDirection : 'row', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 13, color: "gray" , marginTop : 3 }}>catandcow</Text>
                                        <View style={{ flexDirection : 'row' , marginTop : 3 , paddingLeft : 25}}>
                                            <AntDesign name="hearto" size={13} color="grey" margin={3}/>
                                            <Text style={{ color: "gray" }}>2341</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

        </View>
    );
}
