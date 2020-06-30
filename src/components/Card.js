import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Card() {
  return (
    <View style={{ marginBottom: 3 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
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
              width: Dimensions.get("screen").width - 70,
            }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            I'm baby salvia man bun shoreditch brunch semiotics truffaut keytar
            fanny pack. Art party ramps keffiyeh cardigan chicharrones hell of
            shaman gentrify chambray squid neutra pok pok fanny pack health goth
            YOLO.
          </Text>
          <Text>Austin mixtape hammock shaman pitchfork</Text>
        </View>
      </View>
    </View>
  );
}
