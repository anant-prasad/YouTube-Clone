import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

export default function MiniCard(props) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textcolor = colors.textColor;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoplayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: "40%",
            height: 80,
          }}
        />
        <View style={{ paddingLeft: 7 }}>
          <Text
            style={{
              fontSize: 15,
              color: textcolor,
              width: Dimensions.get("screen").width / 2,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}
          >
            {props.title}
          </Text>
          <Text style={{ fontSize: 12, color: textcolor }}>
            {props.channel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
