import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

export default function MiniCard(props) {
  return (
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
            width: Dimensions.get("screen").width / 2,
          }}
          ellipsizeMode="tail"
          numberOfLines={3}
        >
          {props.title}
        </Text>
        <Text style={{ fontSize: 12 }}>{props.channel}</Text>
      </View>
    </View>
  );
}
