import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome6, Ionicons, } from "@expo/vector-icons";
import BookStorage from "../storages/BookStorage";

export default function Comment(){
    const [key, setKey] = useState("_" + Math.random().toString(36).substring(2, 9));
    const [comment, setComment] = useState("");
    const [keepClicked, setKeepClicked] = useState(false);
    const [countKeep, setCountkeep] = useState(0);

  const handleKeepClick = () => {
    if (keepClicked) {
        setCountkeep(countKeep - 1); // Decrement count if heart is red
    } else {
        setCountkeep(countKeep + 1); // Increment count if heart is white
    }
    setKeepClicked(!keepClicked);

  };
    // Define the text to be displayed based on the count
    const keepText = countKeep === 0 ? "บันทึก" : `คนบันทึกแล้ว`;

    // Adjust the count to display a non-zero number
    const displayCount = countKeep === 0 ? "" : countKeep;

  //
  const [heartClicked, setHeartClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleHeartClick = () => {
    if (heartClicked) {
      setCount(count - 1); // Decrement count if heart is red
    } else {
      setCount(count + 1); // Increment count if heart is white
    }
    setHeartClicked(!heartClicked);
    setCount(heartClicked ? 0 : 1);
  };

  //
  const [commentClicked, setCommentClicked] = useState(false);
  const [countComment, setCountcomment] = useState(0);

  // Add state for managing comment input visibility
    const [showCommentInput, setShowCommentInput] = useState(false);

  const handleCommentClick = () => {
    if (commentClicked) {
        setCountcomment(countComment - 1); // Decrement count if heart is red
    } else {
        setCountcomment(countComment + 1); // Increment count if heart is white
    }
    setCommentClicked(!commentClicked);
    setShowCommentInput(!showCommentInput);
    setCountcomment(commentClicked ? 0 : 1);
  };

    
    //
    const [shareClicked, setShareClicked] = useState(false);
    const [countShare, setCountshare] = useState(0);
  
    const handleShareClick = () => {
      if (shareClicked) {
          setCountshare(countShare - 1); // Decrement count if heart is red
      } else {
          setCountshare(countShare + 1); // Increment count if heart is white
      }
      setShareClicked(!shareClicked);
      setCountshare(shareClicked ? 0 : 1);
    };


    




    return (
        <View style={{flexDirection : 'column', justifyContent : 'space-between' , borderTopWidth : 0.5, borderColor : '#bdbdbd' ,paddingTop : 15, paddingBottom : 40, paddingHorizontal : 20}}>
            {showCommentInput && (
                <View style={{ marginBottom : 10 }}>
                    <TextInput placeholder="แสดงความคิดเห็นตอนนี้..." multiline numberOfLines={1} style={{ backgroundColor : '#e0e0e0', paddingHorizontal: 10, paddingVertical: 8,borderRadius : 5 }}/>
                </View>
            )}
            <View style={{flexDirection : 'row', justifyContent : 'space-between' }}>
                <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                        <TouchableOpacity onPress={handleKeepClick}>
                            <Ionicons name={keepClicked ? "bookmark" : "bookmark-outline"} size={30} color={keepClicked ? "#ec407a" : "black"} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 5, marginLeft: 5 }}>{displayCount} {keepText}</Text>
                    </View>

                </View>
                <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between', marginLeft : 10}}>
                        <TouchableOpacity onPress={handleHeartClick}>
                            <Ionicons name={heartClicked ? "heart" : "heart-outline"} size={30} color={heartClicked ? "red" : "black"} />
                        </TouchableOpacity>
                        {count !== 0 && <Text style={{ fontSize: 14, fontWeight: '600', marginTop : 5, marginLeft : 5 }}>{count}</Text>}
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between', marginLeft : 10}}>
                        <TouchableOpacity onPress={handleCommentClick}>
                            <Ionicons name={commentClicked ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} size={30} color={commentClicked ? "#ec407a" : "black"} />
                        </TouchableOpacity>
                        {countComment !== 0 && <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 5, marginLeft: 5 }}>{countComment}</Text>}
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between', marginLeft : 10}}>
                        <TouchableOpacity onPress={handleShareClick}>
                            <Ionicons name={shareClicked ? "arrow-redo-sharp" : "arrow-redo-outline"} size={30} color={shareClicked ? "#ec407a" : "black"} />
                        </TouchableOpacity>
                        {countShare !== 0 &&<Text style={{ fontSize: 14, fontWeight: '600', marginTop : 5, marginLeft : 5 }}>{countShare}</Text>}
                    </View>
                    
                </View>
            </View>
            
        </View>
        
    )
}
