import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";

export default function Card(props) {
  const { colors } = useTheme();
  const textcolor = colors.textColor;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoplayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={{ marginBottom: 3 }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: "100%",
            height: 200,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
          }}
        >
          <MaterialIcons name="account-circle" size={45} color="#212121" />
          <View
            style={{
              marginLeft: 3,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: textcolor,
                width: Dimensions.get("screen").width - 70,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {props.title}
            </Text>
            <Text
              style={{
                color: textcolor,
              }}
            >
              {props.channel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
