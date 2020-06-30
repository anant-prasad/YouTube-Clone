import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

export default function MiniCard() {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
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
          I'm baby salvia man bun shoreditch brunch semiotics truffaut keytar
          fanny pack. Art party ramps keffiyeh cardigan chicharrones hell of
          shaman gentrify chambray squid neutra pok pok fanny pack health goth
          YOLO.
        </Text>
        <Text style={{ fontSize: 12 }}>
          Squid lyft taxidermy marfa. Knausgaard gochujang tote bag, VHS XOXO
          paleo keffiyeh yuccie.
        </Text>
      </View>
    </View>
  );
}
