import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";


export default function CommentWrapper() {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    setShowCommentInput(true);
  };

  const handleCommentInputChange = (text) => {
    setCommentText(text);
  };

  return (
    <View>
      {/* Comment component */}
      <Comment onCommentSubmit={handleCommentSubmit} />

      {/* Input text field */}
      {showCommentInput && (
        <View>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={handleCommentInputChange}
            value={commentText}
          />
          {/* Add submit button or logic here */}
        </View>
      )}
    </View>
  );
}
